"use client";

import Image from "next/image";
import { getAssetPath } from "@/utils/assets";
import { useLevelContext } from "@/providers/LevelProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Steps } from "@/data/steps";

// Step-related components and types
interface ProgressStepProps {
 stepNumber: number;
 label: string;
 isActive: boolean;
 onClick: () => void;
 isDesktop?: boolean;
}

const ProgressStep = ({
 stepNumber,
 label,
 isActive,
 onClick,
 isDesktop = false,
}: ProgressStepProps) => (
 <motion.button
  className={`flex items-center gap-2 p-3 rounded-lg ${
   isDesktop ? "px-4" : "w-full text-left"
  } transition-colors ${
   isActive
    ? "bg-green-600/10 text-green-500 border-l-4 border-green-500"
    : "text-gray-400 hover:bg-gray-800/50"
  }`}
  onClick={onClick}
  whileHover={{ x: isDesktop ? 0 : 5 }}
  whileTap={{ scale: 0.98 }}
 >
  <span
   className={`flex items-center justify-center w-6 h-6 rounded-full ${
    isActive ? "bg-green-500 text-white" : "bg-gray-700 text-gray-400"
   }`}
  >
   {stepNumber}
  </span>
  <span className="font-medium">{label}</span>
 </motion.button>
);

interface ProgressStepsProps {
 steps: Array<{ stepNumber: number; label: string }>;
 currentLevel: number;
 onStepClick: (index: number) => void;
 isDesktop?: boolean;
}

const ProgressSteps = ({
 steps,
 currentLevel,
 onStepClick,
 isDesktop = false,
}: ProgressStepsProps) => {
 const containerClasses = isDesktop
  ? "flex items-center space-x-1"
  : "space-y-1";

 return (
  <div className={containerClasses}>
   {steps.map((step: { stepNumber: number; label: string }, index: number) => (
    <ProgressStep
     key={step.stepNumber}
     stepNumber={step.stepNumber}
     label={step.label}
     isActive={currentLevel === index}
     onClick={() => onStepClick(index)}
     isDesktop={isDesktop}
    />
   ))}
  </div>
 );
};

// Mobile Menu component
interface MobileMenuProps {
 isOpen: boolean;
 onClose: () => void;
 children: React.ReactNode;
}

const MobileMenu = ({ isOpen, onClose, children }: MobileMenuProps) => (
 <AnimatePresence>
  {isOpen && (
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-30 bg-zinc-900/90 backdrop-blur-sm pt-16"
   >
    <motion.div
     initial={{ y: -20 }}
     animate={{ y: 0 }}
     exit={{ y: -20 }}
     className="container mx-auto p-6 overflow-y-auto h-full"
    >
     {children}
     <div className="mt-8 flex justify-center">
      <button
       onClick={onClose}
       className="px-6 py-2 text-gray-400 hover:text-white border border-gray-700 rounded-lg"
      >
       Fechar
      </button>
     </div>
    </motion.div>
   </motion.div>
  )}
 </AnimatePresence>
);

// Hamburger Menu Button component
interface MenuButtonProps {
 onClick: () => void;
 isOpen: boolean;
}

const MenuButton = ({ onClick, isOpen }: MenuButtonProps) => (
 <button
  onClick={onClick}
  className="md:hidden p-2 text-gray-400 hover:text-white"
  aria-label="Menu"
 >
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
   <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth={2}
    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
   />
  </svg>
 </button>
);

// Logo component
const Logo = () => (
 <div className="flex items-center">
  <Image
   src={getAssetPath("mottu_logo.png")}
   alt="Mottu Logo"
   width={120}
   height={32}
   className="h-8 w-auto"
   priority
  />
 </div>
);

// Main Navbar component
export const Navbar = () => {
 const { currentLevel, setCurrentLevel } = useLevelContext();
 const [menuOpen, setMenuOpen] = useState(false);

 // Use imported Steps from '@/data/steps'
 const steps = Steps;

 const handleStepClick = (index: number) => {
  setCurrentLevel(index);
  setMenuOpen(false);
 };

 return (
  <>
   <nav className="w-full sticky top-0 z-40 bg-zinc-900 backdrop-blur-md border-b border-zinc-800">
    <div className="mx-auto px-4">
     <div className="flex h-16 items-center justify-between">
      <Logo />

      <div className="hidden md:block">
       <ProgressSteps
        steps={steps}
        currentLevel={currentLevel}
        onStepClick={handleStepClick}
        isDesktop
       />
      </div>

      <MenuButton onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
     </div>
    </div>
   </nav>

   <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
    <div className="w-full px-2 space-y-2">
     <ProgressSteps
      steps={steps}
      currentLevel={currentLevel}
      onStepClick={handleStepClick}
     />
    </div>
   </MobileMenu>
  </>
 );
};
