'use client';
import { motion } from "framer-motion";

const Hero = () => (
  <section
    className="bg-cover bg-center h-screen flex items-center"
    // style={{ backgroundImage: "url(/path-to-image.jpg)" }}
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-white">
        Bienvenidos a Nuestra Empresa
      </h2>
      <p className="text-xl text-white mt-4">
        Soluciones empresariales a medida
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
        Contáctanos
      </button>
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a mi página
      </motion.h1>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Este texto se desliza hacia arriba
      </motion.div>
    </div>
    </div>
  </section>
);

export default Hero;
