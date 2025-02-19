"use client"
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-center w-full items-center h-full z-10'>
      <Image src="/kamal.png" alt="Logo" width={500} height={1000} className='opacity-16' />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

    </div>
  )
}

export default Logo
