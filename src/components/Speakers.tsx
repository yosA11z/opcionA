export default function Speakers() {
  const speakers = [
    {
      name: 'Juan Diego Solórzano Horta',
      title: 'Contador Público',
      credentials: [
        'Especialista en Gerencia Tributaria',
        'Magister en Gerencia Tributaria',
        'Consultor tributario con más de 15 años de experiencia',
        'Docente universitario en programas de pregrado y posgrado',
      ],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
      expertise: 'Especialista en documentos electrónicos y facturación',
    },
    {
      name: 'Arles Ibarra Cadavid',
      title: 'Contador Público',
      credentials: [
        'Especialista en Gerencia Tributaria',
        'Docente universitario',
        'Conferencista tributario nacional',
        'Asesor tributario para empresas de diversos sectores',
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop&crop=faces',
      expertise: 'Especialista en régimen sancionatorio y fiscalización',
    },
  ];

  return (
    <section id="conferencistas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Expertos a cargo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Conoce a nuestros
            <span className="text-amber-500"> conferencistas</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Profesionales con amplia trayectoria en el ámbito tributario, listos para compartir su
            conocimiento y experiencia.
          </p>
        </div>

        {/* Speakers grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/2 relative">
                  <div className="aspect-square md:aspect-auto md:h-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:bg-gradient-to-r"></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{speaker.name}</h3>
                    <p className="text-amber-600 font-medium text-sm">{speaker.title}</p>
                  </div>

                  {/* Expertise badge */}
                  <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{speaker.expertise}</span>
                  </div>

                  {/* Credentials */}
                  <ul className="space-y-2">
                    {speaker.credentials.map((credential) => (
                      <li key={credential} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600 text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Session info */}
        <div className="mt-12 text-center reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-600">
            Ambos conferencistas estarán presentes en todas las sesiones, resolviendo tus dudas en
            tiempo real.
          </p>
        </div>
      </div>
    </section>
  );
}
