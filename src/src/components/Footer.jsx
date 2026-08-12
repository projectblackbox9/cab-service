import { driver } from '../data/driver';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-ink-faint md:flex-row md:justify-between md:px-10 md:text-left">
        <span className="font-display font-bold text-ink">{driver.name}</span>
        <span>
          © {year} {driver.name}. All rights reserved.
        </span>
        <span>{driver.phoneDisplay}</span>
      </div>
    </footer>
  );
}
