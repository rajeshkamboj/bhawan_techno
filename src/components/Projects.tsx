import { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

type Category = 'All' | 'Commercial' | 'Infrastructure' | 'Residential';

const projects: {
  title: string;
  category: Exclude<Category, 'All'>;
  location: string;
  image: string;
  description: string;
}[] = [
  {
    title: 'Metro Transit Hub',
    category: 'Infrastructure',
    location: 'New Delhi, Delhi',
    image: 'https://images.pexels.com/photos/7107980/pexels-photo-7107980.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A multi-level transit interchange integrating metro, bus, and pedestrian flow.',
  },
  {
    title: 'Corporate Glass Tower',
    category: 'Commercial',
    location: 'Gurugram, Haryana',
    image: 'https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A 32-story commercial high-rise with curtain-wall facade and LEED Gold certification.',
  },
  {
    title: 'Highway Overpass System',
    category: 'Infrastructure',
    location: 'Faridabad, Haryana',
    image: 'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A six-lane elevated corridor easing urban congestion across industrial sectors.',
  },
  {
    title: 'Premium Residential Complex',
    category: 'Residential',
    location: 'Noida, Uttar Pradesh',
    image: 'https://images.pexels.com/photos/24259314/pexels-photo-24259314.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A gated community of 240 units with integrated amenities and green spaces.',
  },
  {
    title: 'Industrial Manufacturing Plant',
    category: 'Commercial',
    location: 'Manesar, Haryana',
    image: 'https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A heavy-duty production facility with crane bays, loading docks, and utility tunnels.',
  },
  {
    title: 'Riverside Apartment Towers',
    category: 'Residential',
    location: 'Pune, Maharashtra',
    image: 'https://images.pexels.com/photos/15951714/pexels-photo-15951714.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Twin residential towers with cantilevered balconies overlooking the riverside promenade.',
  },
];

const filters: Category[] = ['All', 'Commercial', 'Infrastructure', 'Residential'];

export default function Projects() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 rounded-full mb-4 reveal">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 reveal">
              Featured Projects That{' '}
              <span className="text-gradient">Define Excellence</span>
            </h2>
            <p className="text-lg text-slate-500 reveal">
              A selection of landmark builds across India — each delivered on time, on budget, and beyond spec.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 reveal">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  active === filter
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] cursor-pointer reveal"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent transition-opacity duration-500 group-hover:from-slate-900 group-hover:via-slate-900/50" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-xs font-semibold text-white glass-dark rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-white/60 text-sm mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-32">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
