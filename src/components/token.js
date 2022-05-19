import { ethers } from "ethers";

import  MyToke from "../artifacts/MyToke.json"
import URL from "./url.js"

//for minting the token on blockchain
const contractAddress='0x76F2784e4beE049D0c2cF9f05c6D946aaf2ee672';
// const contractAddress="0x4108034edd3E02583c8aC198f86c38c81d4e895d";
const token=async(ur)=>{
      if (typeof window !== "undefined" && typeof window.ethereum !== "undefined"){              
        let provider;
        window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
        // const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        // console.log("ChainID",chainId)
        // const polygonChainId = '0x89'
        // if(chainId === polygonChainId){
        // console.log("Bravo!, you are on the correct network");
        // }else{
        // console.log("oulalal, switch to the correct network")
        // }
        //code for switching the network
        
      // try {
      //     await window.ethereum.request({
      //       method: 'wallet_switchEthereumChain',
      //       params: [{ chainId: polygonChainId}],
      //     });
      //     console.log("You have succefully switched to Polygon network")
      // } catch (switchError) {
      //     // This error code indicates that the chain has not been added to MetaMask.
      //     if (switchError.code === 4902) {
      //      alert("This network is not available in your metamask, please add it")
      //     }
      //     console.log("Failed to switch to the network")
      // }
          
      provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer=provider.getSigner();
      const contract=new ethers.Contract(contractAddress,MyToke.abi,signer);
      const metadataURI=ur
      const connection=contract.connect(signer);         
      const addr = await signer.getAddress(); //takes metamask address of user
      const result=await contract.safeMint(addr,metadataURI); //minting the nft on contract
          //try{
          //const r=await contract.ownerOf(100);
          //console.log(r)
          //}
          //catch{
            //console.log("doesn't exist")
          //}       
          await result.wait();
          alert("NFT minted")
      }else {
        //connect.innerText="Metamask not installed"
        //connect.classList.remove('text-white');
        //connect.classList.add('bg-gray-500', 'text-gray-100','cursor-not-allowed')
        alert('Metamask not installed.')
      }
  }

export default token;