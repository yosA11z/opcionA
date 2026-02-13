export default function Topics() {
  const mainTopics = [
    {
      title: 'Documentos Electrónicos',
      description: 'Novedades en facturación electrónica, documento soporte y retención en la fuente.',
      subtopics: [
        'Facturación electrónica versión 2',
        'Documento soporte para gastos',
        'Responsabilidades del adquiriente',
        'Procedimientos de corrección',
      ],
    },
    {
      title: 'Información Exógena',
      description: 'Obligaciones de reporte y últimas actualizaciones del Formulario 1001.',
      subtopics: [
        'Nuevos reportes obligatorios',
        'Plazos y fechas límite 2026',
        'Sanciones por incumplimiento',
        'Herramientas de validación',
      ],
    },
    {
      title: 'Régimen Sancionatorio',
      description: 'Actualizaciones en multas, intereses y procedimientos de cobro coercivo.',
      subtopics: [
        'Tarifas de sanciones 2026',
        'Procedimientos de descargos',
        'Recursos de reposición',
        'Medios de pago y acuerdos',
      ],
    },
  ];

  const bonusTopics = [
    'Reformas tributarias aprobadas y en trámite',
    'Jurisprudencia relevante del Consejo de Estado',
    'Novedades en impuesto de renta',
    'IVA: conceptos actualizados',
    'Declaraciones tributarias: cambios formales',
    'Fiscalización tributaria: estrategias DIAN',
  ];

  return (
    <section id="temas" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Contenido del seminario
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Temas que te
            <span className="text-amber-500"> mantendrán actualizado</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Contenido curado por expertos, enfocado en la aplicación práctica y las necesidades reales
            del profesional tributario.
          </p>
        </div>

        {/* Main topics grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainTopics.map((topic, index) => (
            <div
              key={topic.title}
              className="bg-white rounded-2xl shadow-lg shadow-slate-100 overflow-hidden border border-slate-100 reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-slate-400 text-sm">{topic.description}</p>
              </div>
              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 text-sm">{subtopic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus topics */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-8 lg:p-10 reveal" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase">
              Bonus
            </span>
            <h3 className="text-xl font-bold text-slate-900">Temas adicionales incluidos</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bonusTopics.map((topic) => (
              <div key={topic} className="flex items-center space-x-3 bg-white/60 rounded-lg p-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 text-sm font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-slate-900 text-white px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              <strong>Horario:</strong> 6:30 pm a 8:30 pm | 3 días consecutivos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
