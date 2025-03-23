
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Card from "./ui-components/Card";
import { Code, Globe, Layout, Server, SearchCheck, FileCode } from "lucide-react";

const features = [
  {
    title: "Blazing Fast Performance",
    description: "Static sites delivered via CDN ensure lightning-fast load times and exceptional user experience.",
    icon: <Server className="h-10 w-10 text-primary" />
  },
  {
    title: "Superior SEO",
    description: "Pre-rendered content improves search engine rankings and visibility for your business.",
    icon: <SearchCheck className="h-10 w-10 text-primary" />
  },
  {
    title: "High Security",
    description: "Minimal server-side processes means fewer vulnerabilities and reduced attack surfaces.",
    icon: <FileCode className="h-10 w-10 text-primary" />
  },
  {
    title: "Scalability",
    description: "Easily handle traffic spikes without performance degradation or increased costs.",
    icon: <Globe className="h-10 w-10 text-primary" />
  },
  {
    title: "Developer Experience",
    description: "Modern tooling and frameworks that developers love to work with.",
    icon: <Code className="h-10 w-10 text-primary" />
  },
  {
    title: "Responsive Design",
    description: "Beautiful designs that work flawlessly across all devices and screen sizes.",
    icon: <Layout className="h-10 w-10 text-primary" />
  }
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-custom">
        <div 
          ref={ref} 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="mb-4">Why Choose JAMstack</h2>
          <p className="text-jam-600 text-lg">
            The JAMstack architecture delivers better performance, higher security, 
            lower cost of scaling, and a better developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-stagger">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="flex flex-col items-start hover-lift"
            >
              <div className="p-3 bg-primary/5 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-jam-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
