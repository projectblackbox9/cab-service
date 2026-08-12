import { motion } from 'framer-motion';
import { vehicles } from '../data/vehicles';
import VehicleCard from './VehicleCard';

export default function Fleet() {
  return (
    <section id="fleet" className="relative bg-panel/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-deep">
            The fleet
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            A vehicle for every kind of trip.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            From a quick city hop to a long outstation drive — pick what fits,
            and it'll be ready.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, i) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
