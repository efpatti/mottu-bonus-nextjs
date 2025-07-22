"use client";

import Image from "next/image";
import { getAssetPath } from "@/utils/assets";
import { useLevelContext } from "@/providers/LevelProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    ? "bg-emerald-600/10 text-emerald-500 border-l-4 border-emerald-500"
    : "text-gray-400 hover:bg-gray-800/50"
  }`}
  onClick={onClick}
  whileHover={{ x: isDesktop ? 0 : 5 }}
  whileTap={{ scale: 0.98 }}
 >
  <span
   className={`flex items-center justify-center w-6 h-6 rounded-full ${
    isActive ? "bg-emerald-500 text-white" : "bg-gray-700 text-gray-400"
   }`}
  >
   {stepNumber}
  </span>
  <span className="font-medium">{label}</span>
 </motion.button>
);

export const Navbar = () => {
 const { currentLevel, setCurrentLevel } = useLevelContext();
 const [menuOpen, setMenuOpen] = useState(false);

 const steps = [
  { stepNumber: 1, label: "Introdução" },
  { stepNumber: 2, label: "Benefícios" },
  { stepNumber: 3, label: "Elegibilidade 1" },
  { stepNumber: 4, label: "Elegibilidade 2" },
  { stepNumber: 5, label: "Regras do Bônus" },
  { stepNumber: 6, label: "Fatores de Penalidade" },
 ];

 const handleStepClick = (index: number) => {
  setCurrentLevel(index);
  setMenuOpen(false);
 };

 const renderMobileProgressSteps = () => (
  <div className="space-y-1">
   {steps.map((step, index) => (
    <ProgressStep
     key={step.stepNumber}
     stepNumber={step.stepNumber}
     label={step.label}
     isActive={currentLevel === index}
     onClick={() => handleStepClick(index)}
    />
   ))}
  </div>
 );

 const renderDesktopProgressSteps = () => (
  <div className="flex items-center space-x-1">
   {steps.map((step, index) => (
    <ProgressStep
     key={step.stepNumber}
     stepNumber={step.stepNumber}
     label={step.label}
     isActive={currentLevel === index}
     onClick={() => handleStepClick(index)}
     isDesktop={true}
    />
   ))}
  </div>
 );

 return (
  <>
   <nav className="w-full sticky top-0 z-40 bg-zinc-900 backdrop-blur-md border-b border-zinc-800">
    <div className="mx-auto px-4">
     <div className="flex h-16 items-center justify-between">
      {/* Logo */}
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

      {/* Desktop Navigation */}
      <div className="hidden md:block">{renderDesktopProgressSteps()}</div>

      {/* Mobile menu button */}
      <button
       onClick={() => setMenuOpen(!menuOpen)}
       className="md:hidden p-2 text-gray-400 hover:text-white"
       aria-label="Menu"
      >
       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
        <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeWidth={2}
         d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
       </svg>
      </button>
     </div>
    </div>
   </nav>

   {/* Mobile Menu (Full Height) */}
   <AnimatePresence>
    {menuOpen && (
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
       <div className="w-full px-2 space-y-2">
        {renderMobileProgressSteps()}
       </div>
       <div className="mt-8 flex justify-center">
        <button
         onClick={() => setMenuOpen(false)}
         className="px-6 py-2 text-gray-400 hover:text-white border border-gray-700 rounded-lg"
        >
         Fechar
        </button>
       </div>
      </motion.div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 );
};
