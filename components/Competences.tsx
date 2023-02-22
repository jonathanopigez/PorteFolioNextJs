import React from 'react'
import { motion } from "framer-motion";
import Competence from './Competence';
import { Skill } from './WorkExperience';

type Props = {
  
}

function Compétence({}: Props) {
  const skills: Skill[] = [
    {
      id:1,
      nom:'html',
      progress:100,
      image: "/images/HTML5_Badge.svg",
    },
    {
      id:2,
      nom:'css',
      progress:100,
      image: "/images/CSS3_logo_and_wordmark.svg",
    },
    {
      id:3,
      nom:'javascript',
      progress:100,
      image: "/images/Unofficial_JavaScript_logo_2.svg",
    },
    {
      id:4,
      nom:'bootstrap',
      progress:100,
      image: "/images/Bootstrap_logo.svg",
    },
    {
      id:5,
      nom:'vscode',
      progress:100,
      image: "/images/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      id:6,
      nom:'jquery',
      progress:80,
      image: "/images/jquery-icon.svg",
    },
    {
      id:7,
      nom:'php',
      progress:80,
      image: "/images/PHP-logo.svg",
    },
    {
      id:8,
      nom:'mysql',
      progress:80,
      image: "/images/mysql-icon.svg",
    },
    {
      id:9,
      nom:'tailwindcss',
      progress:75,
      image: "/images/Tailwind_CSS_Logo.svg",
    },
    {
      id:10,
      nom:'react',
      progress:50,
      image: "/images/React-icon.svg",
    },
    {
      id:11,
      nom:'typescript',
      progress:40,
      image: "/images/Typescript_logo_2020.svg",
    },
    {
      id:12,
      nom:'nextjs',
      progress:40,
      image: "/images/nextjs.svg",
    },
    {
      id:13,
      nom:'sanity',
      progress:40,
      image: "/images/sanity.png",
    },
    {
      id:14,
      nom:'laravel',
      progress:0,
      image: "/images/laravel.png",
    },
    {
      id:15,
      nom:'nodejs',
      progress:0,
      image: "/images/node.png",
    },
    {
      id:16,
      nom:'vuejs',
      progress:0,
      image: "/images/Vue.js_Logo_2.svg",
    },
    {
      id:17,
      nom:'docker',
      progress:0,
      image: "/images/vertical-logo-monochromatic.webp",
    },
    {
      id:18,
      nom:'serverless',
      progress:0,
      image: "/images/serverless.png",
    },
    {
      id:19,
      nom:'flutter',
      progress:0,
      image: "/images/flutter.svg",
    },
  ];
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='h-screen flex  relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:pc-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center xs:space-y-0 '>
           <h3 className='absolute top-24 left-2 xxs:left-8 xxs:text-[1rem] xs:text-lg xs:left-10 sm:text-2xl sm:left-auto uppercase tracking-[20px] text-gray-500 text-[1rem]'>Compétences</h3>
           <h3 className='absolute top-36  xxs:left-0 xxs:text-[1rem] xs:text-lg xs:left-0 sm:text-2xl sm:left-auto uppercase text-gray-500/40 text-[1rem]'>Survolez les compétences pour plus de détails</h3>


       <div className='absolute top-52 grid grid-cols-4 gap-5 '>

       {skills?.map((skill)=>(
            <Competence key={skill.id} image={skill.image} progress={skill.progress} titre={skill.nom} skills={[skill]} />
          ))}
       

       </div>


    </motion.div>
  )
}

export default Compétence