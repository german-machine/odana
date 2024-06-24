import React from 'react'
import bgHero from '../assets/images/bg-hero.png'
import mobHero from '../assets/images/mobile-bg.png'
import hiwImg from '../assets/images/hiw-img.png'
import hiwTxt from '../assets/images/hiw-texts.png'

const HowItWorks = () => {
    return (
        <div style={{ backgroundImage: `url(${window.innerWidth > 690 ? bgHero : mobHero})` }}>
            <div className="w-[90%] md:w-[80%] m-auto">
                <h1>How It Works</h1>
                <p>ODANA protects buyers and sellers by holding the buyer’s funds in the ODANA holding account until the seller delivers the goods or fulfils their obligations. Buyers get and confirmed what they paid for, and sellers are guaranteed payment.</p>

                <div>
                    <div>
                        <img src={hiwImg} alt="" />
                        <img src={hiwTxt} alt="" />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks