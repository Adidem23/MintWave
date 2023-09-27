import React from 'react'
import { useContract } from '@thirdweb-dev/react'
import { useState } from 'react';
import '../CSS/AllNFTS.css';

const GetAllNFTs = () => {

    const [AllNFTs, setAllNFTs] = useState([])
    const { contract } = useContract("0x78F457B69847D2E74907bb6e18EDcB14c8dfd319");

    return (
        <>
            <h2 className="heading-style-h1" style={{ display: "block", margin: "auto", width: "fit-content", marginTop: "250px" }}>Get All NFTS</h2>



        </>
    )
}

export default GetAllNFTs