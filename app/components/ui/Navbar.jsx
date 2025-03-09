'use client'
import React, { useState, useEffect } from 'react'
import { navItems } from '@/app/data'
import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const progressBar = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const handleClick = () => setIsOpen(!isOpen)

   const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      const navbarHeight = 80 // Ubah sesuai tinggi navbar (misal: 80px)
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" })
      setIsOpen(false) // Tutup navbar setelah klik
    } else if(id.startsWith("/")){
      window.location.href = id;
      setIsOpen(false)
    }else{
      window.location.href = `/#${id}`;
    }
  }

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-3xl bg-black z-[90] py-1 border-b-[0.8px] border-gray-800 lg:px-52 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <Image src="/logo.png" width={60} height={60} alt='B.CREATIVE' />
          <h3 className='font-semibold text-white md:text-lg text-sm'>B.CREATIVE</h3>
        </div>

        {/* Desktop Menu */}
        <ul className='md:flex gap-6 hidden'>
          {navItems.map((item) => (
            <li key={item.id} className='text-white hover:text-gray-400 cursor-pointer'>
              <button onClick={() => handleScroll(item.link)}>{item.name}</button>
            </li>
          ))}
        </ul>

        <a href='mailto:bhugatscreative@gmail.com' className="md:inline-flex hidden h-10 items-center justify-center rounded-md border border-gray-700 px-6 font-medium text-white bg-gray-900 hover:bg-gray-800 transition">
          Let’s Discuss
        </a>

        {/* Mobile Menu Button */}
        <button onClick={handleClick} className='md:hidden block text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Mobile Navbar */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='md:hidden flex flex-col gap-4 absolute top-0 left-0 w-full h-72 bg-black border-b-2 backdrop-blur-xl z-[100] py-20 px-6 justify-center items-center rounded-b-[40px]'
          >
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className='text-white text-lg hover:text-gray-400'
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
              >
                <button onClick={() => handleScroll(item.link)}>{item.name}</button>
              </motion.li>
            ))}
            <a href='mailto:bhugatscreative@gmail.com' className="h-10 mt-4 px-6 font-medium text-white bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800 transition">
              Let’s Discuss
            </a>
          </motion.ul>
        )}
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[4px] bg-blue-500 z-[110]"
        style={{ width: progressBar }}
      />
    </>
  )
}

export default Navbar
