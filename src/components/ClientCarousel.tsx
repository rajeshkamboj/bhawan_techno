const clients = [
  'Tata Projects',
  'Delhi Metro',
  'DLF Building India',
  'HCC',
  'NCC',
  'Shivalaya Construction',
  'ILD',
  'YFC Group',
];

export default function ClientCarousel() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-sm font-medium text-slate-400 tracking-widest uppercase mb-10">
          Trusted by Industry Leaders
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-10 shrink-0 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-lg transition-all group-hover:bg-brand-50 group-hover:text-brand-500">
                  {client.charAt(0)}
                </div>
                <span className="text-xl font-display font-semibold text-slate-400 transition-colors group-hover:text-slate-700 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
