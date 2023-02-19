import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsTextVisible(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsTextVisible(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isTextVisible) {
      document.body.style.overflow = "visible";
    }
  }, [isTextVisible]);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <button
        className="fixed top-6 right-6 w-12 h-12 text-gray-500 font-medium uppercase border-gray-500 rounded-full flex justify-center items-center z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{ duration: 0.6 }}
          className="fixed top-16 right-0 w-full h-72 bg-[#232323] font-medium suppercase flex flex-col items-center justify-evenly z-50"
          onClick={closeMenu}
        >
          <Link href="#home">
            <button className="hover:text-[#6E61Ca] profilButton">Acceuil</button>
          </Link>
          <Link href="#about">
            <button className="hover:text-[#6E61Ca] profilButton">À propos</button>
          </Link>
          <Link href="#experiences">
            <button className="hover:text-[#6E61Ca] profilButton">Expériences</button>
          </Link>
          <Link href="#competences">
            <button className="hover:text-[#6E61Ca] profilButton">Compétences</button>
          </Link>
          <Link href="#projets">
            <button className="hover:text-[#6E61Ca] profilButton">Projets</button>
          </Link>
        </motion.div>
      )}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 w-full h-full bg-black z-40"
          onClick={handleOutsideClick}
        />
      )}
    </div>
  );
}

export default Navbar;
