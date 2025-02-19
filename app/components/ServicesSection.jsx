import React from 'react'
import { HeroParallax } from './ui/hero-parallax'
import { products } from '../data'
import CircularGallery from './ui/CircularGallery'


const ServicesSection = () => {
  const socialHandling = [
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973253/bughats-assets/img/service/socialmedia/zwzmpghyhlqgyvbkjgtu.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973248/bughats-assets/img/service/socialmedia/islh52dqvxpvwgz49vrp.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973247/bughats-assets/img/service/socialmedia/yldizj86kespwbes1a8n.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973247/bughats-assets/img/service/socialmedia/cwjejaslik4t2gls6ih3.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/v8fkfubvhme6o5pgsvag.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/ehzqsg6tcmlmhqsjx52d.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/npsofrei92ptnyzho82i.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973244/bughats-assets/img/service/socialmedia/i8i32mqjjwgky4sm12d9.jpg" }
  ];

  const art = [
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973875/bughats-assets/img/service/3dproduct/kcviwiv4izwwfqpjrwhz.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973869/bughats-assets/img/service/3dproduct/trbsxrupmiobrg7j1lti.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974704/bughats-assets/img/service/3dproduct/lrmwvqglwefaha2suut7.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974654/bughats-assets/img/service/3dproduct/agaqvybg3krazroei4yg.jpg" },
    
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974653/bughats-assets/img/service/3dproduct/agthkj8eaefuh7vjipqs.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974646/bughats-assets/img/service/3dproduct/qnnvovvkydwdlyfvnaob.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974638/bughats-assets/img/service/3dproduct/ox9f6fiv8e0q15vkvthy.jpg" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975028/bughats-assets/img/service/3dproduct/uwzc5fgc3pbo0xdbapss.jpg" },
    
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975413/bughats-assets/img/service/3dproduct/ueyktmg44amyqmsxfbyo.png" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975410/bughats-assets/img/service/3dproduct/rcwgmx9sqrrawbuautci.png" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975409/bughats-assets/img/service/3dproduct/uqfgsjgrcfbho18marxi.png" },
    { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975409/bughats-assets/img/service/3dproduct/l10iyt9vbrcqdqjmmn7j.png" }
];

  const eventImages = [
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976168/bughats-assets/img/service/event/w4odogxqfmgysfowvw6p.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976168/bughats-assets/img/service/event/vpgpiav4jtpolgtikpe7.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976167/bughats-assets/img/service/event/lwrnnw2btgjlyje5t8hz.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976166/bughats-assets/img/service/event/jat5lw4qjw0kxounbmu6.jpg" },
  
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976166/bughats-assets/img/service/event/rvzrdmayadzecilwmjxy.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976165/bughats-assets/img/service/event/ycqxfd5y2xicsgqmehh2.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976165/bughats-assets/img/service/event/ctgwoiztyfqhaoergf6w.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976164/bughats-assets/img/service/event/iplnzr3yxxaq6yitpdee.jpg" },
  
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976164/bughats-assets/img/service/event/ezq02srskphtiaymjjrx.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/omcrgcnoanzj9kutwdey.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/pnhqzz3p1zsbcgkdzuec.jpg" },
  { image: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/txabeqqookhf4bx1s41o.jpg" }
];



  return (
    <div className=' min-h-screen ' id='services'>
      <h1 className='text-center font-bold text-5xl my-20'>Our Services</h1>
      <div style={{ height: '600px', position: 'relative' }}>
        <h1 className='text-center font-bold text-3xl mt-7'>3D Arcitectural</h1>
         <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <h1 className='text-center font-bold text-3xl mt-7'>Social Media Handling & Digital Marketing</h1>
         <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} items={socialHandling} />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <h1 className='text-center font-bold text-3xl mt-7'>3D Product & Art</h1>
         <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} items={art} />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <h1 className='text-center font-bold text-3xl mt-7'>Event</h1>
         <CircularGallery bend={0.3} textColor="#ffffff" borderRadius={0.05} items={eventImages} />
      </div>

    </div>
  )
}

export default ServicesSection
