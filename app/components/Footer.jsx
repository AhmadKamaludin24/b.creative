"use client"
import { useScroll, useSpring } from "framer-motion";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { navItems } from "../data";




export default function Footer() {
  const { scrollYProgress } = useScroll()
  const progressBar = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })


  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      const navbarHeight = 80 // Ubah sesuai tinggi navbar (misal: 80px)
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" })
      
    } else {
      window.location.href = `/#${id}`;
    }
  }

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-12 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">B.CREATIVE</h2>
          <p className="text-gray-400 text-sm mt-1">&copy; {new Date().getFullYear()} Bughats Creative. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          {navItems.map((item) => (
            <div key={item.id} className='text-white hover:text-gray-400 cursor-pointer'>
              <button onClick={() => handleScroll(item.link)}>{item.name}</button>
            </div>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
         
          <a href="https://www.tiktok.com/@b.creative.id?lang=en" className="text-gray-400 hover:text-white transition"><FaTiktok /></a>
          <a href="https://www.instagram.com/bughatscreative/" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
          
        </div>
      </div>
    </footer>
  );
} 
