import React from 'react'
import deskPhone from '../assets/images/desktop-phone.png'
import mobPhone from '../assets/images/mobile-phone.png'
import arrowLeft from '../assets/images/green-arrow.png'
import { Link } from 'react-router-dom'

const WhyFraud = () => {
    return (
        <div className="w-full bg-[#FCFCFF]">
            <div className="w-[90%] md:w-[80%] m-auto py-10">
                <div className="w-full flex flex-col md:flex-row gap-8">
                    <div className="w-full m-auto flex justify-center">
                        <img src={deskPhone} alt="" className="hidden md:block"/>
                        <img src={mobPhone} alt="" className="md:hidden"/>
                    </div>

                    <div>
                        <h1 className="text-[27px] text-black leading-[40px] text-center font-bold ">Why <span className="text-[#38B148]">Fraud</span> shouldn't stop you from <span className="text-[#38B148]">growing</span></h1>
                        <p className="text-[18px] font-normal text-black leading-[32px]">Whether you are buying or selling, or you are an individual or a corporate firm, fraud poses a threat to your business growth. Let <span className='font-bold'>ODANA</span> help you beat the risk so that you can be safe and also grow.</p>
                        <div className="flex items-center justify-evenly my-10">
                            <Link className="text-[10px] font-semibold bg-[#38B148] py-3 px-3 rounded-[15px] text-white">Transact Now</Link>
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