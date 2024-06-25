import React from 'react'
import bgHero from '../assets/images/bg-hero.png'
import mobHero from '../assets/images/hiw.png'
import hiwImg from '../assets/images/hiw-img.png'
import hiwTxt from '../assets/images/hiw-texts.png'
import arrowLeft from '../assets/images/white-arrow.png'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
    return (
        <div style={{ backgroundImage: `url(${window.innerWidth > 690 ? bgHero : mobHero})` }}>
            <div className="w-[90%] lg:w-[80%] m-auto py-10">
                <h1 className='text-[27px] md:text-[34px] font-bold text-center '>How It Works</h1>
                <p className='text-[18px] md:text-[22px] lg:text-[18px] text-center font-normal leading-[30px]'>ODANA protects buyers and sellers by holding the buyer’s funds in the ODANA holding account until the seller delivers the goods or fulfils their obligations. Buyers get and confirmed what they paid for, and sellers are guaranteed payment.</p>

                <div className="w-[90%] m-auto flex justify-between items-center pt-10">
                    <div className="w-full md:w-[55%] hidden md:block flex-shrink-0 justify-center">
                        <img src={hiwImg} alt="" className="" />
                        <div className="flex items-center justify-evenly my-10">
                            <Link className="text-[10px] md:text-[16px] font-semibold bg-white py-3 px-3 rounded-[15px] text-[#38B148]">Transact Now</Link>
                            <Link>
                                <div className="flex items-center text-center gap-3 md:gap-0">
                                    <p className='text-white'>Learn More</p>
                                    <img src={arrowLeft} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-[70%]">
                        <img src={hiwTxt} alt="" className='bg-cover' />
                        <div className="flex md:hidden items-center justify-evenly my-10">
                            <Link className="text-[10px] md:text-[16px] font-semibold bg-white py-3 px-3 rounded-[15px] text-[#38B148]">Transact Now</Link>
                            <Link>
                                <div className="flex items-center text-center gap-3">
                                    <p className='text-white'>Learn More</p>
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

export default HowItWorks