
import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import Spotlight from './ui/Spotlight'

const Team = [
  {
    quote: 'As a 3D Modeling Specialist, Video Maker, and Photographer with over 5 years of experience, I have explored various aspects of the creative world. With Blender as my primary tool, I create detailed and realistic 3D models. As a Creative Director, I combine technical expertise and artistic vision to lead teams in producing work that is not only beautiful but also meaningful. I am always passionate about bringing new ideas to life and crafting stunning visual solutions.',
    name: 'Zam Zami Dawud Yusuf',
    designation : 'CO-FOUNDER',
    src: "/team/Jambrong baru BW (1) copy_3_11zon.png"

  },
  {
    quote: 'I am Afrizal, a Digital Marketing Specialist who has successfully driven several brands to success through the right digital marketing strategies. In addition, I am also an event concept professional who believes that every event is an opportunity to create meaningful and memorable experiences. I am always passionate about combining creativity with measurable strategies, crafting solutions that are not only effective but also inspiring.',
    name: 'Puji Afrizal',
    designation : 'CO-FOUNDER',
    src: "/team/Puji copy (1).png"

  },
  {
    quote: 'I am Yoga, a 3D Modeling Specialist using Blender with more than 5 years of experience. I also have extensive experience in the world of IT and web development, which allows me to combine visual creativity with technical expertise. As a professional, I am always passionate about creating work that is not only beautiful but also functional and meaningful.',
    name: 'Haspriya Yoga',
    designation : 'CO-FOUNDER',
    src: "/team/Yoga.png"

  },
  {
    quote: 'Leading financial strategy and business growth through data-driven decision-making and fiscal responsibility. With a deep understanding of financial planning, risk management, and investment strategies, I ensure sustainable profitability and long-term success. By balancing innovation with financial discipline, I drive operational efficiency, optimize resources, and create value for stakeholders in an ever-evolving market.',
    name: 'Ilham Yafi',
    designation : 'Chief Finance Officer',
    src: "/team/Yafi_1_11zon.png"

  },
  {
    quote: 'Building seamless and high-performing digital experiences through clean, efficient, and scalable code. With a deep understanding of front-end and back-end technologies, I create responsive, user-friendly websites and web applications that blend functionality with aesthetics. Passionate about problem-solving and innovation, I stay ahead of industry trends to deliver cutting-edge solutions that enhance user engagement and business growth.',
    name: 'Ahmad Kamaludin',
    designation : 'Web Developer',
    src: "/team/Kamal_4_11zon.png"

  },
  {
    quote: 'Bringing stories to life through compelling visuals and dynamic storytelling. With expertise in photography, videography, and post-production, I craft high-quality content that captures attention and evokes emotion. From concept development to final edits, I ensure every frame aligns with brand identity and marketing goals, delivering visually stunning and impactful media for various platforms.',
    name: 'Luthfi Fattah',
    designation : 'Photo and Video Manager',
    src: "/team/Luthfi_2_11zon.png"

  },
  {
    quote: 'Ensuring seamless operations and efficiency in every stage of production. With a strong focus on problem-solving, technical expertise, and workflow optimization, I provide the necessary support to maintain high-quality standards and meet production goals. From troubleshooting technical issues to coordinating resources, I play a key role in streamlining processes and enhancing overall productivity.',
    name: 'Dicky Gunardi',
    designation : 'Production Support',
    src: "/team/Dicky Gunardi.png"

  },
  
]

const TeamSection = () => {
  return (
    <div className='min-h-screen flex items-center relative' id='team'>
    <Spotlight className={"absolute -top-64"}/>
      <AnimatedTestimonials testimonials={Team}/>
    </div>
  )
}

export default TeamSection
