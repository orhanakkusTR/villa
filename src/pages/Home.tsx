import { Link } from 'react-router-dom';
import { Utensils, Tv, Users, Wine, MapPin, ChefHat, Phone } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <main>
      <SEO
        title="Villa Skeppsbron | Restaurang & Bar i Gävle"
        description="Villa Skeppsbron - Restaurang och bar i hjärtat av Gävle. Vi serverar svenska favoriter och medelhavsinspirerade rätter. Pasta, pizza, fisk, skaldjur och desserter. Boka bord: 026-102000"
        canonical="https://villaskeppsbron.se"
        type="restaurant"
      />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AtmosphereSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-villa-darker overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-villa-darker/80 via-villa-darker/60 to-villa-darker" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20 w-full">
        <img
          src="/villa-logo.png"
          alt="Villa Skeppsbron"
          className="mx-auto h-28 sm:h-40 md:h-56 w-auto mb-6 md:mb-8 animate-fade-in"
        />
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-villa-cream mb-6 leading-tight">
          Mat, gemenskap &{' '}
          <span className="text-villa-gold">glädje vid vattnet!</span>
        </h1>
        <p className="text-villa-cream/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Välkommen till Villa Skeppsbron – där svenska klassiker möter Medelhavets smaker.
          Njut av allt från hantverkspizza och krämig pasta till färsk fisk, skaldjur och utvalda
          à la carte-rätter. Oavsett om ni kommer som familj, vänner eller kollegor erbjuder vi
          en varm atmosfär och en meny som rymmer något för alla åldrar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/meny"
            className="bg-villa-gold text-villa-darker px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold/90 transition-all duration-300 min-w-[180px]"
          >
            SE VÅR MENY
          </Link>
          <Link
            to="/boka-bord"
            className="border border-villa-gold text-villa-gold px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold hover:text-villa-darker transition-all duration-300 min-w-[180px]"
          >
            BOKA BORD
          </Link>
        </div>
      </div>

    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-villa-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-villa-gold text-sm font-semibold tracking-widest">HOS OSS HITTAR DU</span>
            <h2 className="font-display text-4xl md:text-5xl text-villa-cream mt-6 mb-6">
              Välkommen till<br /><span className="text-villa-gold">Villa Skeppsbron</span>
            </h2>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-villa-cream">Fisk & Skaldjur</span> – Havets läckerheter på tallriken.
            </p>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-villa-cream">Pizza & Pasta</span> – Italienska klassiker gjorda med kärlek.
            </p>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-villa-cream">Fräscha Sallader</span> – För en lättare men smakrik lunch eller middag.
            </p>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-villa-cream">A la carte</span> – Våra kockars utvalda favoriter.
            </p>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-villa-cream">Handgjorda Drinkar</span> – Skakade till perfektion i vår nya bar.
            </p>
            <p className="text-villa-cream/70 text-lg leading-relaxed mb-8">
              Kom in och upplev vår nya atmosfär, den uppdaterade verandan och stadens kanske härligaste puls.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.app.goo.gl/GZipKQfkuMysqzTKA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-villa-gold hover:text-villa-gold/80 transition-colors duration-300"
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">Södra Skeppsbron 13, Gävle</span>
              </a>
              <a
                href="tel:026-102000"
                className="flex items-center space-x-3 text-villa-gold hover:text-villa-gold/80 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">026-102000</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/gorsel.jpg"
                alt="Restaurang Villa Skeppsbron"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-villa-gold p-6 md:p-8">
              <Utensils className="w-8 h-8 text-villa-darker mb-2" />
              <p className="text-villa-darker font-semibold text-lg">Restaurang & Bar</p>
              <p className="text-villa-darker/70 text-sm">I hjärtat av Gävle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: ChefHat,
      title: 'Utsökta Rätter',
      description: 'Svenska favoriter och medelhavsinspirerade smaker. Från pasta och pizza till fisk, skaldjur och ljuvliga desserter.',
    },
    {
      icon: Tv,
      title: 'Sport på Storbild',
      description: 'Vi visar sportevenemang på våra skärmar i en avslappnad atmosfär. Fråga oss om kommande matcher!',
    },
    {
      icon: Wine,
      title: 'Bar & Drycker',
      description: 'Charkbrickor, röror och nybakat bröd. Perfekt att dela med ett glas vin, bubbel, en drink eller en kall öl.',
    },
    {
      icon: Users,
      title: 'Gemenskap',
      description: 'En plats där vi tillsammans delar både måltider och glädje. För familjen, vänner eller kollegor.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-villa-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-villa-gold text-sm font-semibold tracking-widest">VAD VI ERBJUDER</span>
          <h2 className="font-display text-4xl md:text-5xl text-villa-cream mt-4">
            Något för alla
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-villa-charcoal/50 p-8 border border-villa-gold/10 hover:border-villa-gold/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-5 bg-villa-gold transform rotate-45 translate-x-6 -translate-y-1" />
              </div>
              <feature.icon className="w-10 h-10 text-villa-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-villa-cream text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-villa-cream/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtmosphereSection() {
  const images = [
    {
      url: '/1.png',
      alt: 'Villa Skeppsbron atmosfär 1',
    },
    {
      url: '/2.png',
      alt: 'Villa Skeppsbron atmosfär 2',
    },
    {
      url: '/3.png',
      alt: 'Villa Skeppsbron atmosfär 3',
    },
    {
      url: '/4.png',
      alt: 'Villa Skeppsbron atmosfär 4',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-villa-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-villa-gold text-sm font-semibold tracking-widest">ATMOSFÄR</span>
          <h2 className="font-display text-3xl md:text-5xl text-villa-cream mt-4">
            Upplev Villa Skeppsbron
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden group">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-villa-darker relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Utensils className="w-12 h-12 text-villa-gold mx-auto mb-6" />
        <h2 className="font-display text-4xl md:text-5xl text-villa-cream mb-6">
          Boka ditt bord idag
        </h2>
        <p className="text-villa-cream/70 text-lg mb-10 max-w-2xl mx-auto">
          Oavsett om du vill njuta av en måltid med familjen, fira med vänner eller kollegor - vi välkomnar dig!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:026-102000"
            className="bg-villa-gold text-villa-darker px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold/90 transition-all duration-300 min-w-[200px]"
          >
            RING 026-102000
          </a>
          <Link
            to="/boka-bord"
            className="border border-villa-gold text-villa-gold px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold hover:text-villa-darker transition-all duration-300 min-w-[200px]"
          >
            BOKA BORD
          </Link>
        </div>
      </div>
    </section>
  );
}
