import React from 'react'
import good from '../assets/images/good.png'
import eyeoff from '../assets/images/eye-off.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full h-[100vh] lg:h-full bg-white'>
            <div className="w-[90%] m-auto py-10 xl:py-2 h-full ">
                    <div className="w-full mb-5 flex flex-col items-center">
                        <h3 className="text-[28px] md:text-[70px] lg:text-[50px] font-semibold text-left md:text-center text-[#030303]">Login</h3>
                        <p className="text-[18px] md:text-[30px] lg:text-[22px] text-[#7C7C7C] text-left md:text-center">Enter your credentials to continue</p>
                    </div>

                    <form className="w-full md:w-[80%] lg:w-[50%] m-auto ">

                        <div className="text-left mb-5 flex flex-col gap-2">
                            <label htmlFor="" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Username</label>
                            <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                                <input type="text" placeholder='Joseph Johnson' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] "/>
                                <img src={good} alt="" className="hidden"/>
                            </div>
                        </div>

                        <div className="text-left mb-9 flex flex-col gap-2">
                            <label htmlFor="" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Password</label>
                            <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                                <input type="password" placeholder='**********' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                                <img src={eyeoff} alt="" className="hidden"/>
                            </div>
                        </div>

                        <Link className="md:w-[60%] m-auto border bg-[#299B56] text-center flex justify-center rounded-3xl items-center mb-5">
                            <Link className="flex items-center text-center py-2 md:py-1">
                                <p className='text-[18px] md:text-[24px]'>Login</p>
                            </Link>
                        </Link>

                        <p className="text-[18px] md:text-[22px] text-[#030303] font-semibold text-center mb-3">Don't have an account? </p>

                        <Link to='/get-started' className="w-fit m-auto flex text-[20px] md:text-[24px] text-[#53B175] font-semibold text-center">Sign up</Link>

                        <Link className="md:w-[60%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2 mt-3 mb-3">
                            <img src={google} alt="" width={30} />
                            <Link className="text-[16px] md:text-[18px] font-semibold text-[#299B56] py-2">Login with Google</Link>
                        </Link>

                        <Link className="md:w-[60%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2">
                            <img src={apple} alt="" width={30} />
                            <p className="text-[16px] md:text-[18px] font-semibold text-[#299B56] py-2">Login with Apple</p>
                        </Link>
                    </form>                
            </div>
        </div>
    )
}

export default Login