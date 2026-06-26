import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Sparkles, Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import cleanserImg from "@/assets/cleanser.png";
import tonerImg from "@/assets/toner.png";
import serumImg from "@/assets/serum.png";
import moisturizerImg from "@/assets/moisturizer.png";
import sunscreenImg from "@/assets/sunscreen.png";
import nightcreamImg from "@/assets/nightcream.png";

// Mock Data
const ALL_PRODUCTS = [
  { id: "1", name: "Purifying Gel Cleanser", brand: "Scanly ", price: 38.00, rating: 4.8, category: "Cleanser", skinType: "Combination", image: cleanserImg },
  { id: "2", name: "Gentle Milk Cleanser", brand: "Scanly ", price: 36.00, rating: 4.9, category: "Cleanser", skinType: "Dry", image: cleanserImg },
  { id: "3", name: "Balancing Rose Toner", brand: "Scanly ", price: 42.00, rating: 4.7, category: "Toner", skinType: "All", image: tonerImg },
  { id: "4", name: "Hyaluronic Acid Serum", brand: "Scanly ", price: 65.00, rating: 5.0, category: "Serum", skinType: "Dry", image: serumImg },
  { id: "5", name: "Vitamin C Brightening Serum", brand: "Scanly ", price: 72.00, rating: 4.8, category: "Serum", skinType: "Combination", image: serumImg },
  { id: "6", name: "Lightweight Water Cream", brand: "Scanly ", price: 58.00, rating: 4.6, category: "Moisturizer", skinType: "Oily", image: moisturizerImg },
  { id: "7", name: "Rich Ceramide Moisturizer", brand: "Scanly ", price: 64.00, rating: 4.9, category: "Moisturizer", skinType: "Combination", image: moisturizerImg },
  { id: "8", name: "Mineral SPF 50", brand: "Scanly ", price: 45.00, rating: 4.7, category: "Sunscreen", skinType: "All", image: sunscreenImg },
  { id: "9", name: "Invisible Shield SPF 40", brand: "Scanly ", price: 42.00, rating: 4.5, category: "Sunscreen", skinType: "Combination", image: sunscreenImg },
  { id: "10", name: "Overnight Renewal Cream", brand: "Scanly ", price: 85.00, rating: 4.9, category: "Night Cream", skinType: "Combination", image: nightcreamImg },
];

const CATEGORIES = ["All", "Cleanser", "Toner", "Serum", "Moisturizer", "Sunscreen", "Night Cream"];

export default function Products() {
  const [location] = useLocation();
  const [isRecommendedMode, setIsRecommendedMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Check if user came from analysis results
    if (window.location.search.includes("type=combination")) {
      setIsRecommendedMode(true);
    }
  }, [location]);

  const filteredProducts = ALL_PRODUCTS.filter(p => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const recommendedMatch = isRecommendedMode ? (p.skinType === "Combination" || p.skinType === "All") : true;
    return categoryMatch && recommendedMatch;
  });

  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">The Collection</h1>
            <p className="text-muted-foreground max-w-xl">
              Scientifically formulated, luxurious textures. Discover the perfect additions to your ritual.
            </p>
          </div>
          
          {isRecommendedMode && (
            <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">Showing recommendations for Combination skin</span>
              <button 
                onClick={() => setIsRecommendedMode(false)}
                className="ml-2 text-xs underline text-muted-foreground hover:text-foreground"
              >
                View All
              </button>
            </div>
          )}
        </div>

        <Tabs defaultValue="All" className="w-full mb-12" onValueChange={setActiveCategory}>
          <div className="flex justify-between items-center mb-8 border-b border-border pb-4 overflow-x-auto no-scrollbar">
            <TabsList className="bg-transparent h-auto p-0 flex gap-6 justify-start min-w-max">
              {CATEGORIES.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-1 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
              <Filter className="w-4 h-4" /> Filter
            </div>
          </div>

          <TabsContent value={activeCategory} className="m-0 focus-visible:outline-none">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    {...product}
                    isRecommended={isRecommendedMode && (product.skinType === "Combination" || product.skinType === "All")}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}