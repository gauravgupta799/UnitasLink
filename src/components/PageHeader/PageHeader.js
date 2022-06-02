import React from "react";
import token from "../token";
import Background from "../../assets/BgAnime/Background"
import {Button } from "reactstrap";

export default function PageHeader() {
  const mintToken = async () => {
    const ur = "https://gateway.pinata.cloud/ipfs/QmWQ4o2Keu9kHWnGmbZW4jbjxmthP73GPzWP9UmTmLzKYY";
    token(ur);
  };
  return (
    <>
      <div className="page-header header-filter" >
          <Background/>
          <div className="content-center brand" >
            <h1 className="h1-seo">Mint NFT </h1>
            <h2 className="d-sm-block">
              Pay gas fees and our NFT will be minted in your wallet.
            </h2>
            <Button className="btn px-5" color="info" style={{color:"white"}} onClick={mintToken}>Mint</Button>
          </div>
      </div>
    </>
  );
} 