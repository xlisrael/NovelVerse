# from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Novel
from .serializers import NovelSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.views import APIView
from django.http import JsonResponse
from eth_account.messages import encode_defunct
from web3 import Web3

# from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

# from django.views.decorators.http import require_POST
import json
import logging


# Create your views here.
class NovelViewSet(viewsets.ModelViewSet):
    queryset = Novel.objects.all()
    serializer_class = NovelSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)  # Allow file uploads

    def create(self, request, *args, **kwargs):
        title = request.data.get("title")

        # check if novel is already existing..
        if Novel.objects.filter(title=title).exists():
            return Response(
                {"error": "Novel already exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        return super().create(request, *args, **kwargs)

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        # return super().partial_update(request, *args, **kwargs)
        """Handles updating fields like 'published' status."""
        instance = self.get_object()
        instance.published = request.data.get("published", instance.published)
        instance.save()
        return Response(self.get_serializer(instance).data)

    def unpublish_update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.unpublished = request.data.get("unpublished", instance.unpublished)
        instance.save()
        return Response(self.get_serializer(instance).data)


class NovelCreateView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = NovelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Dummy blockchain connection
web3 = Web3(Web3.HTTPProvider("https://rpc.edu-chain.raas.gelato.cloud/41923"))
logger = logging.getLogger(__name__)
# pending_messages = {}


# @csrf_exempt
# # @require_POST
# # @api_view(["POST"])
# def verify_wallet(request):
#     # address = request.data.get("address")
#     # if not address:
#     #     return JsonResponse({"error": "Missing wallet address"}, status=400)

#     # # Step 1: Generate message
#     # message = f"Sign this message to verify ownership of {address}"

#     # return JsonResponse({"message": message})
#     if request.method == "POST":
#         try:
#             raw_data = request.body
#             logger.debug(f"Received raw data: {raw_data}")  # log raw request data

#             # data = json.loads(request.body.decode("utf-8"))
#             data = json.loads(raw_data)
#             address = data.get("address")
#             signature = data.get("signature")

#             if not address or not signature:
#                 return JsonResponse(
#                     {"error": "Missing address or signature"}, status=400
#                 )
#             # if not address:
#             #     return JsonResponse({"error": "Missing address"}, status=400)
#             # if not signature:
#             #     # Generate a unique message for the wallet to sign
#             #     message = f"Sign this message to verify ownership of {address}"
#             #     pending_messages[address] = message
#             #     return JsonResponse({"message": message})

#             # Retrieve the stored message
#             # message = pending_messages.get(address)
#             messages = f"Verify ownership of wallet: {address}"
#             encoded_message = encode_defunct(text=messages)
#             if not messages:
#                 return JsonResponse(
#                     {"error": "No message found for this address"}, status=400
#                 )

#             # hash the message
#             # message_hash = w3.solidity_keccak(["string"], [message])
#             # message_hash_bytes = message_hash.hex()
#             # encoded_message = encode_defunct(text=message)

#             # recover the address from the signature
#             w3 = Web3()
#             recovered_address = w3.eth.account.recover_message(
#                 # w3.to_bytes(hexstr=message_hash_bytes), signature=signature
#                 encoded_message,
#                 signature=signature,
#             )

#             # compare with the provided address
#             if recovered_address.lower() == address.lower():
#                 return JsonResponse(
#                     {"success": True, "message": "Wallet ownership verified!"}
#                 )
#             else:
#                 return JsonResponse(
#                     {"error": "Signature verification failed"}, status=400
#                 )
#         except json.JSONDecodeError:
#             return JsonResponse({"error": "Invalid JSON format"}, status=400)

#         except Exception as e:
#             return JsonResponse({"error": str(e)}, status=500)
#     return JsonResponse({"error": "Method not allowed"}, status=405)


# @csrf_exempt
# def verify_wallet(request):
#     if request.method == "POST":
#         try:
#             raw_data = request.body
#             logger.debug(f"Received raw data: {raw_data}")  # log raw request data

#             data = json.loads(raw_data)
#             address = data.get("address")
#             signature = data.get("signature")

#             if not address or not signature:
#                 logger.error("Missing address or signature")
#                 return JsonResponse(
#                     {"error": "Missing address or signature"}, status=400
#                 )

#             messages = f"Verify ownership of wallet: {address}"
#             encoded_message = encode_defunct(text=messages)

#             w3 = Web3()
#             recovered_address = w3.eth.account.recover_message(
#                 encoded_message,
#                 signature=signature,
#             )

#             if recovered_address.lower() == address.lower():
#                 logger.info("Wallet ownership verified")
#                 return JsonResponse(
#                     {"success": True, "message": "Wallet ownership verified!"}
#                 )
#             else:
#                 logger.error("Signature verification failed")
#                 return JsonResponse(
#                     {"error": "Signature verification failed"}, status=400
#                 )
#         except json.JSONDecodeError:
#             logger.error("Invalid JSON format")
#             return JsonResponse({"error": "Invalid JSON format"}, status=400)

#         except Exception as e:
#             logger.error(f"Exception: {str(e)}")
#             return JsonResponse({"error": str(e)}, status=500)
#     return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def verify_wallet(request):
    if request.method == "POST":
        try:
            raw_data = request.body
            logger.debug(f"Received raw data: {raw_data}")  # log raw request data

            data = json.loads(raw_data)
            address = data.get("address")
            signature = data.get("signature")

            if not address or not signature:
                logger.error("Missing address or signature")
                return JsonResponse(
                    {"error": "Missing address or signature"}, status=400
                )

            messages = f"Verify ownership of wallet: {address}"
            encoded_message = encode_defunct(text=messages)

            w3 = Web3()
            recovered_address = w3.eth.account.recover_message(
                encoded_message,
                signature=signature,
            )

            if recovered_address.lower() == address.lower():
                logger.info("Wallet ownership verified")
                return JsonResponse(
                    {"success": True, "message": "Wallet ownership verified!"}
                )
            else:
                logger.error("Signature verification failed")
                return JsonResponse(
                    {"error": "Signature verification failed"}, status=400
                )
        except json.JSONDecodeError:
            logger.error("Invalid JSON format")
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

        except Exception as e:
            logger.error(f"Exception: {str(e)}")
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Method not allowed"}, status=405)


# class VerifyWalletOwnership(APIView):
#     def post(self, request):
#         try:
#             web3 = Web3()
#             data = request.data
#             address = data.get("address")
#             signature = data.get("signature")
#             message = data.get("message", "Verify ownership of this wallet")

#             if not address or not signature:
#                 return Response({"error": "Missing address or signature"}, status=400)

#             encoded_message = encode_defunct(text=message)
#             recovered_address = web3.eth.account.recover_message(
#                 encoded_message, signature=signature
#             )

#             if recovered_address.lower() == address.lower():
#                 return Response(
#                     {"verified": True, "message": "Wallet ownership verified"}
#                 )
#             else:
#                 return Response(
#                     {
#                         "verified": False,
#                         "message": "Wallet ownership could not be verified",
#                     },
#                     status=400,
#                 )

#         except Exception as e:
#             return Response({"error": str(e)}, status=500)
