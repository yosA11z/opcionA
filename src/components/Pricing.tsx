import { useState } from 'react';

export default function Pricing() {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    'Acceso a 3 sesiones en vivo (6 horas de formación)',
    'Material digital descargable',
    'Certificado de asistencia (12 horas)',
    'Acceso a grabaciones por 30 días',
    'Resolución de dudas en vivo',
    'Plantillas y herramientas prácticas',
    'Actualizaciones normativas posteriores',
  ];

  return (
    <section id="precio" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Inversión
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Invierte en tu
            <span className="text-amber-400"> desarrollo profesional</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Accede a contenido de alta calidad impartido por expertos tributarios con amplia
            trayectoria.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-xl mx-auto reveal" style={{ animationDelay: '0.2s' }}>
          <div
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 ${isHovered ? 'scale-[1.02]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Urgency banner */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-center">
              <p className="text-white font-semibold text-sm">
                ⏰ Oferta por tiempo limitado - Precio lanzamientos
              </p>
            </div>

            {/* Price section */}
            <div className="p-8 text-center border-b border-slate-100">
              <div className="mb-4">
                <span className="text-slate-500 text-lg">Inversión:</span>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-slate-400 line-through text-xl">$180.000</span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                  -33% OFF
                </span>
              </div>
              <div className="flex items-baseline justify-center">
                <span className="text-slate-600 text-2xl font-medium">$</span>
                <span className="text-6xl font-bold text-slate-900">120</span>
                <span className="text-2xl font-medium text-slate-600">.000</span>
                <span className="text-slate-500 ml-2">COP</span>
              </div>
              <p className="text-slate-500 mt-4 text-sm">Pago único sin cuotas adicionales</p>
            </div>

            {/* Features list */}
            <div className="p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
                ¿Qué incluye tu inscripción?
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA section */}
            <div className="p-8 pt-0">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-bold text-slate-900">Pago 100% seguro</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Aceptamos tarjetas de crédito, débito, PSE y transferencias bancarias.
                </p>
              </div>

              <button
                onClick={() => window.open('https://wa.me/573175807141?text=Hola,%20quiero%20inscribirme%20al%20seminario%20Actualizaci%C3%B3n%20Tributaria%202026', '_blank')}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Inscríbete ahora
              </button>

              <p className="text-center text-slate-500 text-sm mt-4">
                ¿Tienes dudas? Escríbenos al{' '}
                <a
                  href="https://wa.me/573175807141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 font-semibold hover:underline"
                >
                  317 580 7141
                </a>
              </p>
            </div>
          </div>

          {/* Guarantee badge */}
          <div className="mt-8 flex items-center justify-center space-x-4 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 text-slate-400">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">Garantía de satisfacción 7 días</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="flex items-center space-x-2 text-slate-400">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Cupo limitado a 50 participantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
