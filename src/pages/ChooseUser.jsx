import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { BsShop } from 'react-icons/bs'

const ChooseUser = () => {
    const [user, setUser] = useState(['buyer', 'seller'])

    function buyerSelect() {
        setUser('buyer')
    }

    function sellerSelect() {
        setUser('seller')
    }

    return (
        <div className="w-full bg-white h-[100vh] flex">
            <div className="w-[90%] mx-auto my-auto py-10 flex flex-col justify-center h-[80%]">
                <h3 className="text-black text-[36px] md:text-[46px] text-center font-semibold mb-10">Sign up as a</h3>
                <div className="-full flex flex-col justify-center">
                    <div onClick={buyerSelect} className={`cursor-pointer ${user === 'buyer' ? 'bg-[#299B56]' : 'border border-solid border-[#299B56]'} w-[80%] md:w-[55%] lg:w-[30%] py-[30px] md:py-[40px] lg:py-[30px] m-auto mb-8 rounded-md flex items-center justify-center gap-3 text-center`}>
                        <MdOutlineShoppingCart className={`text-[35px] font-bold ${user === 'buyer' ? 'text-white' : 'text-[#299B56]'} `}/>
                        <p className={`${user === 'buyer' ? 'text-white' : 'text-[#299B56]'} text-[20px] font-semibold`}>Buyer</p>
                    </div>
                    <div onClick={sellerSelect} className={`cursor-pointer w-[80%] md:w-[55%] lg:w-[30%] py-[30px] md:py-[40px] lg:py-[30px] ${user === 'seller' ? 'bg-[#299B56]' : 'border border-solid border-[#299B56]'} m-auto mb-8 rounded-md flex items-center gap-3 text-center justify-center`}>
                        <BsShop className={`text-[35px] font-bold ${user === 'seller' ? 'text-white' : 'text-[#299B56]'} `}/>
                        <p className={`${user === 'seller' ? 'text-white' : 'text-[#299B56]'} text-[20px] font-semibold`}>Seller</p>
                    </div>
                </div>
                <Link to={user === 'buyer' ? '/sign-up-buyer' : user === 'seller' ? '/sign-up-seller' : ''} className="bg-[#299B56] w-[80%] md:w-[55%] lg:w-[30%] m-auto text-center inline-block py-3 md:py-5 lg:py-3 rounded-2xl">
                    <p className='text-white text-[14px] md:text-[20px] font-semibold'>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default ChooseUser