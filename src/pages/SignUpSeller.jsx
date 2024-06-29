import React, { useState } from 'react'
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
import { FaLock } from 'react-icons/fa'
import { MdCall, MdOutlineMailOutline } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { TiBusinessCard } from 'react-icons/ti'

const SignUp = () => {
    const [error, setError] = useState({})
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: '',
        address: '',
        brand: ''
    })

    const validateError = () => {
        let tempError = {}

        if (!inputValue.username) {
            tempError.username = 'Username is required'
        } else if (/\W/.test(inputValue.username)) {
            tempError.username = 'Invalid username'
        }

        if (!inputValue.email) {
            tempError.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
            tempError.email = 'Invalid Email'
        }

        if (!inputValue.password) {
            tempError.password = 'Password is required'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputValue.password)) {
            tempError.password = 'Password must be more than 8 digits, contain lowercase, uppercase, number and special character'
        }

        if (!inputValue.number) {
            tempError.number = 'Phone number is required'
        } else if (inputValue.number.length !== 11) {
            tempError.number = 'Incorrect phone number'
        }

        if (!inputValue.address) {
            tempError.address = 'Address is required'
        }

        if (!inputValue.confirmPassword) {
            tempError.confirmPassword = 'Confirm password is required'
        } else if (inputValue.confirmPassword !== inputValue.password) {
            tempError.confirmPassword = 'Confirm password must be equal to password'
        }

        setError(tempError)
        return Object.keys(tempError).length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target
        let updatedValue = { ...inputValue }
        let trimmedValue = value.trim()
        if (name === 'username') {
            updatedValue[name] = value.toLowerCase()
            e.target.value = trimmedValue.toLowerCase()
        } else {
            updatedValue[name] = value
        }
        setInputValue(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (validateError()) {
            alert('yeap')
            setInputValue({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                number: '',
                address: '',
                brand: ''
            })
        }
    }

    return (
        <div className="w-full bg-white lg:bg-transparent h-full md:h-screen flex" style={{backgroundImage: window.innerWidth > 1023 ? `url(${deskBg})` : '', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="w-[90%] lg:w-full m-auto flex flex-col lg:flex-row py-10 lg:py-0 h-full">
                <div className="bg-white w-full lg:w-[70%] relative m-auto lg:h-full lg:flex lg:justify-center lg:place-items-center lg:rounded-r-[110px]">
                    <img src={odanaIcon} alt="" className='hidden lg:block lg:absolute lg:w-[25%] lg:top-0 lg:left-0 ' />

                    <div className='w-full lg:w-[60%] m-auto'>
                        <div className="w-full mb-5">
                            <h3 className="text-[26px] md:text-[50px] lg:text-[40px] font-semibold text-center text-[#030303]">Sign Up </h3>
                            <p className="text-[18px] md:text-[30px] lg:text-[18px] text-[#7C7C7C] text-center">You're signing up as a seller</p>
                        </div>

                        <form action='/' onSubmit={handleSubmit} className="w-full md:w-[80%] m-auto">

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="username" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Username</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <IoMdContact className='text-[20px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.username} type="text" name='username' placeholder='Username' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.username} type="text" name='username' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={good} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.username && <p className='text-red-600'>{error.username}</p>}
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="email" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Email Address</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <MdOutlineMailOutline className='text-[20px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.email} type="email" name='email' placeholder='Email Address' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.email} type="email" name='email' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={good} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.email && <p className='text-red-600'>{error.email}</p>}
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="number" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Phone Number</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <MdCall className='text-[20px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.number} type="tel" name='number' placeholder='08123456789' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.number} type="tel" name='number' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={good} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.number && <p className='text-red-600'>{error.number}</p>}
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="address" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Address</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <FaLocationDot className='text-[20px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.address} type="text" name='address' placeholder='Address' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.address} type="text" name='address' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={good} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.address && <p className='text-red-600'>{error.address}</p>}
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="brand" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Brand Name</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <TiBusinessCard className='text-[20px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.brand} type="tel" name='brand' placeholder='Brand Name' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.brand} type="tel" name='brand' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={good} alt="" className="hidden" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="password" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Password</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <FaLock className='text-[18px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.password} type="password" name='password' placeholder='Password' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.password} type="password" name='password' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={eyeoff} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.password && <p className='text-red-600'>{error.password}</p>}
                            </div>

                            <div className="text-left mb-5 flex flex-col gap-2">
                                <label htmlFor="confirmPassword" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left lg:hidden">Confirm Password</label>
                                <div className="border border-[#BDBDBD] flex items-center justify-between px-2 lg:px-0 py-1 lg:py-0 lg:rounded-md">
                                    <div className='bg-[#29992F] w-[20%] hidden lg:flex lg:justify-center lg:py-2 lg:rounded-md'>
                                        <FaLock className='text-[18px]' />
                                    </div>
                                    <div className='w-full lg:py-0'>
                                        <input onChange={handleChange} value={inputValue.confirmPassword} type="password" name='confirmPassword' placeholder='Confirm Password' required className="hidden lg:block lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <input onChange={handleChange} value={inputValue.confirmPassword} type="password" name='confirmPassword' placeholder='' required className="lg:hidden lg:text-left lg:px-2 py-2 lg:py-0 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px] lg:text-[20px] focus:ring-0 border-none " />
                                        <img src={eyeoff} alt="" className="hidden" />
                                    </div>
                                </div>
                                {error.confirmPassword && <p className='text-red-600'>{error.confirmPassword}</p>}
                            </div>

                            <div className="w-full flex justify-center items-center gap-2 mb-1">
                                <input type="checkbox" name="terms" id="" className="bg-transparen text-transparen fill-white accent-white" />
                                <p className='text-black text-[14px]'>I Agree to ODANA <span className='text-[#299B56] font-semibold'>Terms and Conditions</span></p>
                            </div>
                            <p className="text-[16px] md:text-[18px] lg:text-[16px] mb-3 font-normal text-[#7C7C7C] text-center lg:hidden xl:block ">By continuing, you agree to our <span className="text-[#53B175]">Terms of Service</span> and <span className="text-[#53B175]">Privacy Policy</span></p>

                            <button type='submit' className="cursor-pointer w-full md:w-[30%] lg:w-[40%] md:text-[19px] m-auto py-2 lg:py-1 md:py-3 border bg-[#29992F] text-center flex justify-center rounded-3xl lg:rounded-md items-center mb-5 lg:mb-1">
                                Submit
                            </button>

                            {/* <div className='w-full md:w-[70%] lg:w-full m-auto flex items-center justify-center text-center gap-1'>
                                <div className='w-[100%] h-[1px] bg-black'></div>
                                <p className='w-[15%] text-[14px] text-[#030303]'>or</p>
                                <div className='w-[100%] h-[1px] bg-black'></div>
                            </div> */}

                            {/* <Link className="w-full md:w-[70%] lg:w-full m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2 mt-5 mb-5">
                                <img src={google} alt="" />
                                <Link className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3">Sign Up with Google</Link>
                            </Link>

                            <Link className="w-full md:w-[70%] lg:w-full m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2">
                                <img src={apple} alt="" />
                                <p className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3">Sign Up with Apple</p>
                            </Link> */}
                        </form>
                    </div>
                </div>

                <div className='hidden lg:flex lg:w-[45%] m-auto h-fit px-4'>
                    <img src={heroLanding} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SignUp