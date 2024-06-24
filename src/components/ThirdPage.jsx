import React from 'react'
import onTable from '../assets/images/on-table.png'

const ThirdPage = () => {
    return (
        <div className="w-full h-[100vh] bg-white">
            <div className="w-[90%] m-auto">
                <div className='w-full h-full flex flex-col justify-center gap-10 translate-y-[35%]'>
                    <div className='w-full'>
                        <img src={onTable} alt="" />
                    </div>
                    <div>
                        <h3 className='text-[20px] text-black text-center font-semibold'>Dispute Resolution</h3>
                        <p className='text-[15px] text-black text-center font-normal'>Incase of dissatisfaction of one part, a dispute resolution system is set up to fairly resolve it</p>

                    </div>
                </div>

                <div className="flex gap-2 absolute bottom-[50px] right-[10% left-[340%]">
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#299B56] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage