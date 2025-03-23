
import { ArrowRight } from "lucide-react";
import Button from "./ui-components/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span 
              ref={titleRef}
              className={`inline-block text-sm md:text-base px-4 py-2 bg-primary/10 text-primary font-medium rounded-full transition-all duration-700 ${
                titleVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
              }`}
            >
              High-performance JAMstack Websites
            </span>
            
            <h1 
              ref={subtitleRef}
              className={`text-balance transition-all duration-700 ${
                subtitleVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
              }`}
            >
              The modern way to build your{" "}
              <span className="bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
                web presence
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-jam-700 max-w-xl transition-all duration-700 delay-100 ${
                subtitleVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
              }`}
            >
              Premium JAMstack templates, custom development, and seamless deployment 
              services to help your business soar in the digital space.
            </p>
            
            <div 
              ref={ctaRef}
              className={`pt-4 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                ctaVisible ? 'opacity-100' : 'opacity-0 -translate-y-4'
              }`}
            >
              <Button size="lg" className="group">
                Explore Templates
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${
            ctaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Modern Jamstack Website"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-soft animate-float">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-accent1 flex items-center justify-center text-white text-xs">
                    JS
                  </div>
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    A
                  </div>
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                    M
                  </div>
                </div>
                <span className="font-medium text-jam-900">JAMstack</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-soft rotate-3 animate-float">
              <div className="text-sm font-medium text-green-600 flex items-center">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Fast & Secure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
