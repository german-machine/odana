import React, { useState } from 'react'
import good from '../assets/images/good.png'
import eyeoff from '../assets/images/eye-off.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [error, setError] = useState({})
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: ''
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
                number: ''
            })
        }
    }

    return (
        <div className='w-full md:h-screen lg:h-full bg-white'>
            <div className="w-[90%] m-auto py-10">

                <div className="w-full mb-5">
                    <h3 className="text-[26px] md:text-[50px] lg:text-[40px] font-semibold text-center text-[#030303]">Sign Up (Seller)</h3>
                    <p className="text-[18px] md:text-[30px] lg:text-[22px] text-[#7C7C7C] text-center">Enter your credentials to continue</p>
                </div>

                <form action='/' onSubmit={handleSubmit} className="w-full md:w-[80%] m-auto">

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="username" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Username</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input onChange={handleChange} value={inputValue.username} type="text" name='username' placeholder='Joseph Johnson' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px]" />
                            <img src={good} alt="" className="hidden" />
                        </div>
                        {error.username && <p className='text-red-600'>{error.username}</p>}
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="email" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Email Address</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input onChange={handleChange} value={inputValue.email} type="email" name='email' placeholder='odana@gmail.com' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px]" />
                            <img src={good} alt="" className="hidden" />
                        </div>
                        {error.email && <p className='text-red-600'>{error.email}</p>}
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="number" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Phone Number</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input onChange={handleChange} value={inputValue.number} type="tel" name='number' placeholder='08123456789' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px]" />
                            <img src={good} alt="" className="hidden" />
                        </div>
                        {error.number && <p className='text-red-600'>{error.number}</p>}
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="password" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Password</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input onChange={handleChange} value={inputValue.password} type="passwor" name='password' placeholder='**********' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px]" />
                            <img src={eyeoff} alt="" className="hidden" />
                        </div>
                        {error.password && <p className='text-red-600'>{error.password}</p>}
                    </div>

                    <div className="text-left mb-5 flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-[18px] md:text-[24px] text-[#4F4F4F] font-bold text-left">Confirm Password</label>
                        <div className="border border-[#BDBDBD] flex items-center justify-between px-2 py-1">
                            <input onChange={handleChange} value={inputValue.confirmPassword} type="passwor" name='confirmPassword' placeholder='**********' required className="py-2 w-full bg-transparent focus:outline-none text-[#4F4F4F] md:text-[24px]" />
                            <img src={eyeoff} alt="" className="hidden" />
                        </div>
                        {error.confirmPassword && <p className='text-red-600'>{error.confirmPassword}</p>}
                    </div>

                    <p className="text-[16px] md:text-[18px] mb-3 font-normal text-[#7C7C7C] text-center">By continuing, you agree to our <span className="text-[#53B175]">Terms of Service</span> and <span className="text-[#53B175]">Privacy Policy</span></p>

                    <button type='submit' className="w-full md:w-[30%] md:text-[19px] m-auto py-2 md:py-3 border bg-[#299B56] text-center flex justify-center rounded-3xl items-center mb-5">
                        Submit
                    </button>

                    <div className='w-full md:w-[70%] m-auto flex items-center justify-center text-center gap-1'>
                        <div className='w-[100%] h-[1px] bg-black'></div>
                        <p className='w-[15%] text-[14px] text-[#030303]'>or</p>
                        <div className='w-[100%] h-[1px] bg-black'></div>
                    </div>

                    <Link className="w-full md:w-[70%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2 mt-5 mb-5">
                        <img src={google} alt="" />
                        <Link className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3">Sign Up with Google</Link>
                    </Link>

                    <Link className="w-full md:w-[70%] m-auto border rounded-3xl border-[#53B175] flex items-center justify-center gap-2">
                        <img src={apple} alt="" />
                        <p className="text-[16px] md:text-[19px] font-semibold text-[#299B56] py-2 md:py-3">Sign Up with Apple</p>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp