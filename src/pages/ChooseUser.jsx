import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'
import deskBg from '../assets/images/deskBg.png'
import heroLanding from '../assets/images/hero-landing.png'
import odanaIcon from '../assets/images/odana-icon.png'


const ChooseUser = () => {
    const [user, setUser] = useState(['buyer', 'seller'])

    function buyerSelect() {
        setUser('buyer')
    }

    function sellerSelect() {
        setUser('seller')
    }

    return (
        <div className="w-full bg-white lg:bg-transparent h-screen flex" style={{backgroundImage: window.innerWidth > 1023 ? `url(${deskBg})` : '', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="w-[90%] lg:w-full lg:h-screen mx-auto my-auto py-10 lg:py-0 flex flex-col lg:flex-row justify-center h-[80%]">
                <div className="bg-white w-full lg:w-[70%] relative m-auto lg:h-full lg:flex lg:justify-center lg:place-items-center lg:rounded-r-[110px]">
                    <img src={odanaIcon} alt="" className='hidden lg:block lg:absolute lg:w-[25%] lg:top-0 lg:left-0 ' />
                    <div className='w-full lg:w-[80%] m-auto'>
                        <h3 className="text-black text-[36px] md:text-[46px] text-center font-semibold mb-10">Sign up as a</h3>
                        <div className="-full flex flex-col justify-center">
                            <div onClick={buyerSelect} className={`cursor-pointer ${user === 'buyer' ? 'bg-[#299B56]' : 'border border-solid border-[#299B56]'} w-[80%] md:w-[55%] lg:w-[60%] py-[30px] lg:px-0 md:py-[40px] lg:py-0 m-auto mb-8 rounded-md flex items-center justify-center gap-3 lg:gap-0 text-center`}>
                                <div className='lg:w-[35%] lg:h-full lg:py-[30px] lg:m-auto lg:bg-[#299B56] lg:flex lg:justify-center '>
                                    <MdOutlineShoppingCart className={`text-[35px] lg:text-[50px] font-bold ${user === 'buyer' ? 'text-white' : 'text-[#299B56]'} lg:text-white`} />
                                </div>
                                <div className='lg:w-[70%] lg:m-auto '>
                                    <p className={`${user === 'buyer' ? 'text-white' : 'text-[#354d3f] lg:text-[#299B56]'} text-[20px] lg:text-[25px] font-semibold`}>Buyer</p>
                                </div>
                            </div>
                            <div onClick={sellerSelect} className={`cursor-pointer w-[80%] md:w-[55%] lg:w-[60%] py-[30px] md:py-[40px] lg:py-0 ${user === 'seller' ? 'bg-[#299B56]' : 'border border-solid border-[#299B56]'} m-auto mb-8 rounded-md flex items-center gap-3 lg:gap-0 text-center justify-center`}>
                                <div className='lg:w-[35%] lg:h-full lg:py-[30px] lg:m-auto lg:bg-[#299B56] lg:flex lg:justify-center '>
                                    <BsShop className={`text-[35px] lg:text-[50px] font-bold ${user === 'seller' ? 'text-white' : 'text-[#299B56]'} lg:text-white `} />
                                </div>
                                <div className='lg:w-[70%] lg:m-auto '>
                                    <p className={`${user === 'seller' ? 'text-white' : 'text-[#299B56]'} text-[20px] lg:text-[25px] font-semibold`}>Seller</p>
                                </div>
                            </div>
                        </div>
                        <Link to={user === 'buyer' ? '/sign-up-buyer' : user === 'seller' ? '/sign-up-seller' : ''} className="bg-[#299B56] w-[80%] md:w-[55%] lg:w-[30%] m-auto text-center block py-3 md:py-5 lg:py-2 rounded-2xl lg:rounded-md">
                            <p className='text-white text-[14px] md:text-[20px] font-semibold'>Next</p>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex lg:w-[45%] m-auto h-fit px-4'>
                    <img src={heroLanding} alt="" className='h-fi' />
                </div>
            </div>
        </div>
    )
}

export default ChooseUser