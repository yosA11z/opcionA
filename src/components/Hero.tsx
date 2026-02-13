import { useState, useEffect } from 'react';

export default function Hero() {
  // Fecha del evento: 21 de abril de 2026
  const eventDate = new Date('2026-04-21T18:30:00-05:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-sky-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left reveal">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-amber-400 text-sm font-medium">Seminario Virtual en Vivo</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Actualización
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                Tributaria 2026
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Domina las últimas novedades normativas y fortalece tu práctica profesional. 
              <span className="text-amber-400"> Capacitación especializada</span> para contadores y asesores tributarios.
            </p>

            {/* Event details */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>21 al 23 de abril</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>6:30 pm - 8:30 pm</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Virtual en vivo</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#precio"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 animate-pulse-glow"
              >
                Inscríbete ahora
              </a>
              <a
                href="#temas"
                className="w-full sm:w-auto border border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
              >
                Ver temario
              </a>
            </div>
          </div>

          {/* Right content - Countdown */}
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 lg:p-10">
              <h3 className="text-center text-slate-300 text-sm font-medium uppercase tracking-wider mb-6">
                Inscripciones cierran en
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {timeUnits.map((unit, index) => (
                  <div
                    key={unit.label}
                    className="text-center bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 font-mono animate-count-pulse">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-slate-400 text-xs sm:text-sm mt-1">{unit.label}</div>
                  </div>
                ))}
              </div>

              {/* Urgency message */}
              <div className="mt-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-red-300 text-sm">
                    <span className="font-bold">¡Cupos limitados!</span> Solo 50 participantes por sesión para garantizar la calidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-slate-400 text-xs">Días de formación</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-slate-400 text-xs">Horas de contenido</p>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-slate-400 text-xs">Expertos tributarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#beneficios" className="text-slate-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
