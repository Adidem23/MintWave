"use client"
import React from 'react'
import '../CSS/MintPage.css'
import { useTheme } from './Context'
import { useState } from 'react'
import { ethers } from 'ethers'
import { ThirdwebSDK, useContract } from '@thirdweb-dev/react'



const MintPage = () => {

    const [Name, setName] = useState("");
    const [Desc, setDesc] = useState("");
    const [Image, setImage] = useState<string | null>(null);
    const [Image1, setImage1] = useState(null)
    const [ClickedForImage, setClickedForImage] = useState(false)
    const [Account, setAccount] = useState("")
    const { contract } = useContract("0x78F457B69847D2E74907bb6e18EDcB14c8dfd319");


    const HandleFile = async (event: any) => {
        setClickedForImage(true);

        const selectedImage = event.target.files[0];
        setImage1(selectedImage);

        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage))
        }

    }

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

    const MintGivenNFT = async () => {

        setClickedForImage(false);

        const providers = new ethers.providers.Web3Provider(window.ethereum);
        const Signers = new ethers.Wallet("5ad7f7823ac4a9518b1ce47b007c63c150bc31382d6878d48cce4abb2cc707ef", providers);

        const sdk = ThirdwebSDK.fromSigner(Signers)
        sdk.wallet.connect(Signers);

        const ContractAsa = await sdk.getContract("0x78F457B69847D2E74907bb6e18EDcB14c8dfd319");
        await ContractAsa.roles.grant("minter", Account!);

        const metadata = {
            name: Name,
            description: Desc,
            image: Image1
        }

        const transaction = await contract!.erc721.mintTo(Account!, metadata);
        console.log(transaction)
    }

    const { isDarkMode } = useTheme();

    // if (isDarkMode) {
    //     const bodycard = document.querySelectorAll('.carddiv');
    //     bodycard.forEach((carder) => {
    //         carder.style.backgroundColor = "#B9B4C7"
    //     })
    // } else {
    //     const bodycard = document.querySelectorAll('.carddiv');
    //     bodycard.forEach((carder) => {
    //         carder.style.backgroundColor = "#ffffff"
    //     })
    // }


    return (
        <>


            <h2 className="heading-style-h1" style={{ display: "block", margin: "auto", width: "fit-content" }}>Mint One</h2>

            <div style={{ display: "block", margin: "auto", width: "fit-content", marginTop: "250px", }}>

                <div style={{ display: "flex", flexDirection: "row", border: "3px solid yellow" }}>

                    <div className="wrapper1">
                        <div className="card-switch1">
                            <label className="switch1">
                                <input type="checkbox" className="toggle1" />
                                <span className="slider1"></span>
                                <span className="card-side1"></span>

                                <div className="flip-card__inner1"  >
                                    <div className="flip-card__front1 carddiv">
                                        <div className="title1">Enter Metedata</div>
                                        <form className="flip-card__form1" action="">

                                            <input className="flip-card__input1" type="text" placeholder='Name of NFT' onChange={(e: any) => { setName(e.target.value) }} />

                                            <input className="flip-card__input1" type="text" placeholder='Description of NFT' onChange={(e) => { setDesc(e.target.value) }} />

                                            

                                        </form>
                                        <div>
                                            <button className='flip-card__btn1' onClick={MintGivenNFT} >Mint</button>
                                        </div>
                                    </div>

                                    <div className="flip-card__back1 carddiv" id='upload'>
                                        {!ClickedForImage ? <label className="custum-file-upload1" htmlFor="file">
                                            <div className="icon1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" ></path> </g></svg>
                                            </div>
                                            <div className="text1" id='ImageUpload'>
                                                <span>Click to upload image</span>
                                            </div>
                                            <input type="file" accept='image/*' id="file" onChange={HandleFile} />
                                        </label> : <><img src={Image!}  style={{ background: "#000" }}  id='imageuploaded' /></>}
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default MintPage