import React from 'react'
import '../CSS/HeroSection2.css'


const HeroSection2 = () => {
    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">

                            <h2 className="heading-style-h1">MintWave : Mint NFT As You Want</h2>


                            <div style={{ marginTop: "50px", display: "flex", flexDirection: "row", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}  >

                                <div className="card">
                                    <div className="icon">😎</div>
                                    <div className="title">Mint NFT</div>
                                    <p className="description">Mint NFT As You Want . You can turn Anything into NFTs . Turn Images , Videos , Music  and anything you see into Reality</p>
                                </div>

                                <div className="card" style={{ marginLeft: "80px" }} >
                                    <div className="icon">🫠</div>
                                    <div className="title">View All Transactions</div>
                                    <p className="description">Track Your Latest Transaction on Our Site. Explore Your NFTs Metadata , Images and Characters which you have explored Earlier.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection2