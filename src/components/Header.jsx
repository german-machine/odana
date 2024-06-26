import React, { useEffect, useState } from 'react'
import login from '../assets/images/login.png'
import logoDesk from '../assets/images/white-small.png'
import arrowDown from '../assets/images/arrowDown.png'
import bgHero from '../assets/images/bg-hero.png'
import mobHero from '../assets/images/mobile-bg.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { IoIosClose, IoIosMenu } from 'react-icons/io'
import Hero from './Hero'

const Header = () => {
    const [show, setShow] = useState(false);
    const [navPosition, setNavPosition] = useState('relative')
    const [removeMenu, setRemoveMenu] = useState(false)

    function handleClick() {
        setShow(!show);
    }
    
    function handleRemoveMenu() {
        setRemoveMenu(true) 
        setShow(!show)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setNavPosition('fixed')
            } else {
                setNavPosition('relative')
            }
        }

        handleScroll();
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])        

    return (
        <div className="w-full" style={{ backgroundImage: `url(${window.innerWidth > 1023 ? bgHero : mobHero})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
            <div className={`${navPosition} top-0 left-0 right-0 duration-[3s] transition-all scroll-smooth shadow-3xl backdrop-blur-xl bg-[#1C7D33] `} >
                <div className="w-[90%] md:w-[85%] lg:w-[80%] m-auto py-4">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[30%] md:w-[28%] lg:w-[18%]">
                            <img src={logoDesk} alt="" />
                        </div>

                        <div className={`${show ? 'flex flex-col animate-slideIn fixed lg:relative lg:animate-none lg:opacity-100 right-0 left-0 top-[65px] md:top-[94px] lg:top-0' : 'animate-slideOut lg:animate-none absolute lg:relative -top-[1000px] lg:top-0 left-0 lg:left-0 right-0 lg:right-0 opacity-0 lg:opacity-100 shadow-xl lg:shadow-none'} ${removeMenu === 'true' ? 'hidden' : 'block'} lg:block w-full lg:w-fit bg-[#197831] z-[1000] lg:bg-transparent transition-all duration-500`}>
                            <ul className="flex flex-col items-center justify-center lg:flex-row lg:gap-5 lg:items-center">
                                <div className="w-[90%] md:w-full lg:w-fit m-auto lg:m-0 flex flex-col text-center lg:flex-row gap-10 py-10 lg:py-0 lg:gap-5 mr-5">
                                    <li>
                                        <HashLink smooth to='/#home' onClick={handleRemoveMenu} className="md:text-[22px] lg:text-[16px] ">Home</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleRemoveMenu} className="md:text-[22px] lg:text-[16px] ">Buying</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleRemoveMenu} className="md:text-[22px] lg:text-[16px] ">Selling</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleRemoveMenu}>
                                            <div className="flex justify-center lg:justify-evenly">
                                                <p className="md:text-[22px] lg:text-[16px] ">Client Directory</p>
                                                <img src={arrowDown} alt="" className="md:text-[22px] lg:text-[16px] " />
                                            </div>
                                        </HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleRemoveMenu} className="md:text-[22px] lg:text-[16px] ">About Us</HashLink>
                                    </li>
                                </div>

                                <div className="w-[90%] md:w-full lg:w-max m-auto flex gap-4 lg:items-center py-4 lg:py-0">
                                    <li className="hidden lg:block">
                                        <Link to='/login' onClick={handleRemoveMenu}>Login</Link>
                                    </li>

                                    <li className="w-[80%] md:w-[50%] lg:w-fit text-center m-auto border-[2px] border-solid border-white rounded-full py-2 md:py-4 lg:py-2 px-3 md:px-0 lg:px-4 hover:bg-[#197831] hover:text-white duration-1000 mb-4 lg:mb-0">
                                        <Link to='/get-started' onClick={handleRemoveMenu} className="md:text-[22px] lg:text-[16px] ">Sign Up</Link>
                                    </li>
                                </div>

                            </ul>
                        </div>

                        <div className="w-[50%] md:w-[40%] flex items-center justify-evenly md:justify-between lg:hidden">
                            <div className="md:w-[70] flex items-center bg-[#38B148] px-2 md:px-4 py-1 md:py-3 gap-2">
                                <Link to='/login' className='flex items-center gap-2 md:text-[22px]'>Login
                                    <img src={login} alt="" className='md:text-[22px]' />
                                </Link>    
                            </div>
                            <div>
                                {show ? <IoIosClose className="text-[30px] md:text-[60px] duration-1000 cursor-pointer" onClick={handleClick} /> : <IoIosMenu className="text-[25px] md:text-[50px] duration-1000 cursor-pointer" onClick={handleClick} />}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
                <Hero />
        </div>
    )
}

export default Header