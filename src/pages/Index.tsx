import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[hsl(220,100%,66%)] to-[hsl(262,83%,58%)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center relative z-10 px-4">
        <h1 className="mb-6 text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          CampusDock
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
          One Dock, Every Student's Need
        </p>
        <Button 
          onClick={() => navigate("/login")}
          size="lg"
          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-sm transition-all text-lg px-8 py-6 rounded-full"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
