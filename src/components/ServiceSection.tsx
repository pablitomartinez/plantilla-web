const services = [
  {
    title: "Consultoría",
    description: "Asesoramiento experto en el desarrollo de tu negocio.",
  },
  {
    title: "Desarrollo Web",
    description: "Creación de sitios web y aplicaciones a medida.",
  },
  {
    title: "Marketing Digital",
    description: "Estrategias digitales para potenciar tu marca.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-12">
    <h3 className="text-3xl font-semibold text-center mb-8">
      Nuestros Servicios
    </h3>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.title} className="p-6 bg-gray-600 rounded shadow-md">
          <h4 className="text-xl font-bold">{service.title}</h4>
          <p className="mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
