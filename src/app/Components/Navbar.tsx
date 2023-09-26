"use client";
import React from 'react';
import '../CSS/Navbar.css';
import { useTheme } from './Context';
import { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';


const Navbar = () => {

    const { isDarkMode, toggleTheme } = useTheme();
    const [Clicked, setClicked] = useState(false)
    const [Account, setAccount] = useState("")

    if (isDarkMode) {
        document.body.style.backgroundColor = "#393646";
        document.body.style.color = "#B9B4C7";
        const lielements = document.querySelectorAll('li');
        const buttonelem = document.querySelector('button');
        buttonelem!.style.backgroundColor = "#B9B4C7"
        buttonelem!.style.fontWeight = "bolder"

        lielements.forEach((lielem) => {
            lielem.style.color = "#B9B4C7"
            lielem.style.fontWeight = "bold"
        })
    } else {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "black"

    }

    const ConnectAccount = async () => {

        setClicked(true)

        const { ethereum } = window;

        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(account[0])

        ethereum.on('accountsChanged', async (accountnew: string[]) => {
            setAccount(accountnew[0])
        })

    }


    return (
        <>
            <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className="logo">
                    <img
                        src={'https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?size=626&ext=jpg&ga=GA1.1.1961946707.1693059024&semt=sph'}
                        alt="Logo"
                    />
                    <span className="logo-text">Mintwave</span>
                </div>

                <ul className="nav-links">
                    <li><a href="#" className='Listelem d'>Home</a></li>
                    <li><a href="#" className='Listelem d'>About</a></li>
                    <li><a href="#" className='Listelem d'>Services</a></li>
                    <li><a href="#" className='Listelem d'>Contact</a></li>
                    <li><a href="#" className='Listelem d'>{Clicked && <> <Jazzicon diameter={15} seed={jsNumberForAddress(`${Account}`)} /></>}</a></li>
                    <li><a href="#" className='Listelem d'>{Clicked && <>{Account.substring(0,9)}</>}</a></li>
                </ul>

                <div className="toggle-switch">
                    <label className="switch-label">
                        <input type="checkbox" className="checkbox" onClick={toggleTheme} />
                        <span className="slider"></span>
                    </label>
                </div>

                {!Clicked ? <button className='beautiful-button' id='Button' onClick={ConnectAccount}>Connect</button> : <><p className='beautiful-button'>Connected!!</p></>}

            </nav>
        </>
    );
};

export default Navbar;
