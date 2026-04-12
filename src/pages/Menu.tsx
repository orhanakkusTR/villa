import { useState } from 'react';
import { Phone, Utensils, Wine, Beer, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MenuSection from '../components/menu/MenuSection';
import DrinkSection from '../components/menu/DrinkSection';
import WineSection from '../components/menu/WineSection';
import {
  forratter,
  huvudratter,
  pizzor,
  burgare,
  pasta,
  sallader,
  forBarnen,
  efterratter,
  sides,
  cocktails,
  spritz,
  ginTonics,
  sangria,
  kaffedrinkar,
  fatol,
  flaskol,
  cider,
  alkoholfritt,
  whiskey,
  rom,
  cognac,
  likorer,
  rodaViner,
  vitaViner,
  rose,
  mousserande,
} from '../data/menuData';

type TabType = 'mat' | 'drinkar' | 'ol' | 'vin';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<TabType>('mat');

  const tabs = [
    { id: 'mat' as TabType, label: 'Mat', icon: Utensils },
    { id: 'drinkar' as TabType, label: 'Drinkar', icon: GlassWater },
    { id: 'ol' as TabType, label: 'Öl & Cider', icon: Beer },
    { id: 'vin' as TabType, label: 'Vin', icon: Wine },
  ];

  return (
    <main className="pt-20">
      <SEO
        title="Meny | Villa Skeppsbron - Restaurang & Bar i Gävle"
        description="Se vår meny med svenska favoriter och medelhavsinspirerade rätter. Förrätter, pizza, pasta, burgare, sallader, fisk & skaldjur, desserter samt drinkar, vin och öl. Villa Skeppsbron, Gävle."
        canonical="https://villaskeppsbron.se/meny"
      />
      <section className="relative py-16 bg-villa-darker overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-villa-darker/80 to-villa-darker" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-villa-cream mb-4">
            Villa Skeppsbron
          </h1>
          <p className="text-villa-gold text-lg tracking-widest">RESTAURANG & BAR</p>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-villa-darker/95 backdrop-blur-sm border-b border-villa-gold/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-villa-gold text-villa-darker'
                    : 'text-villa-cream/80 hover:text-villa-gold border border-villa-gold/30 hover:border-villa-gold/60'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section
        className="min-h-screen py-12 relative"
        style={{
          background: `linear-gradient(135deg, #f5e6c8 0%, #e8d4a8 25%, #f0dbb8 50%, #e5d0a0 75%, #f2dfb8 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'mat' && (
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <MenuSection category={forratter} />
                <MenuSection category={huvudratter} />
                <MenuSection category={pizzor} />
              </div>
              <div>
                <MenuSection category={forBarnen} />
                <MenuSection category={efterratter} />
                <MenuSection category={burgare} />
                <MenuSection category={pasta} />
                <MenuSection category={sallader} />
                <MenuSection category={sides} />
              </div>
            </div>
          )}

          {activeTab === 'drinkar' && (
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <DrinkSection category={cocktails} variant="cocktail" />
                <DrinkSection category={spritz} variant="cocktail" />
                <DrinkSection category={ginTonics} variant="cocktail" />
              </div>
              <div>
                <DrinkSection category={sangria} variant="cocktail" />
                <DrinkSection category={kaffedrinkar} variant="cocktail" />
                <div className="mt-8">
                  <h4 className="text-stone-700 font-bold tracking-wider mb-4 text-lg">AVEC</h4>
                  <DrinkSection category={whiskey} variant="spirit" />
                  <DrinkSection category={rom} variant="spirit" />
                  <DrinkSection category={cognac} variant="spirit" />
                  <DrinkSection category={likorer} variant="spirit" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ol' && (
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <DrinkSection category={fatol} variant="beer" />
                <DrinkSection category={flaskol} variant="beer" />
              </div>
              <div>
                <DrinkSection category={cider} variant="beer" />
                <DrinkSection category={alkoholfritt} variant="beer" />
              </div>
            </div>
          )}

          {activeTab === 'vin' && (
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <WineSection category={rodaViner} />
              </div>
              <div>
                <WineSection category={vitaViner} />
                <WineSection category={rose} />
                <WineSection category={mousserande} />
              </div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 opacity-60">
              <img src="/villa-logo.png" alt="Villa Skeppsbron" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-villa-darker">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-villa-cream mb-4">
            Boka ditt bord hos oss
          </h2>
          <p className="text-villa-cream/70 mb-2">
            Vi visar även sportevenemang på våra skärmar - fråga oss om kommande matcher!
          </p>
          <p className="text-villa-cream/70 mb-8">
            Ring oss eller kom förbi så tar vi din bokning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:026-102000"
              className="bg-villa-gold text-villa-darker px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold/90 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>RING 026-102000</span>
            </a>
            <Link
              to="/boka-bord"
              className="border border-villa-gold text-villa-gold px-8 py-4 text-sm font-semibold tracking-wide hover:bg-villa-gold hover:text-villa-darker transition-all duration-300"
            >
              KONTAKTA OSS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
