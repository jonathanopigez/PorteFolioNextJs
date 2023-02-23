import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
const [text, count] = useTypewriter({
  words:[`Bienvenue ! Je me présente, je m'appelle Jonathan et je vais t'expliquer qui je suis et comment j'en suis arrivé à développer des sites web. Les technologies et tout ce qui concerne le numérique ont toujours été une grande passion pour moi. Récemment, j'ai réalisé qu'on pouvait en faire un travail. C'est pourquoi j'ai suivi une formation Bac +2 en développeur web et web mobile, et j'en suis sorti diplômé. J'ai eu l'occasion de travailler sur de nombreux projets, allant du simple site vitrine à une application de gestion avec base de données.  Je cherche constamment à m'améliorer, c'est pourquoi après ma formation, j'ai continué à me former en autodidacte sur différentes technologies telles que React.js, Next.js. Actuellement, je cherche à obtenir un diplôme Bac +3 en concepteur-développeur d'applications. Je suis à la recherche d'une entreprise qui serait prête à me former pendant 16 mois`,
         
      ],
      typeSpeed:25,
      loop:1,
      delaySpeed: 3000,
      deleteSpeed:0,
})

  return (
    <div className=' flex flex-col relative h-screen md:text-left md:flex-row max-x7xl px-10 justify-evenly mx-auto items-center md:max-w-[100%]'>
            <h3 className='absolute top-24 left-[50px] xxs:left-[79px] xxs:text-[1rem] xs:text-lg xs:left-[90px] sm:text-2xl sm:left-auto uppercase tracking-[20px] text-gray-500 text-[1rem]'>A propos</h3>
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
        
        className=' space-y-0 xxs:space-y-3 sm:space-y-10  md:px-10 sm:max-w-[50%] '>
          <h4 className='pt-2 text-1xl font-semibold text-center xs:text-2xl'>Une présentation <span className='text-[#6E61Ca]'>s&apos;impose !</span> </h4>
          <p className=' tracking-wider text-left text-[.5rem] md:text-lg xs:text-[.9rem] xxs:text-[.7rem] text sm:h-[350px] bg-black p-5 border border-[#6E61Ca]'>{text}<Cursor /></p>
          <p className=' tracking-wider text-left text-[.5rem] md:text-lg xs:text-[.9rem] xxs:text-[.7rem] '>Si vous êtes un recruteur, vous pouvez me contacter via la rubrique  &quot;<Link href="#contact" className=' underline decoration-[#6E61Ca] hover:text-[#6E61Ca] hover:decoration-transparent' >Contactez-moi</Link>&quot;.</p>
        </motion.div>
   

       
    </div>
  )
}
export default About;
