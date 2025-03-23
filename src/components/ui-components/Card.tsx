
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-white shadow-soft",
      glass: "glass-card",
      outline: "border border-border bg-background",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-6 transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;
