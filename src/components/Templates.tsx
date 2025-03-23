
import { ArrowRight } from "lucide-react";
import Button from "./ui-components/Button";
import TemplateCard from "./ui-components/TemplateCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const templates = [
  {
    title: "Agency Template",
    description: "Perfect for creative agencies and studios",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    price: "79",
    isPremium: true
  },
  {
    title: "E-commerce Starter",
    description: "Complete online store with shopping cart",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    price: "129",
    isPremium: true
  },
  {
    title: "Portfolio Basic",
    description: "Showcase your work with elegant simplicity",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "",
    isPremium: false
  },
  {
    title: "Landing Page",
    description: "Drive conversions with optimized design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "59",
    isPremium: true
  },
  {
    title: "Blog Starter",
    description: "Beautiful content-focused blog template",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    price: "",
    isPremium: false
  },
  {
    title: "SaaS Platform",
    description: "Complete solution for software products",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    price: "149",
    isPremium: true
  }
];

const Templates = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-gray-50" id="templates">
      <div className="container-custom">
        <div 
          ref={headingRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-6 md:mb-0">
            <span className="inline-block text-sm px-3 py-1 bg-primary/10 text-primary font-medium rounded-full mb-4">
              Pre-built Solutions
            </span>
            <h2 className="mb-4">JAMstack Templates</h2>
            <p className="text-jam-600 text-lg max-w-2xl">
              High-quality templates designed for performance and conversion.
              From simple landing pages to complex e-commerce solutions.
            </p>
          </div>
          <Button variant="outline" className="group self-start md:self-end">
            View all templates
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              title={template.title}
              description={template.description}
              image={template.image}
              price={template.price}
              isPremium={template.isPremium}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
