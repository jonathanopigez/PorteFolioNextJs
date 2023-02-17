import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { Skill} from '@/components/WorkExperience';


type Props = {

  titre:string,
  image:string,
  progress:number;
  skills: Skill[];
}

function Competence({titre, image, progress,skills}: Props) {


  return (
   
    <div id={titre} className='group relative flex cursor-pointer '>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1,x:0}}
      transition={{duration: 1}}
      className="rounded-full border border-gray-500 object-center w-20 h-20 md:h-20 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      
      {skills?.map((skill)=> {
           
           return(
          
            <Image key={skill.id} 
             alt=""
             width="100" height="100"
             className="absolute object-center h-20 w-20 rounded-full md:w-20 md:h-20  sm:h-20"
             src={image}
            />
           );
        
       }
        
       )}
      
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 h-20 w-20 md:h-20 md:w-20 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{progress}%</p>
        </div>
      </div>
    </div>
  )
}
export default Competence

