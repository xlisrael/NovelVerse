// // // import { useState, useEffect } from "react";
// // // import { ethers } from "ethers";

// // // const WalletConnect = () => {
// // //     const [walletAddress, setWalletAddress] = useState("");

// // //     // const connectWallet = async () => {
// // //     //     if (window.ethereum) {
// // //     //         try {
// // //     //             const provider = new ethers.providers.Web3Provider(window.ethereum);
// // //     //             await window.ethereum.request({ method: "eth_requestAccounts" });
// // //     //             const signer = provider.getSigner();
// // //     //             const address = await signer.getAddress();
// // //     //             setWalletAddress(address);
// // //     //         } catch (error) {
// // //     //             console.error("Wallet connection failed:", error);
// // //     //         }
// // //     //     } else {
// // //     //         alert("MetaMask not detected! Install it to use this feature.");
// // //     //     }
// // //     // };
// // //         const connectWallet = async () => {
// // //         try {
// // //             if (!window.ethereum) {
// // //                 alert("MetaMask not detected. Please install it.");
// // //                 return;
// // //             }

// // //             // Create provider using ethers.js
// // //             const provider = new ethers.providers.Web3Provider(window.ethereum);
// // //             await window.ethereum.request({ method: "eth_requestAccounts" });

// // //             const signer = provider.getSigner();
// // //             const address = await signer.getAddress();
            
// // //             console.log("Connected Address:", address);
// // //             setWalletAddress(address);
// // //         } catch (error) {
// // //             console.error("Wallet connection failed:", error);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             {walletAddress ? (
// // //                 <p>Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
// // //             ) : (
// // //                 <button onClick={connectWallet}>Connect Wallet</button>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default WalletConnect;

// // import React, { useState, useEffect } from "react";
// // import { ethers } from "ethers";
// // import { connectWallet, disconnectWallet } from "../utils/walletProvider";


// // const WalletConnect = () => {
// //     const [walletAddress, setWalletAddress] = useState("");
// //     useEffect(() => {
// //     if (!window.ethereum) {
// //         console.error("MetaMask is not installed or not detected");
// //     } else {
// //         console.log("MetaMask detected!");
// //     }
// //     }, []);
    
// //     const handleConnect = async () => {
// //         try {
// //         const { address } = await connectWallet();
// //         setWalletAddress(address);
// //         } catch (error) {
// //         console.error("Wallet connection failed:", error);
// //         }
// //     };

// //     const handleDisconnect = () => {
// //         disconnectWallet();
// //         setWalletAddress(null);
// //     };


// //     const connectWallets = async () => {
// //         try {
// //             if (!window.ethereum) {
// //                 alert("MetaMask not detected. Please install it.");
// //                 return;
// //             }

// //             const provider = new ethers.providers.Web3Provider(window.ethereum);
// //             await window.ethereum.request({ method: "eth_requestAccounts" });

// //             const signer = provider.getSigner();
// //             const address = await signer.getAddress();
            
// //             console.log("Connected Address:", address);
// //             setWalletAddress(address);
// //         } catch (error) {
// //             console.error("Wallet connection failed:", error);
// //         }
// //     };

// //     return (
// //         <div className="flex justify-between p-4 ">
// //             {/* <button onClick={connectWallets}>Connect Wallet</button>
// //             {walletAddress && <p>Connected: {walletAddress}</p>} */}
// //             {walletAddress ? (
// //             <div>
// //                 <p>Connected: {walletAddress}</p>
// //                 <button onClick={handleDisconnect} className="btn btn-danger">
// //                     Disconnect Wallet
// //                 </button>
// //             </div>
// //             ) : (
// //                 <button onClick={handleConnect} className="btn btn-primary">
// //                 Connect Wallet
// //                 </button>
// //             )}
// //         </div>
// //     );
// // };

// // export default WalletConnect;

// import React, { useState } from "react";
// import { ethers } from "ethers";

// const WalletConnect = () => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [showAddress, setShowAddress] = useState(false);

//   const connectWallet = async () => {
//     if (!window.ethereum) {
//       alert("MetaMask not detected!");
//       return;
//     }

//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const accounts = await provider.send("eth_requestAccounts", []);
//       setWalletAddress(accounts[0]);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress);
//     alert("Wallet Address Copied!");
//   };

//   return (
//     <div className="relative">
//       {!walletAddress ? (
//         <button
//           onClick={connectWallet}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         >
//           Connect Wallet
//         </button>
//       ) : (
//         <div className="relative">
//           <button
//             onClick={() => setShowAddress(!showAddress)}
//             className="px-4 py-2 bg-green-500 text-white rounded-md"
//           >
//             {showAddress ? "Hide Address" : "Show Address"}
//           </button>

