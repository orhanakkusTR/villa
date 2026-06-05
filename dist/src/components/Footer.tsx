import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-villa-darker border-t border-villa-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <img
              src="/villa-logo.png"
              alt="Villa Skeppsbron"
              className="h-16 w-auto mb-6"
            />
            <p className="text-villa-cream/70 text-sm leading-relaxed mb-6">
              Restaurang & Bar med värme och gemenskap i hjärtat av Gävle.
            </p>
            <h3 className="text-villa-gold font-semibold mb-4 tracking-wide">FÖLJ OSS</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/villaskeppsbron"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-villa-charcoal flex items-center justify-center text-villa-cream/70 hover:text-villa-gold hover:bg-villa-gold/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/villaskeppsbron/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-villa-charcoal flex items-center justify-center text-villa-cream/70 hover:text-villa-gold hover:bg-villa-gold/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-villa-gold font-semibold mb-4 tracking-wide">KONTAKT</h3>
            <ul className="space-y-3 text-villa-cream/70 text-sm">
              <li>
                <a href="https://maps.google.com/?q=Södra+Skeppsbron+13,+Gävle" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 hover:text-villa-gold transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Södra Skeppsbron 13<br />802 87 Gävle</span>
                </a>
              </li>
              <li>
                <a href="tel:026-102000" className="flex items-center space-x-3 hover:text-villa-gold transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>026-102000</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@villaskeppsbron.se" className="flex items-center space-x-3 hover:text-villa-gold transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@villaskeppsbron.se</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-villa-gold font-semibold mb-4 tracking-wide">SNABBLÄNKAR</h3>
            <ul className="space-y-2 text-villa-cream/70 text-sm">
              <li>
                <Link to="/" className="hover:text-villa-gold transition-colors">Hem</Link>
              </li>
              <li>
                <Link to="/meny" className="hover:text-villa-gold transition-colors">Meny</Link>
              </li>
              <li>
                <Link to="/boka-bord" className="hover:text-villa-gold transition-colors">Boka Bord</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-villa-gold font-semibold mb-4 tracking-wide">VERANDAN</h3>
            <div className="flex items-start space-x-3 text-villa-cream/70 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <ul className="space-y-1">
                <li><span className="font-semibold">Mån:</span> Stängt</li>
                <li><span className="font-semibold">Tis - Fre:</span> 16:00 - Sent</li>
                <li><span className="font-semibold">Lör:</span> 12:00 - Sent</li>
                <li><span className="font-semibold">Sön:</span> 12:00 - 21:00</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-villa-gold font-semibold mb-4 tracking-wide">PUBEN</h3>
            <div className="flex items-start space-x-3 text-villa-cream/70 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <ul className="space-y-1">
                <li><span className="font-semibold">Mån:</span> Stängt</li>
                <li><span className="font-semibold">Tis - Fre:</span> 11:00 - Sent</li>
                <li><span className="font-semibold">Lör:</span> 12:00 - Sent</li>
                <li><span className="font-semibold">Sön:</span> 12:00 - 21:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-villa-gold/10 text-center text-villa-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Villa Skeppsbron. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
