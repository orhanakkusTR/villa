import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <main className="pt-20">
      <SEO
        title="Boka Bord | Villa Skeppsbron - Restaurang i Gävle"
        description="Boka bord på Villa Skeppsbron i Gävle. Adress: Södra Skeppsbron 13, Gävle. Telefon: 026-102000. Se våra öppettider och hitta till oss."
        canonical="https://villaskeppsbron.se/boka-bord"
      />
      <section className="relative py-12 md:py-24 bg-villa-darker overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-villa-darker/80 to-villa-darker" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-6xl text-villa-cream mb-3 md:mb-6 leading-tight">
            Reservera ditt bord
          </h1>
          <p className="text-villa-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-12">
            Boka bord, ställ frågor eller kom bara förbi.<br/>
            Vi finns i hjärtat av Gävle.
          </p>

          <div className="mt-6 md:mt-8 w-full border-t border-villa-gold/20 pt-6 md:pt-8">
            <h2 className="font-display text-xl md:text-3xl text-villa-cream mb-4 text-center leading-tight">
              <span className="font-bold">Planerar du något speciellt?</span><br/>
              Vi har lokalen!
            </h2>
            <div className="w-full bg-villa-dark/40 border border-villa-gold/20 rounded-lg p-6 md:p-8 mb-4">
              <p className="text-villa-cream/90 text-sm md:text-lg leading-relaxed">
                Oavsett om det vankas kärleksfest, födelsedagskalas eller en viktig kick-off med jobbet, så är våra dörrar öppna för er. På nya Villa Skeppsbron kombinerar vi enastående mat och handgjorda drinkar med lokaler som andas förnyelse och glädje.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-villa-dark/40 border border-villa-gold/20 rounded-lg p-5">
                <p className="text-villa-gold font-bold text-base mb-2">
                  Boka in oss för:
                </p>
                <p className="text-villa-cream/80 text-sm md:text-base">
                  Bröllop & Förlovningar<br/>
                  Födelsedagar & Privata fester<br/>
                  Kick-offer & Företagsevent
                </p>
                <a
                  href="tel:026-102000"
                  className="inline-block mt-3 text-villa-gold hover:text-villa-gold/80 transition-colors text-sm md:text-base font-semibold"
                >
                  026-102000
                </a>
              </div>
              <div className="bg-villa-dark/40 border border-villa-gold/20 rounded-lg p-5 flex items-center">
                <p className="text-villa-cream/80 text-sm md:text-base italic">
                  Låt oss hjälpa dig att göra ditt nästa evenemang oförglömligt i hjärtat av Gävle!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-villa-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl text-villa-cream mb-8">Kontaktuppgifter</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-villa-charcoal/50 border border-villa-gold/10">
                  <MapPin className="w-6 h-6 text-villa-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-villa-cream font-semibold mb-1">Adress</h3>
                    <p className="text-villa-cream/70">Södra Skeppsbron 13</p>
                    <p className="text-villa-cream/70">802 87 Gävle</p>
                    <a
                      href="https://maps.google.com/?q=Södra+Skeppsbron+13,+Gävle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-villa-gold text-sm hover:underline mt-2 inline-block"
                    >
                      Öppna i Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-villa-charcoal/50 border border-villa-gold/10">
                  <Phone className="w-6 h-6 text-villa-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-villa-cream font-semibold mb-1">Telefon</h3>
                    <a
                      href="tel:026-102000"
                      className="text-villa-cream/70 hover:text-villa-gold transition-colors text-lg"
                    >
                      026-102000
                    </a>
                    <p className="text-villa-cream/50 text-sm mt-1">
                      Ring för bokning eller frågor
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-villa-charcoal/50 border border-villa-gold/10">
                  <Mail className="w-6 h-6 text-villa-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-villa-cream font-semibold mb-1">E-post</h3>
                    <a
                      href="mailto:info@villaskeppsbron.se"
                      className="text-villa-cream/70 hover:text-villa-gold transition-colors"
                    >
                      info@villaskeppsbron.se
                    </a>
                    <p className="text-villa-cream/50 text-sm mt-1">
                      Vi svarar inom 24 timmar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-villa-charcoal/50 border border-villa-gold/10">
                  <Clock className="w-6 h-6 text-villa-gold flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="text-villa-cream font-semibold mb-3">Öppettider</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-villa-gold text-sm font-semibold mb-2">PUBEN</p>
                        <ul className="text-villa-cream/70 text-sm space-y-1">
                          <li><span className="font-semibold">Måndag:</span> Stängt</li>
                          <li><span className="font-semibold">Tis - Fre:</span> 11⁰⁰ - Sent</li>
                          <li><span className="font-semibold">Lördag:</span> 12⁰⁰ - Sent</li>
                          <li><span className="font-semibold">Söndag:</span> 12⁰⁰ - 21⁰⁰</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-villa-gold text-sm font-semibold mb-2">VERANDAN</p>
                        <ul className="text-villa-cream/70 text-sm space-y-1">
                          <li><span className="font-semibold">Måndag:</span> Stängt</li>
                          <li><span className="font-semibold">Tis - Fre:</span> 16⁰⁰ - Sent</li>
                          <li><span className="font-semibold">Lördag:</span> 12⁰⁰ - Sent</li>
                          <li><span className="font-semibold">Söndag:</span> 12⁰⁰ - 21⁰⁰</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-villa-gold/10 border border-villa-gold/30">
                <h3 className="text-villa-cream font-semibold mb-4">Följ oss på sociala medier</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/villaskeppsbron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-villa-charcoal px-4 py-3 text-villa-cream/70 hover:text-villa-gold transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/villaskeppsbron/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-villa-charcoal px-4 py-3 text-villa-cream/70 hover:text-villa-gold transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl text-villa-cream mb-8">Boka bord online</h2>
              <div className="bg-villa-charcoal/50 border border-villa-gold/10 overflow-hidden mb-8">
                <iframe
                  src="https://widget.thefork.com/4340b5ae-2a7d-47b3-994f-5d1114d90608"
                  allow="payment *"
                  style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'scroll' }}
                  title="Boka bord på Villa Skeppsbron"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-16 bg-villa-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-villa-cream mb-8">Hitta hit</h2>
        </div>
        <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.9222198342936!2d17.157451397401804!3d60.67735271159531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660c700559cfc61%3A0xed94efeae6bb904e!2sVilla%20Skeppsbron!5e0!3m2!1str!2sse!4v1773955163476!5m2!1str!2sse"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Villa Skeppsbron plats på kartan"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="p-6 bg-villa-charcoal/50 border border-villa-gold/10">
            <h3 className="text-villa-gold font-semibold mb-3">Värt att veta</h3>
            <ul className="space-y-2 text-villa-cream/70 text-sm">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-villa-gold rounded-full mr-3 mt-2" />
                <span>Vi ligger vid Gävle hamn, nära centrala Gävle</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-villa-gold rounded-full mr-3 mt-2" />
                <span>Parkeringsmöjligheter finns i närheten</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-villa-gold rounded-full mr-3 mt-2" />
                <span>En perfekt mötesplats före och efter Brynäs matcher</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
