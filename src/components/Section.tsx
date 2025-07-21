"use client";

import { ReactNode } from "react";
import { useLevelContext } from "@/providers/LevelProvider";

interface SectionProps {
 level: number;
 children: ReactNode;
 className?: string;
}

export const Section = ({ level, children, className = "" }: SectionProps) => {
 const { currentLevel } = useLevelContext();

 const isVisible = currentLevel === level;

 // Debug log
 console.log(
  `Section ${level}: currentLevel=${currentLevel}, isVisible=${isVisible}`
 );

 if (!isVisible) {
  return null;
 }

 return <div className={`level w-full ${className}`}>{children}</div>;
};
