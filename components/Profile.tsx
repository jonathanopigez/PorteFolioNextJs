import React, { useEffect, useState } from 'react'

import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';
import TextAnimation from './TextAnimation';





type Props = {
  
}

function Profile({}: Props) {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


 
  return (

    <div className="relative h-screen space-y-8 flex flex-col items-center justify-center text-center overflow-hidden ">
<BackgroundCircles />
       <motion.div 
       initial ={{
        opacity:0
    }}
    animate={{
        opacity:1
      
    }}
    transition={{
        duration:2.5,
    }}
       className='z-20 '>
        <Image 
    
         alt=""
         width="10" height="10"
         src="/images/hair-styles-men.svg"
        className="h-36 w-36 rounded-full mx-auto xl:h-48 xl:w-48"
        />
        
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'>Concepteur développeur d&apos;applications</h2>
        <h6 className='text-3xl lg:text-6xl font-semibold spx-10'>
            <TextAnimation />
             
            
      </h6>
      
      <div className={isMobile ? 'block' : 'hidden'}>
      <div className='pt-5'>

        <Link href="#about"><button className='profilButton hover:text-[#6E61Ca]'>à propos</button></Link>
        <Link href="#experiences"><button className='profilButton hover:text-[#6E61Ca]'>Expériences</button></Link>
        <Link href="#competences"><button className='profilButton hover:text-[#6E61Ca]'>Compétences</button></Link>
        <Link href="#projets"><button className='profilButton hover:text-[#6E61Ca]'>Projets</button></Link>
        
 
      
        
      </div>
      </div>
      </div>
      </motion.div>
    </div>
  );
}
export default Profile