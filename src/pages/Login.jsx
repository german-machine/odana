import React from 'react'
import good from '../assets/images/good.png'
import eyeoff from '../assets/images/eye-off.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'
import { Link } from 'react-router-dom'
import deskBg from '../assets/images/deskBg.png'
import heroLanding from '../assets/images/hero-landing.png'
import odanaIcon from '../assets/images/odana-icon.png'
import userIcon from '../assets/images/username-icon.png'
import passIcon from '../assets/images/pass-icon.png'

const Login = () => {
    return (
        <div className="w-full bg-white lg:bg-transparent h-screen flex" style={{backgroundImage: window.innerWidth > 1023 ? `url(${deskBg})` : '', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="w-[90%] lg:w-full m-auto flex flex-col lg:flex-row py-10 lg:py-0 h-full">
                <div className="bg-white w-full lg:w-[70%] relative m-auto lg:h-full lg:flex lg:justify-center lg:place-items-center lg:rounded-r-[110px]">
                    <img src={odanaIcon} alt="" className='hidden lg:block lg:absolute lg:w-[25%] lg:top-0 lg:left-0 ' />
                    
                    <div className='w-full lg:w-[80%] m-auto'>
                        <div className="w-full mb-5 flex flex-col items-center">
                            <h3 className="text-[28px] md:text-[70px] lg:text-[30px] font-semibold text-left md:text-center text-[#030303]">Login</h3>
                            <p className="text-[18px] md:text-[30px] lg:text-[18px] text-[#7C7C7C] text-left md:text-center">Enter your credentials to continue</p>
                        </div>

                        <form className="w-full md:w-[80%] lg:w-[70%] m-auto ">

                            <div className="text-left mb-5 lg:mb-2 flex flex-col gap-2">
                                <label htmlFor="" className="text-[18px] md:text-[24px] lg:text-[20px] text-[#4F4F4F] font-bold text-left">Username</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <img src={userIcon} alt="" />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input type="text" placeholder='username' required className="focus:ring-0 border-none lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] "/>
                                        <img src={good} alt="" className="hidden"/>
                                    </div>
                                </div>
                            </div>

                            <div className="text-left mb-9 lg:mb-4 flex flex-col gap-2">
                                <label htmlFor="" className="text-[18px] md:text-[24px] lg:text-[20px] text-[#4F4F4F] font-bold text-left">Password</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-3 lg:rounded-md'>
                                        <img src={passIcon} alt="" />
                                    </div>
                                    <div className="w-full flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 ">
                                        <input type="password" placeholder='**********' required className="focus:ring-0 border-none lg:px-2 py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F]"/>
                                        <img src={eyeoff} alt="" className="hidden"/>
                                    </div>
                                </div>
                            </div>

                            <Link className="md:w-[70%] lg:w-[40%] lg:rounded-md m-auto border bg-[#29992F] text-center flex justify-center items-center rounded-3xl mb-5 lg:mb-2">
                                <Link className="flex items-center text-center py-2 md:py-2 lg:py-1">
                                    <p className='text-[18px] md:text-[24px] lg:text-[20px]'>Login</p>
                                </Link>
                            </Link>

                            <p className="text-[18px] md:text-[22px] lg:text-[18px] text-[#030303] font-semibold text-center mb-3 lg:mb-0">Don't have an account? </p>

                            <Link to={window.innerWidth > 912 ? '/signup-as' : '/get-started'} className="w-fit m-auto flex text-[20px] md:text-[24px] lg:text-[20px] text-[#53B175] font-semibold text-center">Sign up</Link>

                            {/* <div className='lg:w-full lg:fle '>
                                <Link className="md:w-[70%] lg:w-[100%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2 mt-3 lg:mt-1 mb-3 lg:mb-1">
                                    <img src={google} alt="" width={30} />
                                    <Link className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3 lg:py-2">Login with Google</Link>
                                </Link>

                                <Link className="md:w-[70%] lg:w-[100%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2">
                                    <img src={apple} alt="" width={30} />
                                    <p className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3">Login with Apple</p>
                                </Link>
                            </div> */}
                        </form>  
                    </div>
                    
                </div>

                <div className='hidden lg:flex lg:w-[45%] m-auto h-fit px-4'>
                    <img src={heroLanding} alt="" className='h-fi' />
                </div>
            </div>
        </div>
    )
}

export default Login