//           {showAddress && (
//             <div
//               className="absolute top-full mt-2 p-2 bg-white text-black rounded-md shadow-lg"
//               onClick={copyToClipboard}
//               style={{ cursor: "pointer" }}
//             >
//               {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WalletConnect;

import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
// import { address } from "framer-motion/client";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [showAddress, setShowAddress] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
    

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected!");
      return;
    }

    // try {
    //   const provider = new ethers.BrowserProvider(window.ethereum);
    //   const accounts = await provider.send("eth_requestAccounts", []);
    //   setWalletAddress(accounts[0]);
    // } catch (error) {
    //   console.error("Wallet connection failed:", error);
      // }
      
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      alert("Wallet connected: " + address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
    };
    
    // const verifyOwnership = async () => {
    //     if (!walletAddress) {
    //         alert("Please connect your wallet first.");
    //         return;
    //     }

    //     try {
    //         //Step one Request from backend
    //         const response = await axios.get("http://localhost:8000/api/verify-wallet/", {
    //             params: { address: walletAddress }
    //         });

    //         const message = response.data.message;

    //         //Step two Sign message
    //         const provider = new ethers.BrowserProvider(window.ethereum);
    //         const signer = await provider.getSigner();
    //         const signature = await signer.signMessage(message);

    //         //Step three Send signature to backend
    //         const verification = await axios.post("http://localhost:8000/api/verify-wallet/", {
    //             address: walletAddress,
    //             signature
    //         });

    //         if (verification.data.success) {
    //             setIsVerified(true);
    //             alert("Wallet Ownership verified Successfully!");
    //         }
    //     } catch (error) {
    //         console.error("Ownership verification failed:", error);
    //     }
    // };

    // const verifyOwnership = async () => {
    //     if (!walletAddress) {
    //         alert("Please connect your wallet first.");
    //         return;
    //     }

    //     try {
    //         // Step 1: Request a verification message from the backend
    //         const response = await axios.post("http://127.0.0.1:8000/api/verify-wallet/", 
    //             // params: { address: walletAddress }
    //             { address: walletAddress },
    //             { headers: { "Content-Type": "application/json" } },
    //         );

    //         if (!response.data.message) {
    //             alert("Invalid response from server");
    //             return;
    //         }

    //         const message = response.data.message;

    //         // Step 2: Sign the message with the wallet
    //         const provider = new ethers.BrowserProvider(window.ethereum);
    //         const signer = await provider.getSigner();
    //         const signature = await signer.signMessage(message);
    //         console.log("Sending to backend:", JSON.stringify({ address: walletAddress, signature: signature }));
    //         // Step 3: Send the signed message to the backend for verification
            
    //         console.log("Wallet Address:", walletAddress);
    //         console.log("Signature:", signature);
    //         console.log("Sending Data:", JSON.stringify({ address: walletAddress, signature: signature }));


    //         const verification = await axios.post("http://127.0.0.1:8000/api/verify-wallet/",
    //             { address: walletAddress, signature: signature },
    //             { headers: { "Content-Type": "application/json" } },
    //         );

    //         if (verification.data.success) {
    //             setIsVerified(true);
    //             alert("Wallet Ownership Verified Successfully!");
    //         } else {
    //             alert("Verification failed: " + verification.data.message);
    //         }
    //     } catch (error) {
    //         console.error("Ownership verification failed:", error);
    //         alert("Error verifying wallet ownership.");
    //     }
    //     // console.log("Sending to backend:", JSON.stringify({ address: walletAddress, signature: signature }));

    // };
    // const verifyOwnership = async () => {
    //     if (!walletAddress) {
    //         alert("Please connect your wallet first.");
    //         return;
    //     }

    //     try {
    //         // Step 1: Request a verification message from the backend
    //         const response = await axios.post("http://127.0.0.1:8000/api/verify-wallet/", 
    //             { address: walletAddress },
    //             { headers: { "Content-Type": "application/json" } },
    //         );

    //         if (!response.data.message) {
    //             alert("Invalid response from server");
    //             return;
    //         }

    //         const message = response.data.message;

    //         // Step 2: Sign the message with the wallet
    //         const provider = new ethers.BrowserProvider(window.ethereum);
    //         const signer = await provider.getSigner();
    //         const signature = await signer.signMessage(message);

    //         console.log("Sending to backend:", JSON.stringify({ address: walletAddress, signature: signature }));

    //         // Step 3: Send the signed message to the backend for verification
    //         const verification = await axios.post("http://127.0.0.1:8000/api/verify-wallet/",
    //             { address: walletAddress, signature: signature },
    //             { headers: { "Content-Type": "application/json" } },
    //         );

    //         if (verification.data.success) {
    //             setIsVerified(true);
    //             alert("Wallet Ownership Verified Successfully!");
    //         } else {
    //             alert("Verification failed: " + verification.data.message);
    //         }
    //     } catch (error) {
    //         console.error("Ownership verification failed:", error);
    //         alert("Error verifying wallet ownership.");
    //     }
    // };
