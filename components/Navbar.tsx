import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsTextVisible(true);
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

  const menuItems = [
    { name: "Acceuil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Expériences", href: "#experiences" },
    { name: "Compétences", href: "#competences" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <button
        className="fixed top-6 right-6 w-12 h-12 text-gray-500 font-medium uppercase border-gray-500 rounded-full flex justify-center items-center z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {isMenuOpen && (
        <>
          <motion.div
            ref={menuRef}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6 }}
            className="fixed top-16 right-0 w-full h-80 bg-[#232323] font-medium suppercase flex flex-col items-end justify-evenly z-50"
            onClick={closeMenu}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
              >
                <Link href={item.href}>
                  <button className="hover:text-[#6E61Ca] profilButton">{item.name}</button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-40"
          />
        </>
      )}
    </div>
  );
}

export default Navbar;
