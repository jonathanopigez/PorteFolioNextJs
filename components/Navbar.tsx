import React from 'react'
import Link from 'next/link';
import { useState } from 'react';


type Props = {}

function Navbar({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-6 right-4 transform pb-2 flex flex-col z-40 ">
    <button
      className=" text-gray-500 font-medium uppercase p-2 justify-evenly "
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      Menu
    </button>
    {isMenuOpen && (
        
      <div className=" bg-gray-700 flex flex-col font-medium uppercase  w-screen mt-0 z-40 h-52">
        
        <Link href="#home"><button className='profilButton hover:text-[#6E61Ca]'>Acceuil</button></Link>
    <Link href="#about"><button className='profilButton hover:text-[#6E61Ca]'>à propos</button></Link>
        <Link href="#experiences"><button className='profilButton hover:text-[#6E61Ca]'>Expériences</button></Link>
        <Link href="#competences"><button className='profilButton hover:text-[#6E61Ca]'>Compétences</button></Link>
        <Link href="#projets"><button className='profilButton hover:text-[#6E61Ca]'>Projets</button></Link>
      </div>
    )}
  </div>
);
};


export default Navbar