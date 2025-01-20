"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  size:"big"|"small"
}

export const SelfButton = ({ children, className, appName,size }: ButtonProps) => {
  return (
    <button 
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      {size}
    </button>
  );
};
