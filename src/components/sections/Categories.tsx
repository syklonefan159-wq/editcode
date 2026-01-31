import { Fan, Wind, CircleDot, Minimize2, AirVent } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Table Fans", icon: Wind },
    { name: "Pedestal Fans", icon: Fan },
    { name: "Wall Fans", icon: CircleDot },
    { name: "Exhaust Fans", icon: AirVent },
    { name: "Foldable Fans", icon: Minimize2 },
  ];

  const scrollToProducts = (category: string) => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => scrollToProducts(category.name)}
                  className="flex flex-col items-center gap-2 p-4 hover:bg-card rounded-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-card border-2 border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
