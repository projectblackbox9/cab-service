import { motion } from 'framer-motion';
import { Users, Briefcase, Snowflake, CircleCheck } from 'lucide-react';

export default function VehicleCard({ vehicle, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_60px_-30px_rgba(22,35,61,0.28)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-ink-soft shadow-sm backdrop-blur">
          {vehicle.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold tracking-tight text-ink">
            {vehicle.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-glow px-2.5 py-1 text-xs font-medium text-emerald-deep">
            <CircleCheck size={13} strokeWidth={2.5} />
            {vehicle.availability}
          </span>
        </div>

        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {vehicle.description}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line/70 pt-5 font-tabular">
          <div className="flex flex-col gap-1.5">
            <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-faint">
              <Users size={13} /> Seats
            </dt>
            <dd className="text-sm font-semibold text-ink">{vehicle.seats}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-faint">
              <Snowflake size={13} /> Comfort
            </dt>
            <dd className="text-sm font-semibold text-ink">{vehicle.ac ? 'AC' : 'Non-AC'}</dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-faint">
              <Briefcase size={13} /> Luggage
            </dt>
            <dd className="text-sm font-semibold leading-snug text-ink">{vehicle.luggage}</dd>
          </div>
        </dl>
      </div>
    </motion.article>
  );
}
