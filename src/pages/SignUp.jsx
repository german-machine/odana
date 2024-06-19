import React from 'react'
import good from '../assets/images/good.png'
import eyeoff from '../assets/images/eye-off.png'
import whiteArrow from '../assets/images/white-arrow.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='w-full bg-white'>
            <div className="w-[90%] m-auto py-10">

                <div className="w-full mb-5">
                    <h3 className="text-[26px] font-semibold text-left text-[#030303]">Sign Up</h3>
                    <p className="text-[16px] text-[#7C7C7C] text-left">Enter your credentials to continue</p>
                </div>

                <form className="w-full">

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="" className="text-[15.04px] text-[#4F4F4F] font-bold text-left">Username</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input type="text" placeholder='Joseph Johnson' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                            <img src={good} alt="" className="hidden"/>
                        </div>
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="" className="text-[15.04px] text-[#4F4F4F] font-bold text-left">Email Address</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input type="email" placeholder='odana@gmail.com' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                            <img src={good} alt="" className="hidden"/>
                        </div>
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="" className="text-[15.04px] text-[#4F4F4F] font-bold text-left">Phone Number</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input type="number" placeholder='08123456789' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                            <img src={good} alt="" className="hidden"/>
                        </div>
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="" className="text-[15.04px] text-[#4F4F4F] font-bold text-left">Password</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input type="password" placeholder='**********' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                            <img src={eyeoff} alt="" className="hidden"/>
                        </div>
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="" className="text-[15.04px] text-[#4F4F4F] font-bold text-left">Confirm Password</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input type="password" placeholder='**********' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                            <img src={eyeoff} alt="" className="hidden"/>
                        </div>
                    </div>

                    <p className="text-[15px] mb-3 font-normal text-[#7C7C7C] text-center">By continuing, you agree to our <span className="text-[#53B175]">Terms of Service</span> and <span className="text-[#53B175]">Privacy Policy</span></p>

                    <Link className="border bg-[#299B56] text-center flex justify-center rounded-3xl items-center mb-5">
                        <Link className="flex items-center text-center py-2">
                            <p>Sign Up</p>
                        </Link>
                    </Link>

                    <div className='w-full flex items-center justify-center text-center'>
                        <div className='w-[100%] h-[1px] bg-black'></div>
                        <p className='w-[20%] text-[14px] text-[#030303]'>or</p>
                        <div className='w-[100%] h-[1px] bg-black'></div>
                    </div>

                    <Link className="border rounded-3xl border-[#53B175] flex items-center justify-center gap-2 mt-5 mb-5">
                        <img src={google} alt="" />
                        <Link className="text-[14px] font-semibold text-[#299B56] py-2">Sign Up with Google</Link>
                    </Link>

                    <Link className="border rounded-3xl border-[#53B175] flex items-center justify-center gap-2">
                        <img src={apple} alt="" />
                        <p className="text-[14px] font-semibold text-[#299B56] py-2">Sign Up with Apple</p>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp