import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface RoutineStepProps {
  step: parseInt;
  icon: React.ReactNode;
  productName: string;
  timing: string;
  tip: string;
  image: string;
}

export function RoutineStep({ step, icon, productName, timing, tip, image }: RoutineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
    >
      <Card className="relative overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col md:flex-row gap-6 items-center md:items-start group">
        <div className="absolute -left-4 -top-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif text-2xl font-bold italic opacity-50 group-hover:scale-110 transition-transform">
          {step}
        </div>
        
        <div className="w-24 h-24 rounded-full bg-secondary/50 overflow-hidden flex-shrink-0 flex items-center justify-center p-2 relative z-10 border-4 border-background shadow-sm">
          <img src={image} alt={productName} className="object-cover mix-blend-multiply w-full h-full" />
        </div>

        <div className="flex-grow text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-primary">
            {icon}
            <span className="text-sm font-medium tracking-wide uppercase">{timing}</span>
          </div>
          <h3 className="font-serif text-xl font-medium mb-3">{productName}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed bg-secondary/30 p-4 rounded-[16px]">{tip}</p>
        </div>
      </Card>
    </motion.div>
  );
}
