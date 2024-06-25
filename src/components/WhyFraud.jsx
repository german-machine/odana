import React from 'react'
import deskPhone from '../assets/images/desktop-phone.png'
import mobPhone from '../assets/images/mobile-phone.png'
import arrowLeft from '../assets/images/green-arrow.png'
import { Link } from 'react-router-dom'

const WhyFraud = () => {
    return (
        <div className="w-full bg-[#FCFCFF]">
            <div className="w-[90%] lg:w-[80%] m-auto py-10">
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="w-full lg:w-[50%] m-auto flex justify-center">
                        <img src={deskPhone} alt="" className="w-[90%] m-auto hidden lg:block"/>
                        <img src={mobPhone} alt="" className="w-[90%] m-auto lg:hidden"/>
                    </div>

                    <div className='w-full lg:w-[70%]'>
                        <h1 className="text-[27px] md:text-[34px] lg:text-[40px] lg:font-medium text-black leading-[40px] text-center lg:text-left w-full font-bold lg:mb-5 ">Why <span className="text-[#38B148]">Fraud</span> shouldn't stop you from <span className="text-[#38B148]">growing</span></h1>
                        <p className="text-[18px] md:text-[22px] lg:text-[18px] text-center lg:text-justify font-normal text-black leading-[32px]">Whether you are buying or selling, or you are an individual or a corporate firm, fraud poses a threat to your business growth. Let <span className='font-bold'>ODANA</span> help you beat the risk so that you can be safe and also grow.</p>
                        <div className="flex items-center justify-evenly my-10">
                            <Link className="text-[10px] md:text-[16px] font-semibold bg-[#38B148] py-3 px-3 rounded-[15px] text-white">Transact Now</Link>
                            <Link>
                                <div className="flex items-center text-center gap-3">
                                    <p className='text-[#38B148]'>Learn More</p>
                                    <img src={arrowLeft} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyFraud