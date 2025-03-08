import React from 'react'
import { HeroParallax } from './ui/hero-parallax'
import { products } from '../data'
import CircularGallery from './ui/CircularGallery'
import { LayoutGrid } from './ui/layout-grid'
import { title } from 'process'


const ServicesSection = () => {


  const cards = [
    {
      id: 1,
      title: "3D Arcitectural",
      className: "col-span-3 row-span-3",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972493/bughats-assets/img/service/3darsitektur/clfoq9ustpv8hkqvbdmo.png",
      category: "3d-architectural",
    },

    {
      id: 2,
      title: "Commercial Video & Company Profile",
      className: "col-span-5 row-span-2 row-start-4",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736002017/bughats-assets/img/service/videocomercil/njkao7tcdyyhaggdcljg.jpg",
      category: "comercial-video",
    },
    
    {
      id: 3,
      title: "3D Product & Art",
      className: "col-span-3 row-span-3 col-start-7",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974704/bughats-assets/img/service/3dproduct/lrmwvqglwefaha2suut7.jpg",
      category: "3d-product",
    },
    
    {
      id: 4,
      title: "Social Media Handling & Digital Marketing",
      className: "col-span-3 row-span-3 col-start-4",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973253/bughats-assets/img/service/socialmedia/zwzmpghyhlqgyvbkjgtu.jpg",
      category: "social-media",
    },
    {
      id: 5,
      title: "Event",
      className: "col-span-4 row-span-2 col-start-6 row-start-4",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/txabeqqookhf4bx1s41o.jpg",
      category: "event",
    },
  ];


  return ( // 🛠 Tambahkan return di sini!
    <div className=' py-7  ' id="services">
      <LayoutGrid cards={cards}  />
    </div>
    
  );
 

};

export default ServicesSection;
