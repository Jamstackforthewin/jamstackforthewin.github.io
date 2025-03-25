
import { ArrowRight } from "lucide-react";
import Button from "./ui-components/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-jam-950" id="contact">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className="inline-block text-sm px-3 py-1 bg-primary/20 text-primary font-medium rounded-full mb-6">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to transform your <span className="text-primary">digital presence</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a template, custom development, or website migration,
            we're here to help you succeed in the modern web landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-black hover:bg-white/10">
              Explore templates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
