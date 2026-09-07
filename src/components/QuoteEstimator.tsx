import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowLeft, Check, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type ProjectType = 'Residential' | 'Commercial' | 'Turnkey' | 'Industrial';

const projectTypes: { type: ProjectType; icon: string; desc: string }[] = [
  { type: 'Residential', icon: '🏠', desc: 'Homes, apartments, villas' },
  { type: 'Commercial', icon: '🏢', desc: 'Offices, retail, complexes' },
  { type: 'Turnkey', icon: '🔑', desc: 'End-to-end delivery' },
  { type: 'Industrial', icon: '🏭', desc: 'Factories, warehouses' },
];

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email', value: 'info@bhawantechno.com', href: 'mailto:info@bhawantechno.com' },
  { icon: MapPin, label: 'Office', value: 'Sector-10, Faridabad, Haryana', href: '#contact' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9:00 AM – 7:00 PM', href: '#contact' },
];

export default function QuoteEstimator() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType | ''>('');
  const [areaSize, setAreaSize] = useState('');
  const [details, setDetails] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const canProceed = () => {
    if (step === 1) return projectType !== '';
    if (step === 2) return areaSize.trim() !== '';
    if (step === 3) return name.trim() && email.trim() && phone.trim();
    return false;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');

    try {
      if (!supabase) throw new Error('Quote service is not configured');

      const { error: insertError } = await supabase.from('quote_requests').insert({
        name,
        email,
        phone,
        project_type: projectType,
        area_size: areaSize,
        details,
      });

      if (insertError) throw insertError;
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 rounded-full mb-4 reveal">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 reveal">
            Request Your{' '}
            <span className="text-gradient">Free Quote</span>
          </h2>
          <p className="text-lg text-slate-500 reveal">
            Tell us about your project and our team will get back to you within 24 hours with a detailed proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-900/5 border border-slate-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-green-600" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Quote Request Received!
                  </h3>
                  <p className="text-slate-500 max-w-md">
                    Thank you, {name}. Our team will review your {projectType?.toLowerCase()} project
                    details and contact you at {email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setProjectType('');
                      setAreaSize('');
                      setDetails('');
                      setName('');
                      setEmail('');
                      setPhone('');
                    }}
                    className="mt-8 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-2 flex-1">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            step >= s
                              ? 'bg-brand-500 text-white'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {step > s ? <Check className="w-4 h-4" /> : s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`h-0.5 flex-1 rounded-full transition-all duration-300 ${
                              step > s ? 'bg-brand-500' : 'bg-slate-100'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        What type of project do you have?
                      </h3>
                      <p className="text-sm text-slate-500 mb-6">
                        Select the category that best describes your build.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {projectTypes.map((pt) => (
                          <button
                            key={pt.type}
                            onClick={() => setProjectType(pt.type)}
                            className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                              projectType === pt.type
                                ? 'border-brand-500 bg-brand-50 shadow-lg shadow-brand-500/10'
                                : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            <div className="text-2xl mb-2">{pt.icon}</div>
                            <div className="font-semibold text-slate-900 text-sm">
                              {pt.type}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">{pt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Tell us about the scale
                      </h3>
                      <p className="text-sm text-slate-500 mb-6">
                        What's the approximate area and any specific requirements?
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Area Size (sq. ft.)
                          </label>
                          <input
                            type="text"
                            value={areaSize}
                            onChange={(e) => setAreaSize(e.target.value)}
                            placeholder="e.g. 5,000 sq. ft."
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-500 focus:outline-none transition-colors text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Additional Details <span className="text-slate-400">(optional)</span>
                          </label>
                          <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            rows={4}
                            placeholder="Tell us about your timeline, budget range, or specific requirements..."
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-500 focus:outline-none transition-colors text-slate-900 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Where can we reach you?
                      </h3>
                      <p className="text-sm text-slate-500 mb-6">
                        We'll send your detailed proposal within 24 hours.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-500 focus:outline-none transition-colors text-slate-900"
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                              Email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-500 focus:outline-none transition-colors text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">
                              Phone
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-brand-500 focus:outline-none transition-colors text-slate-900"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && (
                    <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-lg">
                      {error}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-8">
                    {step > 1 ? (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 3 ? (
                      <button
                        onClick={() => canProceed() && setStep(step + 1)}
                        disabled={!canProceed()}
                        className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!canProceed() || submitting}
                        className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Request
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-brand-500 group-hover:border-brand-500">
                      <info.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 font-medium uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-sm text-white/90 font-medium mt-0.5 group-hover:text-brand-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-900/5 aspect-[4/3] relative bg-slate-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-brand-500" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Sector-10, Faridabad</p>
                  <p className="text-xs text-slate-500">Haryana, India</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
