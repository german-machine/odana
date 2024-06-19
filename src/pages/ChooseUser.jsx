import React from 'react'
import cart from '../assets/images/cart.png'
import shop from '../assets/images/shop.png'
import { Link } from 'react-router-dom'

const ChooseUser = () => {
    return (
        <div className="w-full bg-white h-[100vh]">
            <div className="w-[90%] mx-auto my-auto py-10 flex flex-col">
                <h3 className="text-black text-[20px] text-center font-semibold mb-10">Sign up as a</h3>
                <div className="-full flex flex-col justify-center">
                    <Link className="bg-[#299B56] w-[80%] h-[108px] m-auto mb-8 rounded-md flex items-center justify-center gap-3 text-center">
                        <img src={cart} alt="" />
                        <p className='text-white text-[20px] font-semibold'>Buyer</p>
                    </Link>
                    <Link className="w-[80%] h-[108px] border border-solid border-[#299B56] m-auto mb-8 rounded-md flex items-center gap-3 text-center justify-center">
                        <img src={shop} alt="" />
                        <p className='text-[#299B56] text-[20px] font-semibold'>Seller</p>
                    </Link>
                </div>
                <Link to='/sign-up' className="bg-[#299B56] w-[90%] m-auto text-center inline-block py-2 rounded-2xl">
                    <p className='text-white text-[14px] font-semibold'>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default ChooseUser