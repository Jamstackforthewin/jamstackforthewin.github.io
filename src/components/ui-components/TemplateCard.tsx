
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import Button from "./Button";

interface TemplateCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
  price?: string;
  isPremium?: boolean;
}

const TemplateCard = forwardRef<HTMLDivElement, TemplateCardProps>(
  ({ className, title, description, image, price, isPremium = false, ...props }, ref) => {
    const { ref: animationRef, isVisible } = useScrollAnimation();

    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          animationRef.current = node;
        }}
        className={cn(
          "rounded-lg overflow-hidden transition-all duration-500 group hover-lift",
          isVisible ? "opacity-100" : "opacity-0 translate-y-8",
          className
        )}
        {...props}
      >
        <div className="relative overflow-hidden h-48 md:h-56">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            loading="lazy"
          />
          {isPremium && (
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
              Premium
            </div>
          )}
        </div>
        <div className="p-5 bg-white border-t-0 border border-border">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-jam-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">
              {price ? `$${price}` : "Free"}
            </span>
            <Button size="sm" variant={isPremium ? "primary" : "outline"}>
              {isPremium ? "Purchase" : "Download"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

TemplateCard.displayName = "TemplateCard";

export default TemplateCard;
