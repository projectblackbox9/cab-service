import { motion } from 'framer-motion';
import { MapPin, Languages, Clock, Award } from 'lucide-react';
import { driver } from '../data/driver';

const facts = [
  { icon: Award, label: 'Experience', value: `${driver.experienceYears} years` },
  { icon: MapPin, label: 'Service area', value: driver.serviceArea },
  { icon: Languages, label: 'Languages', value: driver.languages.join(', ') },
  { icon: Clock, label: 'Availability', value: driver.availability },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-deep">
              About your driver
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Someone who knows every road, personally.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-soft">
              {driver.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-line/70 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(22,35,61,0.2)]"
              >
                <fact.icon size={20} strokeWidth={2} className="text-emerald-deep" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-faint">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
