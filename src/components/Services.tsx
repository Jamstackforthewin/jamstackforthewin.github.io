
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "./ui-components/Button";
import Card from "./ui-components/Card";

const serviceCategories = [
  {
    title: "JAMstack Development",
    description: "Custom JAMstack website development services tailored to your business needs.",
    services: [
      "Static Site Generation",
      "Dynamic Functionality Integration",
      "API Development & Integration",
      "Content Management Setup",
      "Custom Component Development",
      "Performance Optimization",
    ],
    buttonText: "Learn more",
  },
  {
    title: "Website Migration",
    description: "Convert your existing website to the JAMstack architecture for improved performance.",
    services: [
      "Legacy Site Assessment",
      "Architecture Planning",
      "Content Migration",
      "Design Implementation",
      "Performance Testing",
      "SEO Preservation",
    ],
    buttonText: "Migration process",
  },
  {
    title: "Optimization Services",
    description: "Enhance your online presence with our specialized optimization services.",
    services: [
      "Search Engine Optimization",
      "Performance Audits",
      "Accessibility Improvements",
      "Analytics Integration",
      "Conversion Rate Optimization",
      "Technical SEO",
    ],
    buttonText: "Explore services",
  },
];

const Services = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <div 
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-sm px-3 py-1 bg-primary/10 text-primary font-medium rounded-full mb-4">
            Expert Solutions
          </span>
          <h2 className="mb-4">Professional Services</h2>
          <p className="text-jam-600 text-lg">
            From custom development to migration and optimization,
            we provide end-to-end services to ensure your digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in-stagger">
          {serviceCategories.map((category, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
            
            return (
              <Card 
                key={index}
                ref={ref}
                className={`flex flex-col transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-jam-600 mb-6">{category.description}</p>
                <ul className="space-y-3 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-3"></span>
                      <span className="text-jam-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-auto self-start">
                  {category.buttonText}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
