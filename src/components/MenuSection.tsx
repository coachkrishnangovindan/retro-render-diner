import { useState, useEffect, useMemo } from "react";
import { Search, SlidersHorizontal, Heart } from "lucide-react";
import { menuData, categories, MenuItem } from "../data/menuData";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('diner-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('diner-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Filter and sort menu items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort items
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [selectedCategory, searchTerm, sortBy]);

  const formatCategoryName = (category: string) => {
    switch (category) {
      case 'soup-salad':
        return 'Soup & Salad';
      case 'breakfast-sides':
        return 'Breakfast Sides';
      case 'salad-wraps':
        return 'Salad Wraps';
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh ingredients, classic recipes, and made-to-order dishes that bring comfort to every bite.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              >
                <option value="name">Sort by Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredAndSortedItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No menu items found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn-outline-diner mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Menu Notes */}
        <div className="mt-12 p-6 bg-cream rounded-xl border border-border/50">
          <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">Menu Notes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="mb-2">
                <strong>Breakfast items</strong> are served with hash browns.
              </p>
              <p className="mb-2">
                <strong>*Eggs</strong> are served undercooked or cooked to order.
              </p>
              <p>
                <strong>Lunch & Seafood</strong> served with choice of fries or Caesar salad.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong>Salad dressings:</strong> Caesar, Blue Cheese, Ranch, Balsamic Vinegar
              </p>
              <p className="mb-2">
                Substitute beer-battered onion rings <strong>add $1.00</strong>
              </p>
              <p>
                Substitute clam chowder <strong>add $1.50</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MenuItemCardProps {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const MenuItemCard = ({ item, isFavorite, onToggleFavorite }: MenuItemCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="card-menu-item group">
      {/* Image */}
      <div className="relative h-48 mb-4 bg-muted rounded-lg overflow-hidden">
        {!imageError ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl mb-2">🍽️</div>
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}
        
        {/* Favorite Heart */}
        <button
          onClick={onToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all hover:scale-110 ${
            isFavorite 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-card/90 text-muted-foreground hover:text-primary'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary ml-2 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default MenuSection;