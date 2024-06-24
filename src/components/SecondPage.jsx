import React from 'react'
import twoPhones from '../assets/images/two-phones.png'

const SecondPage = () => {
    return (
        <div className="w-full h-[100vh] bg-white">
            <div className="w-[90%] m-auto">
                <div className='w-full h-full flex flex-col justify-center gap-10 translate-y-[50%]'>
                    <div className='w-full'>
                        <img src={twoPhones} alt="" />
                    </div>
                    <div>
                        <h3 className='text-[20px] text-black text-center font-semibold'>Secure Your Transaction</h3>
                        <p className='text-[15px] text-black text-center font-normal'>Use our services for all of your online transaction to eliminate fraud</p>

                    </div>
                </div>

                <div className="flex gap-2 absolute bottom-[50px] right-[10% left-[240%]">
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#299B56] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage