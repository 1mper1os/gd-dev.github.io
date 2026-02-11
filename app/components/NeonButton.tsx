"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "blue" | "pink" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function NeonButton({ 
  children, 
  variant = "blue", 
  size = "md",
  className,
  onClick,
  href 
}: NeonButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden group";
  
  const variants = {
    blue: "bg-transparent border-2 border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black",
    pink: "bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black",
    gradient: "bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] text-white border-0 hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const glowVariants = {
    blue: "group-hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]",
    pink: "group-hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]",
    gradient: "shadow-[0_0_20px_rgba(0,212,255,0.3),0_0_40px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5),0_0_60px_rgba(255,0,255,0.5)]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        glowVariants[variant],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant !== "gradient" && (
        <motion.div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            variant === "blue" && "bg-[#00d4ff]",
            variant === "pink" && "bg-[#ff00ff]"
          )}
          initial={false}
        />
      )}
    </Component>
  );
}
