
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground border border-transparent",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 py-2 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && "opacity-70 cursor-not-allowed",
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
