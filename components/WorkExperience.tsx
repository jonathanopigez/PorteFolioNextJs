import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


type Props = {


}
export interface Skill {
  id: number,
  nom: string;
  progress: number;
  image: string;
  
}
export interface CompetenceDev {
  id: number,
  nom: string;
  points: string[];
 
  
}
export interface TravailPro {
  id: number,
  nom: string;
  type: string;
  image: string;
  dateStart: string;
  dateEnd: string;
  competences: number[];
  skills: Skill[];
}



const WorkExperience = ({}: Props) => {
//#region Carousel

const [currentSlide, setCurrentSlide] = useState(0);

const handleNextSlide = () => {
  let newSlide = currentSlide === TravailsPro.length - 1 ? 0 : currentSlide + 1;
  setCurrentSlide(newSlide);
};

const handlePrevSlide = () => {
  let newSlide = currentSlide === 0 ? TravailsPro.length - 1 : currentSlide - 1;
  setCurrentSlide(newSlide);
};
//#endregion Carousel
//#region data
interface TravailPro {
  id: number,
  nom: string;
  type: string;
  image: string;
  dateStart: string;
  dateEnd: string;
  competences: CompetenceDev[];
  skills: Skill[];
}



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



const competenceDev: CompetenceDev[] = [
  {
    id:1,
    nom: "Module : Sécurité & Multiplateformes ",
  points: ["Failles de sécurité et parades (OWASP, injections)","Développement Mobile (Flutter)","Développement Desktop (Flutter)"]
  },
  {
    id:2,
    nom: "Module : N-Layer & microservices",
    points: ["Conception (Separation of Concerns, Design Patterns)","Node.js & Express","NoSQL","API (REST, GraphQL, Websockets)"]
  },
  {
    id:3,
    nom: "Module : Avant de développer ",
  points: ["Cloud Computing (Serverless, FaaS, IaaS, PaaS, etc.)","Schémas UML (diagrammes de classes, ER, de séquences)","Gestion de projet (Cycle en V, méthodes agiles, Scrum)"]
  },
  {
    id:4,
    nom: "Module : Back-end Front-end",
    points: ["Conception (architecture synchrone, MVC)","Conteneurisation (Docker)","SGBDR","PHP & Laravel","JavaScript & Vue.js"]
  },
  {
    id:5,
    nom: "Développer les composants d'accès aux données",
    points: ["Accéder aux données de manière sécurisée avec le CRUD","Programmer avec un langages objet","Identifier les spécificités de sécurité des langages et les attaques classique (Faille XSS)"]
  },
  {
    id:6,
    nom: "Créer une base de données",
    points: ["Recenser et organiser les données (Merise, Mcd, Mpd)","Ecrire les scripts de création et d'alimentation de la base de données, et de gestion des droits (Mysql)","Créer une base de données, la maintenir et gérer les droit d'utilisateur grâce à un outils intégré (PhpMyAdmin)","Exprimer les besoins de sécurité SGBD en suivant les bonnes pratiques"]
  },
  {
    id:7,
    nom: "Développer une interface utilisateur web dynamique",
    points: ["Coder un algorithme en suivant les normes et règles de développement","Développer des scripts clients dans une page web a l'aide d'un framework","Prendre en compte le réseau dans la sécurité","Réaliser les tests avec un jeu d'essai"]
  },
  {
    id:8,
    nom: "Réaliser une interface utilisateur web statique et adaptable",
    points: ["Construire une maquette ergonomique","Développer des pages web statiques en utilisant HTML et CSS","Intégrer du contenu multimédia dans une page web statique","Réaliser une interface utilisateur adaptable grâce a un framework CSS (Bootstrap)"]
  },
  // initialiser le tableau d'objets OtherObject ici
];



const TravailsPro : TravailPro[] = [
  {
    id:1,
    nom: 'Formation DWWM',
    type: 'Afpa Evreux bachelor +2 Développeur web et web mobile Fullstack',
    image: '/images/logoAfpa.png',
    dateStart: "2021-03-08",
    dateEnd: "2021-10-07",
    competences: [competenceDev[6],competenceDev[7],competenceDev[4],competenceDev[5]],
    skills: [skills[0],skills[1],skills[2],skills[3],skills[4],skills[5],skills[6],skills[7]]
  },
  {
    id:2,
    nom: 'Stage Altameos Multimédia',
    type: '2 mois  de stage chez Altameos Multimédia (deux périodes de 4 semaines)',
    image: '/images/logo-altameos.png',
    dateStart: "2021-07-01",
    dateEnd: "2022-09-29",
    competences: [competenceDev[4],competenceDev[5],competenceDev[6]],
    skills: [skills[0],skills[1],skills[2],skills[3],skills[4],skills[5],skills[6],skills[7]]
  },
  {
    id:3,
    nom: 'Formation CDA',
    type: "O'clock Bachelor +3 concepteur développeur d'applications",
    image: '/images/oclock.png',
    dateStart: "2023-04-04",
    dateEnd: "2024-07-05",
    competences: [competenceDev[0],competenceDev[1],competenceDev[2],competenceDev[3]],
    skills: [skills[6],skills[16],skills[13],skills[17],skills[15],skills[18]]
  },
 
];
//#endregion data
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth > 900);
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  return (
   <motion.div 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:1.5
        }}
        className='h-screen w-full flex relative flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center '>
    
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Expériences</h3>

          <div className='p-10 ' >
       
         
  
<div className="w-full h-full flex overflow-hidden relative m-auto">
    
      

          {TravailsPro?.map((travail, index)=> {
            if(index === currentSlide){
              return(
                <ExperienceCard key={travail.id} skills={travail.skills} titre={travail.nom} type={travail.type} image={travail.image} dateStart={travail.dateStart} dateEnd={travail.dateEnd} competenceDev={travail.competences} />
              );
            }
          }
           
          )}

          </div>
      

<div className="relative flex justify-center p-2 xs:p-0">
<AiOutlineLeft
        onClick={handlePrevSlide}
        className=" sm:relative z-20 text-2xl transition-all duration-75 hover:text-[#C282FA]/40 sm:top-3"
      />
        {TravailsPro.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-[#C282FA]/10 rounded-full mx-2 mb-2 md:mt-4  mt-1  cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 md:mt-4 mt-1    cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
            <AiOutlineRight
        onClick={handleNextSlide}
        className=" z-20 text-2xl   transition-all duration-75 hover:text-[#C282FA]/40 sm:relative sm:top-3"
      />
      </div>


          </div>

 
   </motion.div>
  )
}

export default WorkExperience