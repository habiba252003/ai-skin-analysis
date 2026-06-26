import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Upload, Sun, Info, ScanFace, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRef, useState } from "react";

export default function Analysis() {
  const [, setLocation] = useLocation();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamActive, setStreamActive] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsSuccess(true);
    }, 2500);
  };

  const handleViewResults = () => {
    setLocation("/results");
  };
const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    setStreamActive(true); // خلي الفيديو يظهر الأول

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        videoRef.current
          .play()
          .then(() => console.log("Camera started"))
          .catch((err) => console.log("Play error:", err));
      }
    }, 0);
  } catch (error) {
    console.error("Camera access denied:", error);
  }
};

  return (
    <div className="min-h-[calc(100vh-80px)] bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Skin Analysis
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let our AI understand your unique skin profile to curate the perfect
            regimen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Upload Area */}
          <div className="md:col-span-2">
            <Card className="border-none shadow-lg rounded-[32px] overflow-hidden bg-white p-8 h-full flex flex-col justify-center min-h-[400px] relative">
              {streamActive && (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full max-w-md rounded-2xl mt-6 border"
                />
              )}
              <AnimatePresence mode="wait">
                {!isAnalyzing && !isSuccess && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                      <ScanFace className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">
                      Capture Your Skin
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-sm">
                      Take a clear selfie or upload a photo to begin your
                      personalized analysis.
                    </p>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setImageUploaded(true);
                          setSelectedImage(URL.createObjectURL(file));
                        }
                      }}
                    />
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-48 h-48 object-cover rounded-xl mb-6"
                      />
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                      <Button
                        size="lg"
                        className="rounded-full flex-1 gap-2"
                        onClick={startCamera}
                        variant={imageUploaded ? "secondary" : "default"}
                      >
                        <Camera className="w-5 h-5" />
                        Take Photo
                      </Button>
                      <Button
                        size="lg"
                        variant={imageUploaded ? "secondary" : "outline"}
                        className="rounded-full flex-1 gap-2 border-primary/20 hover:bg-primary/5"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-5 h-5" />
                        Upload Photo
                      </Button>
                    </div>

                    <AnimatePresence>
                      {imageUploaded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-12 w-full max-w-sm"
                        >
                          <Button
                            size="lg"
                            className="rounded-full w-full shadow-md bg-foreground hover:bg-foreground/90 text-background"
                            onClick={handleAnalyze}
                            data-testid="button-analyze"
                          >
                            Analyze My Skin
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {isAnalyzing && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="relative mb-8">
                      <div className="w-32 h-32 border-4 border-primary/20 rounded-full"></div>
                      <div className="w-32 h-32 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                      <ScanFace className="w-12 h-12 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">
                      Analyzing your skin...
                    </h3>
                    <p className="text-muted-foreground animate-pulse">
                      Evaluating texture, hydration, and tone
                    </p>
                  </motion.div>
                )}

                {isSuccess && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2 text-foreground">
                      Analysis Complete
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Your personalized skin profile is ready.
                    </p>

                    <Button
                      size="lg"
                      className="rounded-full px-8 shadow-md"
                      onClick={handleViewResults}
                      data-testid="button-view-results"
                    >
                      View Results & Recommendations
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Navigates to your custom dashboard
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

          {/* Tips Panel */}
          <div className="md:col-span-1">
            <Card className="border-none shadow-sm rounded-[32px] bg-secondary/30 p-8 h-full">
              <h3 className="font-serif text-xl font-medium mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" /> For Best Results
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Natural Lighting</p>
                    <p className="text-sm text-muted-foreground">
                      Face a window for even, soft daylight.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Fresh Face</p>
                    <p className="text-sm text-muted-foreground">
                      Remove makeup and glasses if possible.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                    <ScanFace className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Direct Angle</p>
                    <p className="text-sm text-muted-foreground">
                      Look straight into the camera with a neutral expression.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
