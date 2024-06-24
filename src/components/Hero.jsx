import React, { useState } from 'react'
import bgHero from '../assets/images/bg-hero.png'
import { Link } from 'react-router-dom'
import arrowLeft from '../assets/images/white-arrow.png'
import heroLanding from '../assets/images/hero-landing.png'
import guard from '../assets/images/guard.png'
import btc from '../assets/images/btc.png'
import growChart from '../assets/images/chart.png'

const Hero = () => {
    return (
        <div className="relative top-[10vh]" style={{ backgroundImage: `url(${bgHero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="w-[90%] m-auto py-6">
                <h2 className="text-[32px] text-white leading-[48px] font-bold text-center mb-5">The safest way to buy and sell</h2>
                <p className="text-[18px] leading-[28px] text-center text-white font-normal max-w-[85%] m-auto">Partner & Transact with confidence when using <span className="font-bold">ODANA</span> platform, with trust to secure your online <span>transactions,</span> and ensure that you get your goods and also get paid.</p>

                <div className="flex items-center justify-evenly my-10">
                    <Link className="text-[10px] font-semibold bg-white py-3 px-3 rounded-lg text-[#38B148]">Transact Now</Link>
                    <Link>
                        <div className="flex items-center text-center justify-center">
                            <p>Learn More</p>
                            <img src={arrowLeft} alt="" />
                        </div>
                    </Link>
                </div>

                <div>
                    <img src={heroLanding} alt="" />
                </div>

                <div className="flex flex-col gap-3 mt-8 mb-4">
                    <div className="flex items-center gap-3">
                        <img src={guard} alt="" width={35} />
                        <p className="text-white text-[16px] font-normal">Eliminate fraud & bad debt</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={btc} alt="" width={35} />
                        <p className="text-white text-[16px] font-normal">Enhoy risk-free transactions</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={growChart} alt="" width={35} />
                        <p className="text-white text-[16px] font-normal">Grow your business</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero