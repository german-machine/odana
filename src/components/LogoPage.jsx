import React from 'react'
import odanaLogo from '../assets/images/odanaLogo.png'

const LogoPage = () => {
    return (
        <div className="w-full h-[100vh] bg-white relative">
            <div className="w-[90%] h-full m-auto my-auto">
                <div className='translate-y-[300%] relative'>
                    <img src={odanaLogo} alt="" />
                </div>

                <div className="flex justify-center gap-2 absolute bottom-[50px] left-[40%] ">
                    <div className={`block w-[10px] h-[10px] bg-[#299B56] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                    <div className={`block w-[10px] h-[10px] bg-[#9F9F9F] rounded-full`}></div>
                </div>
            </div>
        </div>
    )
}

export default LogoPage