
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          AI Automation
          <span className="block bg-gradient-to-r from-purple-300 to-red-300 bg-clip-text text-transparent">
            Systems
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transform your business with cutting-edge AI automation solutions. 
          Streamline workflows, boost productivity, and scale your operations effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={scrollToProducts}
          >
            Explore Products
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4"
          >
            Get Started
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
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
