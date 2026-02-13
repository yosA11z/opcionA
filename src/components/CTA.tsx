export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-8 reveal">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-white font-medium text-sm">Últimos cupos disponibles</span>
        </div>

        {/* Main content */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 reveal" style={{ animationDelay: '0.1s' }}>
          ¿Listo para actualizar tus
          <br />
          conocimientos tributarios?
        </h2>

        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 reveal" style={{ animationDelay: '0.2s' }}>
          No te quedes fuera de este seminario exclusivo. Inscríbete hoy y obtén acceso a contenido
          de alta calidad que transformará tu práctica profesional.
        </p>

        {/* CTA Button */}
        <div className="reveal" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => window.open('https://wa.me/573175807141?text=Hola,%20quiero%20inscribirme%20al%20seminario%20Actualizaci%C3%B3n%20Tributaria%202026', '_blank')}
            className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Inscríbete ahora
          </button>
        </div>

        {/* Secondary info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80 text-sm reveal" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Comienza hoy</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Acceso inmediato</span>
          </div>
        </div>

        {/* Urgency reminder */}
        <div className="mt-12 bg-white/10 rounded-xl p-6 max-w-md mx-auto reveal" style={{ animationDelay: '0.5s' }}>
          <p className="text-white font-medium">
            🚨 Solo quedan{' '}
            <span className="font-bold text-lg">12 cupos</span> disponibles para esta edición
          </p>
        </div>
      </div>
    </section>
  );
}
