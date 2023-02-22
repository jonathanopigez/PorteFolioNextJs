import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { motion } from "framer-motion"

type Inputs = {
    nom: string,
    email: string,
    sujet: string,
    message: string,
  };
type Props = {}

function Contact({}: Props) {
    const { 
        register,
        handleSubmit, 
         } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href= `mailto:opigezjonathan@gmail.com?subject=${formData.sujet}&body=Bonjour, je m'appelle ${formData.nom}. ${formData.message} (${formData.email})`
    };

  return (
<div className='h-[200%] xxs:h-screen flex relative  flex-col text-center md:text-left   md:flex-row max-x-7xl px-10 justify-center mx-auto items-center'>
<h3 className='absolute top-24 left-[30px] xxs:left-[30px] xxs:text-[1rem] xs:text-lg xs:left-[30px] sm:text-2xl sm:left-auto uppercase tracking-[20px] text-gray-500 text-[1rem]'>Contactez-moi</h3>

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
        
        
        className='flex flex-col space-y-5 mt-[150px] xxs:mt-[110px] xs:mt-10  '>
            <h4 className='text-1xl font-semibold mt-10 text-center'>Une question ? Un projet ?  <span className='decoration-[#C282FA]/50 underline'>N&apos;hésitez pas</span> !
            </h4>
            <div className='space-y-5 xs:space-y-10'>
                <div className='flex items-center space-x-2 justify-center'>
                    <PhoneIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-sm  xs:text-[18px]'>+33783943712</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <MapPinIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-sm  xs:text-[18px]'>Normandie</p>
                </div>
                <div className='flex items-center space-x-2 justify-center '>
                    <EnvelopeIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-sm xs:text-[18px] '>opigezjonathan@gmail.com</p>
                </div>
            </div>
 
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[300px] sm:w-[600px]  mx-auto'>
                    <div className='flex space-x-2 mt-[100px] xxs:mt-0'>
                        <input {...register("nom")} placeholder='Nom' className='contactInput ' type="text" />
                        <input {...register("email")}placeholder='Email' className='w-full contactInput  ' type="email" />
                    </div>
                    <input {...register("sujet")}  placeholder='Sujet'  className='contactInput ' type="text" />
                    <textarea {...register("message")}  placeholder='Message' className='contactInput' />
                    <button type='submit' 
                    className='bg-[#C282FA] py-5 px-10 rounded-md text-black font-bold text-lg'>Envoyer</button>
                </form>
                </motion.div>
  
</div>
  )
}

export default Contact