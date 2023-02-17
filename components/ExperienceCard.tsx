import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { Skill, CompetenceDev } from '@/components/WorkExperience';





type Props = {

titre:string,
type:string,
image:string,
dateStart:string,
dateEnd:string,

 skills: Skill[];
 competenceDev: CompetenceDev[];
 



}

function ExperienceCard({titre, type, image, dateStart, dateEnd, skills, competenceDev }: Props) {
   
    
  return (
    <motion.div
    initial={{
      x: -1000,
         opacity:0
        }}
        animate={{
           x: -0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
       
    
    >
    <article className='flex flex-col rounded-lg items-center space-y-7 h-[600px] w-[480px] flex-shrink-0 md:w-[800px] md:h-[650px] xl:w-[900px] xl:h-[500px] mt-[110px] xs:w-[350px] xs:h-[450px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-x-hidden cursor-pointer scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40'>
    
        <motion.img
        initial={{
       y: -100,
          opacity:0
         }}
         animate={{
            y: -0,
             opacity:1
         }}
         transition={{
             duration:1.2
         }}
         viewport={{once: true}}
        className='w-32 h-32 md:h-60 md:w-60 xl:h-80 xl:w-80 object-center' src={image} width="500" height="500" alt="" />
     
        <section className='px-0 md:px-10 space-y-4'>
            <h4 className='text-3xl text-center uppercase mb-10 font-semibold'>{titre}</h4>
            <p className='font-bold text-1xl mt-1 text-gray-500 '>{type}</p>
            <div className='flex space-x-5 my-2'>

            {skills?.map((skill)=> {
           
              return(
             <div key={skill.id}>
               <Image  
                alt=""
                width="40" height="40"
                className="md:w-12 md:h-12 xs:w-8 sm:h-8"
                src={skill.image}
               />
               </div>
              );
           
          }
           
          )}

            </div>
            <p className='uppercas text-gray-500'>Début {dateStart} fin {dateEnd} </p>
            
             {competenceDev?.map(point=>(
             
             
                <ul key={point?.nom} className='uppercase font-semibold text-sm text-[#C282FA]' >{point?.nom}
                <li key={point?.id} className='uppercas py-5 text-sm text-gray-500'>{point?.points}</li>
                </ul>
  
                  
                  
                  
             
              
            ))} 
            
            </section>
    </article>
    </motion.div> 
  )
}

export default ExperienceCard