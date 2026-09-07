import { ShieldCheck, Clock, Users, HardHat } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Every build undergoes multi-stage quality audits — from material testing to structural load checks — ensuring compliance with IS codes and beyond.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'Our project management framework and dedicated crews ensure milestones are met without compromising craftsmanship or safety.',
  },
  {
    icon: Users,
    title: 'Expert Engineering Team',
    description:
      'A team of certified civil engineers, architects, and project managers bring decades of combined experience to every site.',
  },
  {
    icon: HardHat,
    title: 'Advanced Safety Standards',
    description:
      'Zero-incident culture with daily safety briefings, PPE enforcement, and third-party safety audits on every active site.',
  },
];

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: '+', label: 'Skilled Professionals' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center">
      <span ref={ref} className="text-4xl lg:text-5xl font-bold text-white font-display">
        {count}
        {suffix}
      </span>
      <p className="text-sm text-white/50 mt-2 font-medium">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-400 bg-brand-500/10 rounded-full mb-4 reveal">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 reveal">
              Built Different.{' '}
              <span className="text-gradient">Built to Last.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 reveal">
              We don't just construct buildings — we engineer trust. Every project is backed
              by rigorous standards, an expert team, and an unwavering commitment to delivering
              on our promises.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item, i) => (
                <div key={i} className="reveal group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-500 group-hover:border-brand-500">
                    <item.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30 reveal">
              <img
                src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Engineering team reviewing blueprints at construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-4 right-8 glass-dark rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <StatCounter key={i} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
