import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../assets/images/white-arrow.png'
import heroLanding from '../assets/images/hero-landing.png'
import guard from '../assets/images/guard.png'
import btc from '../assets/images/btc.png'
import growChart from '../assets/images/chart.png'

const Hero = () => {
    const [imgWidth, setImgWidth] = useState(35);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 690) { //check if windows width is above 690px
                setImgWidth(40) // if windows width is above 690px, imgWidth should be set to 75
            } else {
                setImgWidth(imgWidth) //if windows width is not above 690px, imgWidth should remain at 35
            }
        }
        //Initial call to set image size based on screen width
        handleResize();

        // Event listener to check for window size and resize window
        window.addEventListener('resize', handleResize);

        // Remove the event listener after window resize
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
        <div className="w-full scroll-smooth" id='home'>
            <div className="w-[90%] md:w-[80%] m-auto py-8">
                <div className="w-full flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-[90%] md:py-5 lg:py-0">
                        <h2 className="text-[32px] md:text-[68px] lg:text-[64px] xl:text-[74px] md:font-medium md:max-w-[110%] text-white leading-[48px] md:leading-[75px] xl:leading-[80px] font-bold text-center md:text-left mb-5 md:mb-8 lg:mb-5">The safest way to buy and sell</h2>
                        <p className="text-[18px] md:text-[22px] lg:text-[18px] xl:text-[22px] leading-[28px] text-center md:text-left text-white font-normal max-w-[85%] m-auto">Partner & Transact with confidence when using <span className="font-bold">ODANA</span> platform, with trust to secure your online <span className="block md:inline-block">transactions,</span> and ensure that you get your goods and also get paid.</p>

                        <div className="flex items-center justify-evenly my-10">
                            <Link className="text-[10px] md:text-[18px] lg:text-[12px] font-semibold bg-white py-3 px-3 rounded-lg text-[#38B148]">Transact Now</Link>
                            <Link>
                                <div className="flex items-center text-center justify-center">
                                    <p className='text-[10px] md:text-[18px] lg:text-[12px] '>Learn More</p>
                                    <img src={arrowLeft} alt="" className='text-[10px] md:text-[18px] lg:text-[12px]' />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="w-[80%] md:w-[80%] lg:[100%] m-auto object-fill lg:pt-[100px] mb-[10px]">
                        <img src={heroLanding} alt="" />
                    </div>
                </div>


                <div className="w-full md:w-[90%] m-auto flex flex-col md:flex-row gap-3 md:gap-10 lg:gap-[100px] mt-2 xl:mt-3 mb-4">

                    <div className="flex items-center gap-3">
                        <img src={guard} alt=""  width={imgWidth} />
                        <p className="text-white text-[16px] font-normal">Eliminate fraud & bad debt</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={btc} alt="" width={imgWidth} />
                        <p className="text-white text-[16px] font-normal">Enhoy risk-free transactions</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={growChart} alt="" width={imgWidth} />
                        <p className="text-white text-[16px] font-normal">Grow your business</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero