import { ArrowRight, Play, Building, Award, TrendingUp } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/435894/pexels-photo-435894.jpeg?auto=compress&cs=tinysrgb&w=1600';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience', position: 'top-8 right-6', delay: 'animate-float' },
  { icon: Building, value: '100+', label: 'Completed Projects', position: 'bottom-20 left-0', delay: 'animate-float-delayed' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', position: 'bottom-8 right-8', delay: 'animate-float' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern construction skyscrapers with crane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/60" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-brand-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full glass-dark text-xs font-medium text-white/90 tracking-wide animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Premier Turnkey Construction Company in India
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance animate-fade-up">
            Constructing Your Future with{' '}
            <span className="text-gradient">Uncompromised Quality</span> & Precision
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-9 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Specialized turnkey construction solutions for residential, commercial, and
            industrial infrastructure across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary">
              Request a Proposal
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#projects" className="btn-ghost-light">
              <Play className="w-4 h-4" />
              Explore Our Work
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-xs font-bold"
                >
                  {['TP', 'DM', 'DL', 'HC'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.928 5.934 6.572.955-4.757 4.636L16.18 19 10 15.677 3.82 19l1.437-6.475L.5 7.889l6.572-.955z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/60 mt-0.5">Trusted by India's top developers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[42%] h-[70%]">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`absolute ${stat.position} ${stat.delay}`}
          >
            <div className="glass rounded-2xl p-4 shadow-2xl shadow-slate-900/20 min-w-[160px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 font-display">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
