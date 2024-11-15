"use client";
import Link from "next/link";
import Menu from "../../public/svg/menu";
import Closed from "../../public/svg/closed";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full bg-blue-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logotipo y menú principal para pantallas medianas y grandes */}
        <Link href="/">
          <h1 className="text-xl font-bold md:text-2xl">
            {/* <Closed /> Icono de menú solo en pantallas pequeñas */}
            Mi Empresa
          </h1>
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Nosotros</Link>
          </li>
          <li>
            <Link href="#services">Servicios</Link>
          </li>
          <li>
            <Link href="#contact">Contacto</Link>
          </li>
        </ul>

        {/* Menú desplegable para pantallas pequeñas */}
        <div className="md:hidden" ref={menuRef}>
          <div className="md:hidden">
            <button className="text-white flex justify-center items-center" onClick={toggleMenu}>
              {isMenuOpen ? <Closed /> : <Menu />}
            </button>

            <ul
              className={`absolute bg-white text-black text-center mt-4 rounded-md shadow-md transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              } fixed top-12 left-0 right-0 z-10`}
            >
              <li className="py-4 px-4 hover:bg-gray-100">
                <Link href="/">Inicio</Link>
              </li>
              <li className="py-4 px-4 hover:bg-gray-100">
                <Link href="/">Nosotros</Link>
              </li>
              <li className="py-4 px-4 hover:bg-gray-100">
                <Link href="/">Nosotros</Link>
              </li>
              <li className="py-4 px-4 hover:bg-gray-100">
                <Link href="/">Nosotros</Link>
              </li>
              {/* ... otros elementos del menú */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
