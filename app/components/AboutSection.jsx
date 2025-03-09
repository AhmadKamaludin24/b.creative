import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
  <div className=' min-h-screen flex items-center' id='about'>
  <div className=' flex flex-col lg:flex-row items-center gap-10 w-full px-4'>

    {/* Gambar */}
    <div className=' flex items-center justify-center w-full lg:w-1/2'>
      <Image 
        src='/logo.png' 
        width={300} 
        height={300} 
        alt='Profile Picture' 
        className='rounded-full' 
      />
    </div>

    {/* Konten */}
    <div className=' flex flex-col gap-4  w-full lg:text-left '>
      <h1 className='lg:text-5xl text-white text-3xl font-bold'>About Us</h1>
      <p className='text-sm lg:text-lg text-gray-500'>
        Bughats Creative is a creative and innovative company specializing in 3D modeling, visual production, 
        digital marketing, social media management, web development, and event management. Founded in 2020, 
        our vision is to bring imagination to life and shape reality.
      </p>
      <p className='text-sm lg:text-lg text-gray-500'>
        Bughats Creative was founded by Zami, Yoga, and Puji, driven by a passion for combining technology and creativity. 
        We began with a small dedicated team focused on 3D architectural modeling, product visualization, and video graphics. 
        Today, we've evolved into a team merging art and technology.
      </p>
      <div className='text-sm lg:text-lg text-gray-500'>
        <p>1. Vision: To become a leading company in the fields of 3D modeling, visual production, digital marketing & social media handling, web development and event management.</p>
        <p>2. Mission: Bringing imagination to life and shaping reality through creativity, innovation and strong collaboration.</p>
      </div>
    </div>

  </div>
</div>

  )
}

export default AboutSection
