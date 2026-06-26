import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  category: string;
  skinType?: string;
  isRecommended?: boolean;
}

export function ProductCard({
  id,
  image,
  name,
  brand,
  price,
  rating,
  category,
  skinType,
  isRecommended
}: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group bg-card rounded-[24px] overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
      data-testid={`card-product-${id}`}
    >
      <div className="relative aspect-[4/5] bg-secondary/50 p-6 flex items-center justify-center overflow-hidden">
        {isRecommended && (
          <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
            Recommended
          </Badge>
        )}

        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{brand}</p>
        <h3 className="font-serif text-lg font-medium leading-tight mb-2 line-clamp-2">{name}</h3>
      
        {skinType && (
          <p className="text-sm text-muted-foreground mb-4">Best for: <span className="font-medium text-foreground">{skinType}</span></p>
        )}
        <Badge variant="outline" className="inline-flex w-fit px-3 py-1 mb-3">
  {category}
</Badge>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-medium">${price.toFixed(2)}</span>
          <Button size="icon" className="rounded-full shadow-sm hover:scale-105 transition-transform">
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div> 
      </div>
    </motion.div>
  );
}
