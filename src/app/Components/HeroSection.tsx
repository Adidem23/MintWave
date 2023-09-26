"use client";
import React from 'react'
import Spline from '@splinetool/react-spline'
import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import '../CSS/atropos.css'

const HeroSection = () => {
    return (
        <>
            <div style={{ width: "fit-content", display: "block", margin: "auto",marginTop:"30px"}}>
                <Atropos className='my-atropos' style={{width:"fit-content",height:"fit-content"}} shadowScale={0} activeOffset={10} shadow={false}>
                    <Spline scene="https://prod.spline.design/UePQhssmhmkUBseM/scene.splinecode" />
                </Atropos>
            </div>
        </>
    )
}

export default HeroSection