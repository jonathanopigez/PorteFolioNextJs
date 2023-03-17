import React from 'react'
import { motion } from "framer-motion";


type Props = {

}

export interface Projet {
  id: number,
  image:string,
  nom: string,
  skills: string[],
  description:string
 
}

function Projets({}: Props) {
 const projets: Projet[] =[
  {
    id:1,
    image: "/images/projetbd.png",
    nom:"Site E-Commerce",
    skills:["html5","css","javascript","jquery","bootsrap5","Fetch","Json"],
    description:"Création d'un site E-commerce : -Utilisation de Fetch/Json pour importer les datas ( images, prix, titre ) -Système de panier (modal, incrémentations des valeurs) -Fetch d'une API météo -fonction de recherche/tri par nom/album -Responsive"
  },
  {
    id:2,
    image:"/images/projetstage.png",
    nom:"Outil de gestion Altaméos Multimédia",
    skills:["mysql","php","html5","css","jquery","javascript","bootstrap5"],
    description: "Création d'un outils de gestion (stage formation DWWM): | Base de données (CRUD) | Inscription/Connexion | Système d'administration avec dashboard (accessible uniquement par l'admin) | Permission et droit d'accès (plusieurs niveau d'administration) | Sécurité (Expression régulière / Faille XSS / HTML5 sécurité ) | Accès aux states"
  }
 ]

  return (
    <motion.div 
    
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='h-screen w-screen flex relative flex-col text-left max-w-full px-10 justify-evenly items-center snap-x '>
             <h3 className='absolute top-24 left-[80px] xxs:left-[100px] xxs:text-[1rem] xs:text-lg xs:left-[115px] sm:text-2xl sm:left-auto uppercase tracking-[20px] text-gray-500 text-[1rem]'>Projets</h3>

        <div className='relative w-full flex overflow-x-scroll space-x-40 mb:space-x-0 overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40'>
            {projets.map((projet,i) => (
                <article key={projet?.id} className='w-[100%] flex-shrink-0 snap-center flex flex-col space-y-1 items-center xs:mt-32 xxs:mt-24 mt-40 sm:mt-0 sm:justify-center p-10 xs:p-10  xxs:h-screen overflow-y-scroll xxs:overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40  '>
                    <motion.img 
                     
                    initial={{opacity:0, y:0}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.2}}
                    viewport={{once: true}}

                    className='xxs:h-[18vh] h-30 md:h-[400px] md:w-[600px] '
                    src={projet.image} alt="" />
                    <div className='space-y-5 xxs:space-y-5 pc-0 md:px-10 max-w-6xl'>
                        <h4 className='text-sm xxs:text-lg sm:text-3xl font-semibold text-center'>
                            <span className='underline decoration-[#C282FA]/50 '> Projet { i + 1 } sur {projets.length}</span> : {projet.nom}  
                            </h4>
                            <div className='uppercase space-x-5  sm:flex grid grid-cols-2 justify-center content-center'>
                            {projet.skills.map(technology =>(
                              
                                <p key={projet?.id} className='uppercase text-gray-500 text-left text-[2vh] pr-1 '>
                                  
                                  {technology}

                                </p>
                                
                            ))}
                            
                            </div>
                            <p className='text-sm text-left sm:max-w-full'>{projet?.description}</p>
                    </div>
                </article>
            ))}
           
        </div>




         <div className='w-full absolute top-[30%] bg-[#C282FA]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
export default Projets

