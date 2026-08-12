import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { driver } from '../data/driver';
import { CallButton, WhatsappButton } from './CtaButtons';

const easeOut = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft">
            <Star size={13} className="fill-emerald text-emerald" strokeWidth={0} />
            {driver.experienceYears}+ years driving {driver.serviceArea.split('&')[0].trim()}
          </div>

          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {driver.name.split(' ')[0]}
            <br />
            <span className="text-emerald-deep">will get you there.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {driver.tagline} Reliable local rides, airport runs, and outstation
            trips — one call or message away.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsappButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-glow blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-line/70 bg-white shadow-[0_30px_60px_-25px_rgba(22,35,61,0.25)]">
            <img
              src={driver.photo}
              alt={`${driver.name}, cab driver`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-line/70 bg-white px-5 py-3.5 text-center shadow-[0_16px_32px_-16px_rgba(22,35,61,0.2)]">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">
              Currently
            </p>
            <p className="mt-0.5 text-sm font-semibold text-emerald-deep">
              {driver.availability.split('·')[0].trim()}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
