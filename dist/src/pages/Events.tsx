import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, Trophy, CalendarCheck } from 'lucide-react';
import SEO from '../components/SEO';

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  description?: string;
  category: 'sport' | 'music';
}

const sportEvents: Event[] = [];


function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-villa-dark rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          LIVE
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-villa-dark to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-villa-cream mb-4">{event.title}</h3>

        {event.description && (
          <p className="text-villa-cream/70 text-sm mb-4">{event.description}</p>
        )}

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-villa-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-villa-cream font-medium">{event.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-villa-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-villa-cream/70 text-sm">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-villa-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-villa-cream font-medium">Villa Skeppsbron</p>
              <a
                href="https://maps.app.goo.gl/GZipKQfkuMysqzTKA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-villa-cream/70 text-sm hover:text-villa-gold transition-colors"
              >
                Södra Skeppsbron 13, Gävle
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-villa-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-villa-cream font-medium">Boka bord</p>
              <a
                href="tel:026-102000"
                className="text-villa-cream/70 text-sm hover:text-villa-gold transition-colors"
              >
                026-102000
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            to="/boka-bord"
            className="flex-1 bg-villa-gold text-villa-darker px-6 py-3 text-sm font-semibold tracking-wide text-center hover:bg-villa-gold/90 transition-all duration-300"
          >
            BOKA BORD
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      <SEO
        title="Event | Villa Skeppsbron"
        description="Kommande evenemang på Villa Skeppsbron i Gävle. Fotbollsmatcher, livesändningar och mer."
      />

      <main className="pt-20">
        <section className="py-8 md:py-16 bg-villa-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-base font-light text-villa-cream mb-1 leading-snug px-4 md:text-2xl lg:text-3xl">
                Upplev spänningen på Villa Skeppsbron
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-villa-gold mb-6 md:mb-8 leading-snug px-4">
                din hemmaarena för alla matcher
              </p>

              <div className="max-w-5xl mx-auto bg-villa-dark/50 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-villa-gold/20 shadow-xl">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-villa-cream mb-8 text-left">
                  Samling i puben – sport varje dag på Villa Skeppsbron!
                </h2>

                <div className="space-y-4 text-villa-cream/80 text-base md:text-lg leading-relaxed text-left">
                  <p>
                    Finns det något bättre än att se matchen tillsammans med polarna? Nu har vi öppnat vår uppdaterade pubdel i Gävle där stämningen alltid är på topp!
                  </p>

                  <p>
                    <span className="font-bold">Hos oss får du den perfekta kombinationen:</span> skärmar som visar dagens sport. God mat (allt från lyxig pizza till grym a la carte).
                  </p>

                  <p>
                    Kall dryck och handgjorda drinkar. En helt ny, härligare atmosfär!
                  </p>

                  <p className="font-semibold text-villa-cream">
                    Samla gänget, boka ett bord eller glid in på ett spontant barhäng.
                  </p>

                  <p className="text-villa-gold font-semibold text-lg md:text-xl">
                    Vi ses vid skärmarna! 🍻
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-villa-gold" />
                <h2 className="text-2xl md:text-3xl font-light text-villa-cream">
                  Sport
                </h2>
              </div>

              {sportEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sportEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-villa-dark/30 rounded-lg">
                  <Trophy className="w-12 h-12 text-villa-gold/50 mx-auto mb-4" />
                  <p className="text-villa-cream/70">
                    Inga kommande sportevenemang just nu.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <CalendarCheck className="w-8 h-8 text-villa-gold" />
                <h2 className="text-2xl md:text-3xl font-light text-villa-cream">
                  Boka Bord
                </h2>
              </div>

              <div className="bg-villa-dark/30 rounded-lg overflow-hidden">
                <iframe
                  src="https://widget.thefork.com/4340b5ae-2a7d-47b3-994f-5d1114d90608"
                  allow="payment *"
                  style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'scroll' }}
                  title="Boka bord på Villa Skeppsbron"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