//   const verifyOwnership = async () => {
//     if (!walletAddress) {
//         alert("Please connect your wallet first.");
//         return;
//     }

//     try {
//         // Step 1: Request a verification message from the backend
//         const response = await axios.post("http://127.0.0.1:8000/api/verify-wallet/", 
//             { address: walletAddress },
//             { headers: { "Content-Type": "application/json" } },
//         );

//         if (!response.data.message) {
//             alert("Invalid response from server");
//             return;
//         }

//         const message = response.data.message;

//         // Step 2: Sign the message with the wallet
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const signature = await signer.signMessage(message);

//         console.log("Sending to backend:", JSON.stringify({ address: walletAddress, signature: signature }));

//         // Step 3: Send the signed message to the backend for verification
//         const verification = await axios.post("http://127.0.0.1:8000/api/verify-wallet/",
//             { address: walletAddress, signature: signature },
//             { headers: { "Content-Type": "application/json" } },
//         );

//         if (verification.data.success) {
//             setIsVerified(true);
//             alert("Wallet Ownership Verified Successfully!");
//         } else {
//             alert("Verification failed: " + verification.data.message);
//         }
//     } catch (error) {
//         console.error("Ownership verification failed:", error);
//         alert("Error verifying wallet ownership.");
//     }
//  };

const verifyOwnership = async () => {
    if (!walletAddress) {
        alert("Please connect your wallet first.");
        return;
    }

    try {
        // Step 1: Request a verification message from the backend
        const response = await axios.post("http://127.0.0.1:8000/api/verify-wallet/", 
            { address: walletAddress },
            { headers: { "Content-Type": "application/json" } },
        );

        if (!response.data.message) {
            alert("Invalid response from server");
            return;
        }

        const message = response.data.message;

        // Step 2: Sign the message with the wallet
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const signature = await signer.signMessage(message);

        console.log("Sending to backend:", JSON.stringify({ address: walletAddress, signature: signature }));

        // Step 3: Send the signed message to the backend for verification
        const verification = await axios.post("http://127.0.0.1:8000/api/verify-wallet/",
            { address: walletAddress, signature: signature },
            { headers: { "Content-Type": "application/json" } },
        );

        if (verification.data.success) {
            setIsVerified(true);
            alert("Wallet Ownership Verified Successfully!");
        } else {
            alert("Verification failed: " + verification.data.message);
        }
    } catch (error) {
        console.error("Ownership verification failed:", error);
        alert("Error verifying wallet ownership.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setShowAddress(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet Address Copied!");
  };

  return (
//     <div className="relative">
//       {!walletAddress ? (
//         <button
//           onClick={connectWallet}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md"
//         >
//           Connect Wallet </button>
        
//         {walletAddress && (
//             <button onClick={verifyOwnership} className="bg-green-500 text-white p-2 rounded ml-2">
//                 {isVerified ? "Verified ✅" : "Verify Ownership"}
//             </button>
//         )}
//       ) : (
//         <div className="relative flex items-center space-x-2">
//           <button
//             onClick={() => setShowAddress(!showAddress)}
//             className="px-4 py-2 bg-green-500 text-white rounded-md"
//           >
//             {showAddress ? "Hide Address" : "Show Address"}
//           </button>

//           {showAddress && (
//             <div
//               className="absolute top-full mt-2 p-2 bg-white text-black rounded-md shadow-lg cursor-pointer"
//               onClick={copyToClipboard}
//             >
//               {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//             </div>
//           )}

//           <button
//             onClick={disconnectWallet}
//             className="px-4 py-2 bg-red-500 text-white rounded-md"
//           >
//             Disconnect
//           </button>
//         </div>
//       )}
//     </div>
    //   );
      
            <div className="relative">
            {!walletAddress ? (
            <button
                onClick={connectWallet}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Connect Wallet
            </button>
            ) : (
            <div className="relative flex items-center space-x-2">
                <button
                onClick={() => setShowAddress(!showAddress)}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                {showAddress ? "Hide Address" : "Show Address"}
                </button>

                {showAddress && (
                <div
                    className="absolute top-full mt-2 p-2 bg-white text-black rounded-md shadow-lg cursor-pointer"
                    onClick={copyToClipboard}
                >
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </div>
                )}

                <button
                onClick={disconnectWallet}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                Disconnect
                </button>
            </div>
            )}

            {/* Verify Ownership Button - Always appears when wallet is connected */}
            {walletAddress && (
            <button
                onClick={verifyOwnership}
                className="bg-green-500 text-white p-2 rounded ml-2"
            >
                {isVerified ? "Verified ✅" : "Verify Ownership"}
            </button>
            )}
        </div>
    );
};

export default WalletConnect;
