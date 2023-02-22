import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type Props = {

}


const About = ({}: Props) => {

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
    <div className=' flex flex-col relative h-screen md:text-left md:flex-row max-x7xl px-10 justify-evenly mx-auto items-center md:max-w-[100%]'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-5 '>A propos</h3>
        <motion.div
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{once:true}}
        
        
        >
          <div className={isMobile ? 'block' : 'hidden'}>
        <Image 
    
           alt=""
           width="300" height="300"
           src="/images/avatar.svg"
        
        className="  mb:mt-11 xs:mt-0 relative  -mb-20 flex-shrink-0 md:rounded-lg md:w-[800px]  md:h-[800px] " />
        </div>
        </motion.div>
        <motion.div 
          initial={{
            x:200,
            opacity:0
          }}
          transition={{
            duration:1.2
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          viewport={{once:true}}
        
        className='space-y-10  md:px-10 md:max-w-[60%] '>
          <h4 className='pt-2 text-1xl font-semibold text-center xs:text-2xl'>Une présentation <span className='text-[#6E61Ca]'>s&apos;impose !</span> </h4>
          <p className=' tracking-wider text-left text-[.5rem] md:text-lg xs:text-[.9rem] xxs:text-[.7rem] '>Bienvenue ! Je me présente, je m&apos;appelle Jonathan et je vais t&apos;expliquer qui je suis et comment j&apos;en suis arrivé à développer des sites web. Les technologies et tout ce qui concerne le numérique ont toujours été une grande passion pour moi. Récemment, j&apos;ai réalisé qu&apos;on pouvait en faire un travail. C&apos;est pourquoi j&apos;ai suivi une formation Bac +2 en développeur web et web mobile, et j&apos;en suis sorti diplômé. J&apos;ai eu l&apos;occasion de travailler sur de nombreux projets, allant du simple site vitrine à une application de gestion avec base de données.  Je cherche constamment à m&apos;améliorer, c&apos;est pourquoi après ma formation, j&apos;ai continué à me former en autodidacte sur différentes technologies telles que React.js, Next.js. Actuellement, je cherche à obtenir un diplôme Bac +3 en concepteur-développeur d&apos;applications. Je suis à la recherche d&apos;une entreprise qui serait prête à me former pendant 16 mois. Si vous êtes un recruteur, vous pouvez me contacter via la rubrique  &quot;<Link href="#contact" className=' underline decoration-[#6E61Ca] hover:text-[#6E61Ca] hover:decoration-transparent' >Contactez-moi</Link>&quot;.</p>
        </motion.div>
   

       
    </div>
  )
}
export default About;
