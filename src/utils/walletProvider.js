import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";
import { useState } from "react";
// Web3Modal instance
const providerOptions = {
  // MetaMask
  injected: {
    display: {
      name: "MetaMask",
      description: "Connect with MetaMask",
    },
    package: null,
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: true, // Caches the last connected provider
  providerOptions,
});

export const connectWallet = async () => {
  
  try {
    const instance = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(instance);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    console.log("Connected Address:", address);
    return { provider, signer, address };
  } catch (error) {
    console.error("Wallet connection failed:", error);
    throw error;
  }
};

export const disconnectWallet = async () => {
  web3Modal.clearCachedProvider();
  console.log("Wallet disconnected");
};