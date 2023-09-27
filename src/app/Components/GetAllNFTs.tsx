import React from 'react'
import { NFT, useContract } from '@thirdweb-dev/react'
import { useState } from 'react';
import '../CSS/AllNFTS.css';
import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import '../CSS/atropos.css'

const GetAllNFTs = () => {

    const [AllNFTs, setAllNFTs] = useState<NFT[] | undefined>([]);
    const [Account, setAccount] = useState("");
    const { contract } = useContract("0x78F457B69847D2E74907bb6e18EDcB14c8dfd319");

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day} `;

    const ConnectToMetamask = async () => {
        const { ethereum } = window;

        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(account[0]);

        ethereum.on('accountsChanged', async (accountnew: string[]) => {
            setAccount(accountnew[0]);
        })

    }
    ConnectToMetamask();

    const getAllNFtsofUsers = async () => {
        const AllNfts = await contract!.erc721.getOwned(Account);
        setAllNFTs(AllNfts);
    }

    getAllNFtsofUsers();


    return (
        <>
            <div style={{ display: "block", margin: "auto", width: "fit-content", marginTop: "250px" }}>
                <h2 className="heading-style-h1">Get All NFTS</h2>
                <hr />
            </div>

            <div id='zanduBaam'>
                {AllNFTs!.map((val) => {
                    return (<>
                        <Atropos className='my-atropos' style={{ width: "fit-content", height: "fit-content" }} shadowScale={0} activeOffset={10} shadow={false}>
                            <div className="cardop">
                                <div className="imageop">
                                    <img src={val.metadata.image!} alt="😒😒" />
                                </div>
                                <div className="card-infoop">
                                    <span>Name of Minted was {val.metadata.name}</span>
                                    <p>With Description {val.metadata.description}</p>
                                    <p>Minted on {formattedDate}</p>
                                </div>
                            </div>
                        </Atropos>
                    </>)
                })}
            </div>


        </>
    )
}

export default GetAllNFTs
