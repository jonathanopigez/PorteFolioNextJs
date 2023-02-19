import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { useState } from 'react';


type Props = {}

function Navbar({}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    function closeMenu() {
      setIsMenuOpen(false);
    }
  
  return (
    <div className="fixed top-6 right-0 transform items-end flex flex-col z-40 ">
    <button
      className=" text-gray-500 right-4 font-medium uppercase p-2 justify-evenly "
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      Menu
    </button>
    {isMenuOpen && (
        
      <div ref={menuRef} className=" bg-gray-700 flex flex-col font-medium uppercase  w-screen mt-0 z-40 h-80 space-y-4">
        
        <Link onClick={closeMenu} href="#home"><button className='profilButton hover:text-[#6E61Ca]'>Acceuil</button></Link>
    <Link onClick={closeMenu} href="#about"><button className='profilButton hover:text-[#6E61Ca]'>à propos</button></Link>
        <Link onClick={closeMenu} href="#experiences"><button className='profilButton hover:text-[#6E61Ca]'>Expériences</button></Link>
        <Link onClick={closeMenu} href="#competences"><button className='profilButton hover:text-[#6E61Ca]'>Compétences</button></Link>
        <Link onClick={closeMenu} href="#projets"><button className='profilButton hover:text-[#6E61Ca]'>Projets</button></Link>
        <Link onClick={closeMenu} href="#contact"><button className='profilButton hover:text-[#6E61Ca]'>Contact</button></Link>
      </div>
    )}
  </div>
);
};


export default Navbar