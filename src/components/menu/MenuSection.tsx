import type { MenuCategory } from '../../data/menuData';

interface MenuSectionProps {
  category: MenuCategory;
  variant?: 'food' | 'drink' | 'wine';
}

export default function MenuSection({ category, variant = 'food' }: MenuSectionProps) {
  const titleClasses = variant === 'wine'
    ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700'
    : 'bg-gradient-to-r from-green-800 via-green-700 to-green-800';

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${titleClasses} px-6 py-2 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h3 className="text-white font-bold tracking-wider text-lg relative z-10">
            {category.title}
          </h3>
        </div>
        {category.price && (
          <span className="text-amber-700 font-bold text-lg ml-2">{category.price}</span>
        )}
      </div>

      {category.note && (
        <p className="text-stone-600 text-sm italic mb-4">{category.note}</p>
      )}

      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-amber-700 font-bold text-base tracking-wide">
                    {item.name}
                  </span>
                  {item.note && (
                    <span className="text-green-700 text-xs font-medium">
                      ({item.note})
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-stone-700 text-base mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              {item.price && (
                <span className="text-stone-800 font-bold text-base whitespace-nowrap">
                  {item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
