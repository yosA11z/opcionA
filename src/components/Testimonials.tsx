export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ana María Gómez',
      role: 'Contadora Pública',
      company: 'Gómez & Asociados',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces',
      content: 'El seminario superó mis expectativas. Los contenidos son muy actualizados y la claridad de los conferencistas es excelente. Aplico lo aprendido diariamente en mi práctica.',
      rating: 5,
    },
    {
      name: 'Carlos Hernández',
      role: 'Asesor Tributario',
      company: 'Consultores Tributarios SAS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
      content: 'La mejor inversión para mantenernos actualizados en un entorno tributario tan cambiante. El material de apoyo es invaluable y la claridad de las explicaciones excepcional.',
      rating: 5,
    },
    {
      name: 'María Fernanda Ruiz',
      role: 'Estudiante de Contaduría',
      company: 'Universidad Nacional',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
      content: 'Como estudiante, este seminario me dio una visión práctica que la universidad no ofrece. Los ejemplos reales y casos prácticos son de gran ayuda para mi formación profesional.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '98%', label: 'Satisfacción' },
    { value: '500+', label: 'Profesionales capacitados' },
    { value: '4.9/5', label: 'Calificación promedio' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Lo que dicen nuestros
            <span className="text-amber-500"> participantes</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Profesionales y estudiantes que han transformado su práctica con nuestra capacitación.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-100 border border-slate-100 reveal"
              style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-xs text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
