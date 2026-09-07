import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Safety Policy', href: '#' },
  { label: 'Quality Standards', href: '#' },
];

const socials = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Building2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-tight">
                  Bhawan Techno
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/40">
                  Construction Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Premier turnkey construction company delivering residential, commercial, and
              industrial projects across India with uncompromised quality and precision.
            </p>
            <div className="flex gap-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-brand-500 hover:border-brand-500 hover:-translate-y-0.5"
                  aria-label="Social link"
                >
                  <social.icon className="w-4.5 h-4.5 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-brand-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-brand-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm text-white/50 leading-relaxed">
                  Sector-10, Faridabad,<br />Haryana, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-brand-400 shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-white/50 hover:text-brand-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-brand-400 shrink-0" />
                <a href="mailto:info@bhawantechno.com" className="text-sm text-white/50 hover:text-brand-400 transition-colors">
                  info@bhawantechno.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Bhawan Techno Construction Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed & built with uncompromised quality.
          </p>
        </div>
      </div>
    </footer>
  );
}
