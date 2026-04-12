import type { MenuCategory } from '../../data/menuData';

interface DrinkSectionProps {
  category: MenuCategory;
  variant?: 'cocktail' | 'beer' | 'spirit' | 'wine';
}

export default function DrinkSection({ category, variant = 'cocktail' }: DrinkSectionProps) {
  const getTitleStyle = () => {
    switch (variant) {
      case 'wine':
        return 'bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800';
      case 'spirit':
        return 'bg-gradient-to-r from-stone-700 via-stone-600 to-stone-700';
      default:
        return 'bg-gradient-to-r from-green-800 via-green-700 to-green-800';
    }
  };

  const isSimpleList = !category.items.some(item => item.description);

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className={`${getTitleStyle()} px-4 py-1.5 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h3 className="text-white font-bold tracking-wider text-sm relative z-10">
            {category.title}
          </h3>
        </div>
        {category.price && (
          <span className="text-amber-700 font-bold text-sm ml-1">{category.price}</span>
        )}
      </div>

      <div className={isSimpleList ? 'space-y-1' : 'space-y-2'}>
        {category.items.map((item, index) => (
          <div key={index}>
            {isSimpleList ? (
              <div className="flex justify-between items-center">
                <span className="text-stone-800 text-base font-medium">{item.name}</span>
                <span className="text-stone-700 font-bold text-base">{item.price}</span>
              </div>
            ) : (
              <div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold text-base">{item.name}</span>
                </div>
                {item.description && (
                  <p className="text-stone-600 text-sm mt-0.5">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
