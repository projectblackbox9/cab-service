import { Phone } from 'lucide-react';
import { driver } from '../data/driver';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <span className="font-display text-[15px] font-extrabold tracking-tight text-ink">
          {driver.name}
        </span>
        <a
          href={`tel:${driver.phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-emerald-deep"
        >
          <Phone size={16} strokeWidth={2.25} />
          <span className="hidden sm:inline">{driver.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
