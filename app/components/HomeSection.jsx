"use client"
import React from 'react'
import { GridBackground } from './ui/GridBackground'
import  Spotlight  from './ui/spotlight-new'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Navbar from './ui/Navbar'
import { GlareCard } from './ui/glare-card'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { images, images2, team } from '../data'
import { ImagesSlider } from './ui/images-slider'

import VideoPlayer from './ui/VideoPlayer'






const HomeSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=' lg:pt-32 pt-24 pb-32 min-h-screen' id='home'>

      <Navbar/>
      <GridBackground/>
      <Spotlight className="z-50"/>

      <div className='flex gap-1 justify-center w-full'>
         <div className='p-1 grid md:grid-cols-12 md:grid-rows-2 grid-cols-2 grid-rows-10 md:gap-4 gap-2 md:h-[70vh] h-full w-full relative'>
            <div className='md:col-span-6 md:row-span-2 col-span-2 row-span-6 p-5 flex flex-col gap-2'>

             <TextGenerateEffect words="Blending Art and Technology to Transform Ideas into Reality" className=" max-w-[45rem] text-[40px] lg:text-[50px]  " />
              <p className='md:max-w-[30rem] max-w-[20rem] md:text-xl text-lg bg-clip-text font-[200] bg-gradient-to-b from-neutral-200 to-neutral-600 text-gray-600 w-[50rem]'>We help businesses and individuals create stunning, interactive, and innovative visuals. With limitless creativity, we bring your digital vision to life.</p>
              <div className='pt-7 flex gap-4'>
                <a onClick={()=> handleScroll("about")} className='p-3 rounded-2xl border border-gray-200'>About Us</a>
                <a href='mailto:bhugatscreative@gmail.com' className='p-3 rounded-2xl border border-gray-200 text-black bg-gray-200'>Lets discus</a>
              </div>
              <div className='flex pt-5'>
              <AnimatedTooltip items={team} />
              </div>

            </div>
           <ImagesSlider className={"md:col-span-3 md:row-span-1 col-span-1 row-span-2 p-5 border border-gray-900 rounded-md"} images={images}>

           </ImagesSlider>
           <ImagesSlider className={"md:col-span-3 md:row-span-1 col-span-1 row-span-2 p-5 border border-gray-900 rounded-md"} images={images2} direction='down'>

           </ImagesSlider>
           <div className='md:col-span-6 md:row-span-2 col-span-2 row-span-2 border border-gray-900 rounded-md relative overflow-hidden flex justify-center items-center filter contrast-125'>
             <VideoPlayer src={"/bg.mp4"} className="w-full h-full object-cover"/>
           </div>
            
          </div>
      

    </div>
    </div>
  )
}

export default HomeSection;
