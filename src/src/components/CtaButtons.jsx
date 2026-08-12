import { Phone, MessageCircle } from 'lucide-react';
import { driver } from '../data/driver';

export function CallButton({ full = false, className = '' }) {
  return (
    <a
      href={`tel:${driver.phone.replace(/\s/g, '')}`}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-emerald active:scale-[0.98] ${
        full ? 'w-full' : ''
      } ${className}`}
    >
      <Phone size={18} strokeWidth={2.25} className="transition-transform duration-300 group-hover:rotate-12" />
      Call now
    </a>
  );
}

export function WhatsappButton({ full = false, className = '' }) {
  const message = encodeURIComponent(
    `Hi ${driver.name}, I'd like to book a cab.`
  );
  return (
    <a
      href={`https://wa.me/${driver.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-all duration-300 hover:border-emerald hover:text-emerald-deep active:scale-[0.98] ${
        full ? 'w-full' : ''
      } ${className}`}
    >
      <MessageCircle size={18} strokeWidth={2.25} className="transition-transform duration-300 group-hover:-rotate-12" />
      WhatsApp
    </a>
  );
}
