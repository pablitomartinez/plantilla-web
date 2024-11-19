"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Opcional para estilos básicos
import Comilla2 from "../../public/svg/comilla";
import Image from "next/image";

const testimonials = [
  {
    name: "Juan Pérez",
    company: "Empresa XYZ",
    position: "Gerente de Marketing",
    feedback:
      "El equipo de [Tu empresa] ha superado todas nuestras expectativas. Su enfoque personalizado y su rápida respuesta nos han permitido alcanzar nuestros objetivos de manera eficiente.",
    image: "/user.png", // Reemplaza con la URL de la imagen
  },
  {
    name: "María Rodríguez",
    company: "Startup ABC",
    position: "Desarrolladora Frontend",
    feedback:
      "La herramienta de [Tu empresa] ha revolucionado la forma en que trabajamos. Es intuitiva, fácil de usar y nos ha ahorrado mucho tiempo.",
    image: "/user.png",
  },
  {
    name: "Pedro Gómez",
    company: "Consultoría DEF",
    position: "Consultor Senior",
    feedback:
      "La atención al cliente de [Tu empresa] es excepcional. Siempre están dispuestos a ayudar y resolver cualquier duda.",
    image: "/user.png",
  },
  {
    name: "Ana López",
    company: "Agencia de Diseño GHI",
    position: "Diseñadora Gráfica",
    feedback:
      "Los diseños creados por [Tu empresa] son de alta calidad y han superado nuestras expectativas. Estamos muy satisfechos con el resultado.",
    image: "/user.png",
  },
  {
    name: "Carlos Martínez",
    company: "Tienda en Línea JKL",
    position: "Propietario",
    feedback:
      "Gracias a [Tu empresa], hemos logrado aumentar nuestras ventas en un 20%. Su plataforma es fácil de usar y nos ha permitido llegar a un público más amplio.",
    image: "/user.png",
  },
];
const settings = {
  dots: true, // Muestra puntos de navegación
  infinite: true, // Permite bucle infinito
  autoplay: true, // Activación de autoplay
  autoplaySpeed: 2000, // Velocidad de autoplay en milisegundos
  slidesToShow: 3, // Número de testimonios a mostrar en móvil
  slidesToScroll: 1, // Número de testimonios a deslizar a la vez
  responsive: [
    {
      breakpoint: 768, // Punto de quiebre para dispositivos móviles
      settings: {
        slidesToShow: 1, // Un testimonio en pantalla móvil
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => (
  <section className="py-12 bg-gray-900 ">
    <h3 className="text-3xl font-semibold text-center mb-8">Testimonios</h3>
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.name}
          className="testimonial bg-gray-800 p-4 rounded-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <Image
              width={100}
              height={100}
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full"
            />
          </div>
          <p className="flex text-white text-lg">
            {testimonial.feedback} <Comilla2 />
          </p>
          <div className="flex justify-end">
            <p className="text-white text-sm">{testimonial.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default Testimonials;
