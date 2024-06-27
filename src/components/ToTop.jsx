import React, { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ToTop = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        document.getElementById('toTop').addEventListener('click', () => {
            window.scrollTo(0, 0)
        })
    }

    window.addEventListener('scroll', () =>{
        if (window.pageYOffset > 100) {
            setScrolled(true)
            handleScroll()
        } else {
            setScrolled(false)
        }
    })

  return (
      <div className={`${scrolled ? 'flex opacity-100' : 'opacity-0'} justify-center items-center py-1 md:py-2 px-1 md:px-2 fixed bottom-[40px] md:bottom-[45px] cursor-pointer right-[35px] md:right-[45px] bg-[#38B148] hover:bg-[#2b8838] rounded-full duration-1000 `} id='toTop'>
        <MdKeyboardArrowUp className='text-[40px]' />
    </div>
  )
}

export default ToTop