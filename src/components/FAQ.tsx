import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cómo recibo el acceso al seminario?',
      answer:
        'Después de confirmar tu pago, te enviaremos un correo electrónico con el enlace de acceso a la plataforma virtual, el material de apoyo y toda la información necesaria para participar en las sesiones en vivo.',
    },
    {
      question: '¿Qué pasa si no puedo asistir a las sesiones en vivo?',
      answer:
        'Tendrás acceso a las grabaciones de todas las sesiones durante 30 días después de finalizado el seminario. Podrás verlas en el horario que te sea más conveniente, cuantas veces necesites.',
    },
    {
      question: '¿El certificado tiene validez?',
      answer:
        'Sí, emitimos un certificado de asistencia con valor curricular de 12 horas. Este certificado es válido para recertificaciones profesionales y cumple con los requisitos de entidades colegiadas.',
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer:
        'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), PSE, transferencias bancarias y pago por Baloto. Puedes realizar el pago de forma segura a través de nuestra pasarela.',
    },
    {
      question: '¿Hay política de reembolso?',
      answer:
        'Sí, ofrecemos garantía de satisfacción de 7 días. Si por alguna razón el seminario no cumple tus expectativas, te reembolsamos el 100% de tu inversión sin preguntas.',
    },
    {
      question: '¿El material es descargable?',
      answer:
        'Sí, todo el material de apoyo (presentaciones, guías, plantillas, checklist) está disponible para descarga en formato PDF y Excel para que lo puedas usar en tu práctica diaria.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 reveal">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            ¿Tienes
            <span className="text-amber-500"> dudas?</span>
          </h2>
          <p className="text-slate-600">
            Respuestas a las preguntas más comunes sobre el seminario.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center reveal" style={{ animationDelay: '0.6s' }}>
          <p className="text-slate-600 mb-4">¿Tu pregunta no está aquí?</p>
          <a
            href="https://wa.me/573175807141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
            <span>Escríbenos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
