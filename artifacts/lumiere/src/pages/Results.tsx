import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Droplets, Activity, Wind, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Results() {
  const metrics = [
    { label: "Oiliness", score: "Balanced", icon: <Droplets className="w-4 h-4" />, color: "bg-blue-100 text-blue-700" },
    { label: "Hydration", score: "Low", icon: <Wind className="w-4 h-4" />, color: "bg-orange-100 text-orange-700" },
    { label: "Texture", score: "Uneven", icon: <Activity className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-700" },
    { label: "Elasticity", score: "Good", icon: <Sparkles className="w-4 h-4" />, color: "bg-green-100 text-green-700" },
    { label: "Sensitivity", score: "Moderate", icon: <Shield className="w-4 h-4" />, color: "bg-pink-100 text-pink-700" },
  ];

  const concerns = [
    { label: "Acne", value: 45 },
    { label: "Wrinkles", value: 20 },
    { label: "Dark Spots", value: 35 },
    { label: "Redness", value: 30 },
  ];

  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Your Skin Profile</h1>
          <p className="text-muted-foreground text-lg">Analysis complete. Here is your personalized breakdown.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Score & Type */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-none shadow-sm rounded-[32px] bg-white p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 to-primary"></div>
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-8">Skin Type</h2>
              
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-secondary" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 283 - (283 * 0.78) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-serif font-medium">78%</span>
                  <span className="text-xs text-muted-foreground mt-1">Skin Health</span>
                </div>
              </div>
              
              <h3 className="font-serif text-3xl text-primary font-medium italic mb-2">Combination</h3>
              <p className="text-sm text-muted-foreground px-4">Oily T-zone with dry patches on the cheeks.</p>
            </Card>

            <Card className="border-none shadow-sm rounded-[32px] bg-primary/5 p-8 flex items-center justify-between">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-1">Estimated Skin Age</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-medium">28</span>
                  <span className="text-sm text-muted-foreground">years</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            
            <Card className="border-none shadow-sm rounded-[32px] bg-white p-8">
              <h3 className="font-serif text-2xl font-medium mb-6">Primary Concerns</h3>
              <div className="space-y-6">
                {concerns.map((concern, i) => (
                  <div key={concern.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{concern.label}</span>
                      <span className="text-sm text-muted-foreground">{concern.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${concern.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-foreground rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-none shadow-sm rounded-[32px] bg-white p-8">
              <h3 className="font-serif text-2xl font-medium mb-6">Metric Breakdown</h3>
              <div className="flex flex-wrap gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex-1 min-w-[140px] bg-secondary/30 rounded-[20px] p-4 flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1.5 rounded-full ${metric.color}`}>
                        {metric.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                    </div>
                    <span className="font-serif text-lg">{metric.score}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full flex-1 shadow-md text-base py-6">
                <Link href="/routine">View Your Routine</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full flex-1 border-primary/20 bg-white hover:bg-primary/5 text-base py-6">
                <Link href="/products?type=combination">
                  Shop Recommended <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}