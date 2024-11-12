import Link from "next/link";

const Header = () => (
  <header className="w-full bg-blue-800 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-xl font-bold">Mi Empresa</h1>
      <ul className="flex space-x-4">
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
    </nav>
  </header>
);

export default Header;
