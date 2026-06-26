import { Sun, Moon, Sparkles, Droplets, Shield, Wind, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoutineStep } from "@/components/RoutineStep";
import { useToast } from "@/hooks/use-toast";

import cleanserImg from "@/assets/cleanser.png";
import tonerImg from "@/assets/toner.png";
import serumImg from "@/assets/serum.png";
import moisturizerImg from "@/assets/moisturizer.png";
import sunscreenImg from "@/assets/sunscreen.png";
import nightcreamImg from "@/assets/nightcream.png";

export default function Routine() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Routine Saved",
      description: "Your personalized ritual has been saved to your profile.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Your Ritual</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Curated specifically for your combination skin to balance oil production and deliver deep hydration.
            </p>
          </div>
          <Button size="lg" className="rounded-full shadow-md md:w-auto w-full" onClick={handleSave} data-testid="button-save-routine">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Save My Routine
          </Button>
        </div>

        <div className="space-y-24">
          {/* Morning Routine */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b border-border pb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shadow-sm">
                <Sun className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-3xl font-medium">Morning Glow</h2>
            </div>
            
            <div className="grid gap-6">
              <RoutineStep 
                step={1}
                icon={<Droplets className="w-4 h-4" />}
                productName="Purifying Gel Cleanser"
                timing="1 min"
                tip="Massage gently onto damp skin. Focus on the T-zone where oil accumulates."
                image={cleanserImg}
              />
              <RoutineStep 
                step={2}
                icon={<Wind className="w-4 h-4" />}
                productName="Balancing Rose Toner"
                timing="30 sec"
                tip="Pat into skin with hands rather than cotton pads to minimize waste and boost absorption."
                image={tonerImg}
              />
              <RoutineStep 
                step={3}
                icon={<Sparkles className="w-4 h-4" />}
                productName="Vitamin C Brightening Serum"
                timing="Wait 1 min"
                tip="Apply 3-4 drops. Essential for daytime antioxidant protection."
                image={serumImg}
              />
              <RoutineStep 
                step={4}
                icon={<Shield className="w-4 h-4" />}
                productName="Invisible Shield SPF 40"
                timing="Final Step"
                tip="Apply generously. Sun protection is the most important step for preserving skin health."
                image={sunscreenImg}
              />
            </div>
          </section>

          {/* Night Routine */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b border-border pb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center shadow-sm">
                <Moon className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-3xl font-medium">Night Repair</h2>
            </div>
            
            <div className="grid gap-6">
              <RoutineStep 
                step={1}
                icon={<Droplets className="w-4 h-4" />}
                productName="Purifying Gel Cleanser"
                timing="1 min"
                tip="Double cleanse if wearing makeup or heavy sunscreen. Wash for a full 60 seconds."
                image={cleanserImg}
              />
              <RoutineStep 
                step={2}
                icon={<Sparkles className="w-4 h-4" />}
                productName="Hyaluronic Acid Serum"
                timing="Apply to damp skin"
                tip="Apply while skin is still slightly damp from cleansing to lock in maximum moisture."
                image={serumImg}
              />
              <RoutineStep 
                step={3}
                icon={<Wind className="w-4 h-4" />}
                productName="Overnight Renewal Cream"
                timing="Final Step"
                tip="Massage upward. The rich texture seals in the serum and repairs barrier overnight."
                image={nightcreamImg}
              />
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}