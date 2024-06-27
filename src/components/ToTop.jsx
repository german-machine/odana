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
      <div className={`${scrolled ? 'flex opacity-100' : 'opacity-0'} justify-center items-center fixed bottom-[15px] cursor-pointer right-[15px] bg-[#38B148] hover:bg-[#2b8838] rounded-full duration-1000 `} id='toTop'>
        <MdKeyboardArrowUp className='text-[40px]' />
    </div>
  )
}

export default ToTop