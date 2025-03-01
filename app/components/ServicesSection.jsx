import React from 'react'
import { HeroParallax } from './ui/hero-parallax'
import { products } from '../data'
import CircularGallery from './ui/CircularGallery'
import { LayoutGrid } from './ui/layout-grid'
import { title } from 'process'


const ServicesSection = () => {
  const socialHandling = [ /* Data */ ];
  const art = [ /* Data */ ];
  const eventImages = [ /* Data */ ];

  const SkeletonOne = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">House in the woods</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful escape from city life.
      </p>
    </div>
  );

  const SkeletonTwo = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">House above the clouds</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a unique living experience.
      </p>
    </div>
  );

  const SkeletonThree = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Greens all over</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty.
      </p>
    </div>
  );

  const SkeletonFour = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Rivers are serene</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility.
      </p>
    </div>
  );

  const cards = [
    {
      id: 1,
      title: "3D Arcitectural",
      className: "md:col-span-2",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972493/bughats-assets/img/service/3darsitektur/clfoq9ustpv8hkqvbdmo.png",
      category: "3d-architectural",
    },
    {
      id: 2,
      title: "Social Media Handling & Digital Marketing",
      className: "col-span-1",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973253/bughats-assets/img/service/socialmedia/zwzmpghyhlqgyvbkjgtu.jpg",
      category: "social-media",
    },
    {
      id: 3,
      title: "3D Product & Art",
      className: "col-span-1",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974704/bughats-assets/img/service/3dproduct/lrmwvqglwefaha2suut7.jpg",
      category: "3d-product",
    },
    {
      id: 4,
      title: "Event",
      className: "md:col-span-2",
      thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/txabeqqookhf4bx1s41o.jpg",
      category: "event",
    },
  ];

  console.log("Cards Data:", cards);
  return ( // 🛠 Tambahkan return di sini!
    <div className='min-h-screen' id="services">
      <LayoutGrid cards={cards} height='50rem' />
    </div>
    
  );
 

};

export default ServicesSection;
