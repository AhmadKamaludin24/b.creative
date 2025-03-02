'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    { name: 'Client 1', logo: '/client/BNI.png' },
    { name: 'Client 2', logo: '/client/HBSP Transparent copy.png' },
    { name: 'Client 3', logo: '/client/LOGO AL-QASEEM copy-min.png' },
    { name: 'Client 4', logo: '/client/LOGO BEBEK copy.png' },
    { name: 'Client 5', logo: '/client/LOGO FAMOUS STEAK (original).png' },
    { name: 'Client 6', logo: '/client/Agung_Podomoro_Land_-_Logo_2023.svg copy.jpg' },
  ];
  

export default function OurClientSlider() {
  return (
    <div className="relative py-4 bg-black">
   
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      <motion.div
        className="flex gap-8"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 19, ease: 'linear' }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="p-4 bg-black rounded-lg shadow-md flex-shrink-0 w-40 h-40 flex items-center justify-center">
            <Image src={client.logo} alt={client.name} width={100} height={100} />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
  );
}
