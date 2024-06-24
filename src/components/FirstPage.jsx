import React from 'react'
import manWoman from '../assets/images/man-woman.png'

const FirstPage = () => {
    return (
        <div className="w-full h-[100vh] bg-white">
            <div className="w-[80%] m-auto">
                <div className='w-full h-full flex flex-col justify-center gap-10 translate-y-[50%]'>
                    <div className='w-full'>
                        <img src={manWoman} alt="" />
                    </div>
                    <div>
                        <h3 className='text-[20px] text-black text-center font-semibold'>Shop smart online</h3>
                        <p className='text-[15px] text-black text-center font-normal'>Odana allow various parties to engage in the exchange of goods and services within a sale and purchase agreement teams.</p>

                    </div>
                </div>

                <div className="flex gap-2 absolute bottom-[50px] right-[10% left-[140%]">
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#299B56] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage