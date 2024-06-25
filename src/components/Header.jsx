import React, { useEffect, useState } from 'react'
import login from '../assets/images/login.png'
import logoDesk from '../assets/images/odana-logo-small.png'
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
        setRemoveMenu(true)        
    }

    // function handleRemoveMenu() {

    // }

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
        <div className="w-full" style={{ backgroundImage: `url(${window.innerWidth > 690 ? bgHero : mobHero})`, backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
            <div className={`${navPosition} top-0 left-0 right-0 duration-[3s] transition-all scroll-smooth shadow-3xl backdrop-blur-xl b-[#116328] bg-[#1C7D33] `} >
                <div className="w-[90%] md:w-[85%] lg:w-[80%] m-auto py-4  fixe left-0 right-0">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[30%] md:w-[12%]">
                            <img src={logoDesk} alt="" />
                        </div>

                        <div className={`${show ? 'flex flex-col animate-slideIn md:animate-none ' : 'animate-slideOut md:animate-none opacity-0'} ${removeMenu === 'true' ? 'hidden' : 'block'} md:opacity-100 fixed md:relative right-0 left-0 top-[65px] md:top-0 md:block w-full md:w-fit bg-[#197831] z-[1000] md:bg-transparent transition-all duration-500`}>
                            <ul className="flex flex-col md:flex-row md:gap-5 md:items-center">
                                <div className="w-[90%] md:w-fit m-auto md:m-0 flex flex-col text-center md:flex-row gap-10 py-10 md:py-0 md:gap-5 mr-5">
                                    <li>
                                        <HashLink smooth to='/#home' onClick={handleClick} >Home</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleClick}>Buying</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleClick}>Selling</HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleClick}>
                                            <div className="flex justify-center md:justify-evenly">
                                                <p>Client Directory</p>
                                                <img src={arrowDown} alt="" />
                                            </div>
                                        </HashLink>
                                    </li>

                                    <li>
                                        <HashLink smooth to='/#' onClick={handleClick}>About Us</HashLink>
                                    </li>
                                </div>

                                <div className="flex gap-4 md:items-center py-4 md:py-0">
                                    <li className="hidden md:block">
                                        <Link to='/login' onClick={handleClick}>Login</Link>
                                    </li>

                                    <li className="inline-block w-[80%] md:w-fit text-center m-auto border border-solid border-white rounded-md py-1 px-3 hover:bg-[#197831] hover:text-white duration-1000">
                                        <Link to='/get-started' onClick={handleClick}>Sign Up</Link>
                                    </li>
                                </div>

                            </ul>
                        </div>

                        <div className="w-[50%] flex items-center justify-evenly md:hidden">
                            <div className="flex items-center bg-[#38B148] px-2 py-1 gap-2">
                                <Link to='/login' className='flex items-center gap-2'>Login
                                    <img src={login} alt="" />
                                </Link>    
                            </div>
                            <div>
                                {show ? <IoIosClose className="text-[30px] duration-1000 cursor-pointer" onClick={handleClick} /> : <IoIosMenu className="text-[25px] duration-1000 cursor-pointer" onClick={handleClick} />}
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