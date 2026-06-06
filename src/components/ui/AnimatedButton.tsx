"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  shape?: "oval" | "rounded";
}

export function AnimatedButton({
  children,
  className,
  href,
  variant = "primary",
  shape = "oval",
  ...props
}: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-3 font-bold transition-colors overflow-hidden group";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-md hover:shadow-xl transition-all duration-300",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
    outline: "border border-primary/50 text-primary hover:bg-primary/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/10 transition-colors"
  };
  
  const shapes = {
    oval: "rounded-full px-10 py-5 text-lg",
    rounded: "rounded-xl px-6 py-3 text-base",
  };

  const combinedClassName = cn(baseStyles, variants[variant], shapes[shape], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
    </motion.button>
  );
}
