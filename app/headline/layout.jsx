import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/Footer'

const layout = ({children}) => {
  return (
    <div className='bg-black mx-auto relative px-2 sm:px-1 flex justify-center items-center overflow-hidden'>
        <Navbar/>
        <div className="max-w-7xl w-full relative min-h-screen ">
            
            {children}

        
        </div>
        <Footer/>
      
    </div>
  )
}

export default layout
