import type { MenuCategory } from '../../data/menuData';

interface WineSectionProps {
  category: MenuCategory;
}

export default function WineSection({ category }: WineSectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 px-4 py-1.5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h3 className="text-white font-bold tracking-wider text-sm relative z-10">
            {category.title}
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-amber-700 font-bold text-base">{item.name}</span>
              <span className="text-green-700 font-bold text-base">{item.price}</span>
            </div>
            {item.description && (
              <p className="text-stone-600 text-sm mt-0.5 leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
