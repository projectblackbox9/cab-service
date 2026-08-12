import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { driver } from '../data/driver';
import { CallButton, WhatsappButton } from './CtaButtons';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-deep">
            Get in touch
          </p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            One tap, and your ride is on the way.
          </h2>

          <div className="mx-auto mt-9 flex max-w-sm flex-col gap-3 sm:flex-row">
            <CallButton full />
            <WhatsappButton full />
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-line/70 bg-white p-5">
              <Phone size={18} className="text-emerald-deep" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">{driver.phoneDisplay}</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-line/70 bg-white p-5">
              <Mail size={18} className="text-emerald-deep" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">{driver.email}</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-line/70 bg-white p-5">
              <MapPin size={18} className="text-emerald-deep" strokeWidth={2} />
              <span className="text-sm font-semibold leading-snug text-ink">
                {driver.serviceArea}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
