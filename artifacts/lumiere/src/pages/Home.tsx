import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-6 md:pt-12 pb-20 lg:h-[calc(100vh-80px)] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-10"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-none rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> AI-Powered Skincare
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight font-medium mb-4 text-foreground">
              Discover Your <br className="hidden lg:block" /> Best Skin
            </h1>
            <h2 className="font-serif text-4xl md:text-5xl italic text-primary mb-6">
              with AI Precision
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Experience the future of beauty. Our advanced AI analyzes your unique skin profile in seconds to create a personalized, expert-backed routine designed exclusively for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                <Link href="/analysis">
                  Start Skin Analysis <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Takes less than 2 minutes
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-full flex items-center justify-end pr-12"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Radiant glowing skin" className="object-cover w-full h-full" />
              
              {/* Subtle AI Scan SVG Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-overlay">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="2 4" className="animate-spin-slow origin-center" />
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.2" fill="none" strokeDasharray="1 6" className="animate-spin-reverse origin-center" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" strokeDasharray="1 10" className="animate-pulse" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="1 10" className="animate-pulse" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">The Science of Glow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Elevate your skincare with technology designed to understand you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8 text-primary" />,
                title: "AI-Powered Diagnostics",
                desc: "Our proprietary algorithm scans over 100 data points to identify your unique skin needs with clinical precision."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "Personalized Routines",
                desc: "No more guesswork. Receive a curated regimen of premium products perfectly matched to your skin profile."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Expert-Backed Results",
                desc: "Formulations recommended by dermatologists and proven to deliver visible, luminous results."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-background p-8 rounded-[24px] text-center flex flex-col items-center shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Your Journey to Radiance</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4 relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary/20 z-0" />
            
            {[
              { step: "01", title: "Scan", desc: "Upload a selfie or use your camera." },
              { step: "02", title: "Analyze", desc: "Our AI evaluates your skin profile." },
              { step: "03", title: "Glow", desc: "Get your personalized routine." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-col items-center flex-1 relative z-10"
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center text-2xl font-serif italic text-primary border-4 border-background mb-6">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-center text-muted-foreground text-sm max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-md">
              <Link href="/analysis">Begin Your Ritual</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}