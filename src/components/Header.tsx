'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Menu from "../../public/svg/menu";
import Closed from "../../public/svg/closed";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-blue-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logotipo y menú principal para pantallas medianas y grandes */}
        <Link href="/">
          <h1 className="text-xl font-bold md:text-2xl">
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <Closed /> : <Menu />}
            </button>
            Mi Empresa
          </h1>
        </Link>

        <motion.ul
          className={`hidden md:flex space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/">Inicio</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="/about">Nosotros</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#services">Servicios</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link href="#contact">Contacto</Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
