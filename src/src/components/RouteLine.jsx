import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

// A single continuous path that winds down the page. Its pathLength is
// driven by scroll progress, so as the visitor moves through the site
// the line "draws itself in" — like watching a trip unfold on a map.
// Stops mark each section the way a route marks waypoints.

const STOPS = [
  { top: 6, label: 'Start' },
  { top: 30, label: 'Your driver' },
  { top: 58, label: 'The fleet' },
  { top: 86, label: 'Get picked up' },
];

export default function RouteLine({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const d =
    'M 40 0 ' +
    'C 40 120, 90 140, 90 260 ' +
    'S 40 420, 40 560 ' +
    'S 90 760, 90 900 ' +
    'S 40 1080, 40 1220 ' +
    'S 90 1420, 90 1600 ' +
    'S 40 1780, 40 2000';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-4 top-0 hidden h-full w-24 md:block"
    >
      <svg
        viewBox="0 0 130 2000"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          d={d}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          d={d}
          fill="none"
          stroke="var(--color-emerald)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
        {STOPS.map((s) => (
          <circle
            key={s.label}
            cx="40"
            cy={(s.top / 100) * 2000}
            r="4.5"
            fill="var(--color-paper)"
            stroke="var(--color-emerald)"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}
