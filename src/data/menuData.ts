export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'appetizers' | 'soup-salad' | 'breakfast' | 'breakfast-sides' | 'lunch' | 'seafood' | 'salad-wraps' | 'drinks';
  imageUrl: string;
  subcategory?: string;
}

export const menuData: MenuItem[] = [
  // Appetizers
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    price: '$7.50',
    description: 'Golden-crispy beer-battered onion rings served with tangy dipping sauce.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'seasoned-fries',
    name: 'Seasoned Fries',
    price: '$7.50',
    description: 'Hand-cut fries seasoned with our signature spice blend.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'fried-calamari',
    name: 'Fried Calamari',
    price: '$9.99',
    description: 'Tender calamari rings lightly breaded and fried to perfection.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'clam-strips',
    name: 'Clam Strips',
    price: '$9.99',
    description: 'Fresh clam strips breaded and fried until golden brown.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'prawn-skewers',
    name: 'Prawn Skewers',
    price: '$9.99',
    description: 'Grilled jumbo prawns on skewers with garlic herb seasoning.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'spicy-wings',
    name: 'Spicy Wings (6 pc)',
    price: '$9.99',
    description: 'Six crispy chicken wings tossed in our signature spicy sauce.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'popcorn-shrimp',
    name: 'Popcorn Shrimp',
    price: '$9.99',
    description: 'Bite-sized shrimp coated in seasoned breading and fried crispy.',
    category: 'appetizers',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format'
  },

  // Soup & Salad
  {
    id: 'clam-chowder-cup',
    name: 'Clam Chowder',
    price: 'Cup $8.50 / Bowl $12.50',
    description: 'Rich and creamy New England-style clam chowder with tender clams.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    price: 'Half $7.50 / Full $10.50',
    description: 'Crisp romaine lettuce tossed with parmesan, croutons and classic Caesar dressing.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'tossed-salad',
    name: 'Tossed Salad',
    price: 'Half $7.50 / Full $10.50',
    description: 'Fresh mixed greens with tomatoes, cucumbers and your choice of dressing.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-chicken-salad',
    name: 'Grilled Chicken Salad',
    price: '$15.99',
    description: 'Mixed greens topped with seasoned grilled chicken breast and fresh vegetables.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'prawn-skewer-salad',
    name: 'Prawn Skewer Salad',
    price: '$16.99',
    description: 'Garden fresh salad topped with our signature grilled prawn skewers.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-salmon-salad',
    name: 'Grilled Salmon Salad',
    price: '$19.99',
    description: 'Fresh mixed greens with perfectly grilled salmon fillet and seasonal vegetables.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'fresh-crabmeat-salad',
    name: 'Fresh Crabmeat Salad',
    price: '$24.99',
    description: 'Premium fresh crabmeat over mixed greens with avocado and citrus vinaigrette.',
    category: 'soup-salad',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&auto=format'
  },

  // Breakfast
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    price: '$19.99',
    description: 'Poached eggs on English muffins with Canadian bacon and hollandaise sauce.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'crab-eggs-benedict',
    name: 'Crab Eggs Benedict',
    price: '$24.99',
    description: 'Our classic Benedict elevated with fresh Dungeness crab meat.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'salmon-benedict',
    name: 'Salmon Benedict',
    price: '$21.99',
    description: 'Smoked salmon Benedict with capers and fresh dill hollandaise.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'denver-omelette',
    name: 'Denver Omelette',
    price: '$18.99',
    description: 'Three-egg omelette with ham, bell peppers, onions and cheddar cheese.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351159318-96d4ff580fb1?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'cheese-omelette',
    name: 'Cheese Omelette',
    price: '$15.99',
    description: 'Fluffy three-egg omelette filled with melted cheddar and Swiss cheese.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'crab-avocado-omelette',
    name: 'Crab Avocado Omelette',
    price: '$24.99',
    description: 'Fresh crabmeat and avocado omelette with herbs and cream cheese.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'bacon-eggs',
    name: 'Bacon & Eggs',
    price: '$16.99',
    description: 'Two eggs any style with crispy bacon strips and toast.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6077d?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'pancakes-eggs',
    name: 'Pancakes & Eggs',
    price: '$15.99',
    description: 'Stack of fluffy buttermilk pancakes with two eggs any style.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'french-toast-eggs',
    name: 'French Toast & Eggs',
    price: '$15.99',
    description: 'Golden French toast made with brioche bread and two eggs any style.',
    category: 'breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop&auto=format'
  },

  // Breakfast Sides
  {
    id: 'eggs-side',
    name: 'Eggs',
    price: '$7.50',
    description: 'Two fresh eggs cooked to your preference.',
    category: 'breakfast-sides',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'bacon-sausage-ham',
    name: 'Bacon, Sausage or Ham',
    price: '$7.50',
    description: 'Your choice of crispy bacon, breakfast sausage, or honey ham.',
    category: 'breakfast-sides',
    imageUrl: 'https://images.unsplash.com/photo-1528607929212-2636ec44b319?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'hash-browns',
    name: 'Hash Browns',
    price: '$6.50',
    description: 'Golden crispy hash browns seasoned to perfection.',
    category: 'breakfast-sides',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'pancakes-side',
    name: 'Pancakes',
    price: '$9.50',
    description: 'Stack of three fluffy buttermilk pancakes with syrup.',
    category: 'breakfast-sides',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'french-toast-side',
    name: 'French Toast',
    price: '$9.50',
    description: 'Three thick slices of brioche French toast with powdered sugar.',
    category: 'breakfast-sides',
    imageUrl: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop&auto=format'
  },

  // Lunch
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    price: '$15.99',
    description: 'Classic beef burger with American cheese, lettuce, tomato, and onion.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'bacon-cheeseburger',
    name: 'Bacon Cheeseburger',
    price: '$16.99',
    description: 'Our cheeseburger topped with crispy bacon for extra flavor.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'swiss-mushroom-burger',
    name: 'Swiss Mushroom Burger',
    price: '$16.99',
    description: 'Beef burger with sautéed mushrooms and melted Swiss cheese.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'ek-double-stack',
    name: 'EK Double Stack Burger',
    price: '$17.99',
    description: 'Double beef patties with cheese, special sauce, and all the fixings.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-chicken-burger',
    name: 'Grilled Chicken Burger',
    price: '$15.99',
    description: 'Seasoned grilled chicken breast with lettuce, tomato, and mayo.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'garden-burger',
    name: 'Garden Burger',
    price: '$14.99',
    description: 'House-made veggie patty with fresh vegetables and avocado.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'filet-o-fish',
    name: 'Filet O Fish Burger',
    price: '$15.99',
    description: 'Beer-battered fish fillet with tartar sauce and crisp lettuce.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'teriyaki-salmon-burger',
    name: 'Teriyaki Salmon Burger',
    price: '$17.99',
    description: 'Grilled salmon fillet with teriyaki glaze and Asian slaw.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'bbq-roasted-beef',
    name: 'B.B.Q. Roasted Beef Burger',
    price: '$15.99',
    description: 'Slow-roasted beef with BBQ sauce, onions, and pickles.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'chicken-club',
    name: 'Chicken Club Sandwich',
    price: '$16.99',
    description: 'Grilled chicken with bacon, lettuce, tomato, and mayo on toasted bread.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'philly-cheese-steak',
    name: 'Philly Cheese Steak',
    price: '$18.99',
    description: 'Sliced beef with peppers, onions, and melted cheese on a hoagie roll.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1585238341710-4d3d4d62d9d6?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese Sandwich',
    price: '$12.99',
    description: 'Classic grilled cheese with melted cheddar on buttered sourdough.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'blt-sandwich',
    name: 'BLT Sandwich',
    price: '$15.99',
    description: 'Crispy bacon, fresh lettuce, and tomato with mayo on toasted bread.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'chicken-fingers',
    name: 'Chicken Fingers',
    price: '$14.99',
    description: 'Hand-breaded chicken tenders served with honey mustard sauce.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'french-dip',
    name: 'French Dip',
    price: '$17.99',
    description: 'Sliced roast beef on a French roll with au jus for dipping.',
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop&auto=format'
  },

  // Seafood
  {
    id: 'fish-chips',
    name: 'Fish & Chips',
    price: '$15.99',
    description: 'Beer-battered cod with crispy fries and tartar sauce.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'shrimps-chips',
    name: 'Shrimps & Chips',
    price: '$15.99',
    description: 'Battered jumbo shrimp with seasoned fries and cocktail sauce.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'salmon-chips',
    name: 'Salmon & Chips',
    price: '$16.99',
    description: 'Grilled salmon fillet with crispy fries and lemon wedge.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'fried-oysters-chips',
    name: 'Fried Oysters & Chips',
    price: '$16.99',
    description: 'Fresh oysters breaded and fried golden with seasoned fries.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'seafood-combo',
    name: 'Seafood Combo',
    price: '$19.99',
    description: 'Fish, shrimp, and calamari with fries - the best of all worlds.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'salmon-blt',
    name: 'Salmon BLT',
    price: '$19.99',
    description: 'Grilled salmon with bacon, lettuce, and tomato on artisan bread.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'crab-sandwich',
    name: 'Crab Sandwich',
    price: '$24.99',
    description: 'Fresh Dungeness crab meat with lettuce and lemon aioli.',
    category: 'seafood',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop&auto=format'
  },

  // Salad Wraps
  {
    id: 'grilled-salmon-wrap',
    name: 'Grilled Salmon Wrap',
    price: '$17.99',
    description: 'Grilled salmon with mixed greens and cucumber in a spinach wrap.',
    category: 'salad-wraps',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-prawn-wrap',
    name: 'Grilled Prawn Wrap',
    price: '$17.99',
    description: 'Seasoned grilled prawns with fresh vegetables in a flour tortilla.',
    category: 'salad-wraps',
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'grilled-chicken-wrap',
    name: 'Grilled Chicken Wrap',
    price: '$16.99',
    description: 'Grilled chicken breast with lettuce, tomato, and ranch dressing.',
    category: 'salad-wraps',
    imageUrl: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'teriyaki-beef-wrap',
    name: 'Teriyaki Beef Wrap',
    price: '$17.99',
    description: 'Tender teriyaki beef with crisp vegetables in a warm tortilla.',
    category: 'salad-wraps',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&auto=format'
  },

  // Drinks
  {
    id: 'coffee-tea',
    name: 'Coffee / Hot Tea',
    price: '$3.50',
    description: 'Freshly brewed coffee or selection of hot teas.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'hot-cocoa',
    name: 'Hot Cocoa',
    price: '$4.50',
    description: 'Rich hot chocolate topped with whipped cream.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'bottled-water',
    name: 'Bottled Water',
    price: '$1.99',
    description: 'Refreshing spring water.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'soda',
    name: 'Soda',
    price: '$3.50',
    description: 'Selection of soft drinks including Coke, Pepsi, Sprite.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'italian-soda',
    name: 'Italian Soda',
    price: '$6.50',
    description: 'Sparkling water with flavored syrups and whipped cream.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'iced-tea-lemonade',
    name: 'Iced Tea / Lemonade',
    price: '$5.50',
    description: 'Refreshing iced tea or fresh-squeezed lemonade.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'orange-apple-juice',
    name: 'Orange / Apple Juice',
    price: '$3.50',
    description: 'Fresh-squeezed orange juice or crisp apple juice.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'cranberry-juice',
    name: 'Cranberry Juice',
    price: '$3.50',
    description: 'Tart and refreshing cranberry juice.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'milk-shake-float',
    name: 'Milk Shake / Float',
    price: '$8.50',
    description: 'Creamy milkshakes or classic root beer floats.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'milk-chocolate-milk',
    name: 'Milk / Chocolate Milk',
    price: '$4.50',
    description: 'Cold fresh milk or rich chocolate milk.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    price: '$5.50',
    description: 'Cold-brewed coffee served over ice with cream.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&auto=format'
  },
  {
    id: 'affogato',
    name: 'Affogato',
    price: '$8.50',
    description: 'Vanilla ice cream drowned in a shot of hot espresso.',
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format'
  }
];

export const categories = [
  { id: 'all', name: 'All', count: menuData.length },
  { id: 'appetizers', name: 'Appetizers', count: menuData.filter(item => item.category === 'appetizers').length },
  { id: 'soup-salad', name: 'Soup & Salad', count: menuData.filter(item => item.category === 'soup-salad').length },
  { id: 'breakfast', name: 'Breakfast', count: menuData.filter(item => item.category === 'breakfast').length },
  { id: 'lunch', name: 'Lunch', count: menuData.filter(item => item.category === 'lunch').length },
  { id: 'seafood', name: 'Seafood', count: menuData.filter(item => item.category === 'seafood').length },
  { id: 'salad-wraps', name: 'Salad Wraps', count: menuData.filter(item => item.category === 'salad-wraps').length },
  { id: 'drinks', name: 'Drinks', count: menuData.filter(item => item.category === 'drinks').length }
];