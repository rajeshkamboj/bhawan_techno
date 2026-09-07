import { Building2, Factory, DraftingCompass, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Turnkey Projects',
    description:
      'End-to-end project delivery — from concept and design to construction and handover. A single point of accountability for your entire build.',
    features: ['Design to handover', 'Single-point accountability', 'Fixed timeline delivery'],
  },
  {
    icon: Factory,
    title: 'Commercial & Industrial Construction',
    description:
      'Scalable construction for factories, warehouses, office complexes, and retail spaces built to withstand heavy-duty operations.',
    features: ['Heavy-duty structures', 'Code-compliant builds', 'Operational readiness'],
  },
  {
    icon: DraftingCompass,
    title: 'Specialized Engineering & Architectural Execution',
    description:
      'Precision engineering and architectural execution that brings complex designs to life with structural integrity and aesthetic excellence.',
    features: ['Structural engineering', 'Architectural execution', 'Precision fabrication'],
  },
  {
    icon: Layers,
    title: 'Structural & Infrastructure Development',
    description:
      'Foundations, frameworks, and large-scale infrastructure — roads, bridges, and utilities built for generations.',
    features: ['Deep foundation work', 'Infrastructure systems', 'Long-term durability'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 rounded-full mb-4 reveal">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 reveal">
            Core Services Built on{' '}
            <span className="text-gradient">Engineering Excellence</span>
          </h2>
          <p className="text-lg text-slate-500 reveal">
            From foundation to finishing, we deliver every phase of construction with
            uncompromising quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/8 hover:-translate-y-1 reveal overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center mb-6 transition-all duration-500 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
