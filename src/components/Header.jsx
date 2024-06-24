import React, { useState } from 'react'
import login from '../assets/images/login.png'
import menu from '../assets/images/menu.png'
import logo from '../assets/images/odanaLogo.png'

const Header = () => {
    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-white z-10">
            <div className="w-[90%] m-auto py-4">
                <div className="w-full flex justify-between items-center">
                    <div className="w-[30%]">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-[50%] flex items-center justify-evenly">
                        <div className="flex items-center bg-[#38B148] px-2 py-1 gap-2">
                            <p>Login</p>
                            <img src={login} alt="" />
                        </div>
                        <div>
                            <img src={menu} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header