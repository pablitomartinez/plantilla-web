const testimonials = [
  { name: "Cliente 1", feedback: "Excelente servicio y atención." },
  { name: "Cliente 2", feedback: "Soluciones rápidas y efectivas." },
];

const Testimonials = () => (
  <section className=" py-12 bg-gray-600">
    <h3 className="text-3xl font-semibold text-center mb-8">Testimonios</h3>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="p-6 rounded shadow-md">
          <p>&quot;{testimonial.feedback}&quot;</p>
          <p className="mt-4 text-right">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
