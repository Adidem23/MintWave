"use client";
import MainRender from "./Components/MainRender";
import { ThirdwebProvider , ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { ThemeProvider } from "./Components/Context";
import { ethers } from "ethers";



export default function Home() {

  const Activechain: number = 80001;

  return (
    <>
      <ThemeProvider>
        <ThirdwebProvider activeChain={Activechain} clientId="5fb26c268ed64fb73d9fb6010411dca9">
          <ThirdwebSDKProvider activeChain={Activechain} clientId="5fb26c268ed64fb73d9fb6010411dca9" signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}>
            <MainRender />
          </ThirdwebSDKProvider>
        </ThirdwebProvider>
      </ThemeProvider>
    </>
  )
}
