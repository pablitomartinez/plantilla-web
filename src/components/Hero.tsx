const Hero = () => (
  <section
    className="bg-cover bg-center h-screen flex items-center"
    style={{ backgroundImage: "url(/path-to-image.jpg)" }}
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
    </div>
  </section>
);

export default Hero;
