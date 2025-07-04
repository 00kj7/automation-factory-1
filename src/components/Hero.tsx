
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, Zap } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-purple-red opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white opacity-5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-500 opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Rounded badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-in-up">
          <span className="text-base sm:text-lg font-medium">+70 premium systems</span>
          <ArrowUp className="text-white" size={16} />
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
          AI Automation
          <span className="block bg-gradient-to-r from-purple-300 to-red-300 bg-clip-text text-transparent">
            Systems
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
          Transform your business with cutting-edge AI automation solutions. 
          Streamline workflows, boost productivity, and scale your operations effortlessly.
        </p>
        
        <div className="flex justify-center mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full"
            onClick={scrollToProducts}
          >
            Explore Products
          </Button>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
            <Zap className="mx-auto mb-4 text-purple-300" size={32} />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-300 text-sm">Advanced artificial intelligence systems</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
            <Zap className="mx-auto mb-4 text-yellow-400" size={32} />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Fully Automated</h3>
            <p className="text-gray-300 text-sm">Set it up once, let it work for you</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
            <div className="mx-auto mb-4 w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Scale Your Business</h3>
            <p className="text-gray-300 text-sm">Grow faster with intelligent automation</p>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown 
            className="mx-auto cursor-pointer opacity-70 hover:opacity-100 transition-opacity" 
            size={32}
            onClick={scrollToProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
