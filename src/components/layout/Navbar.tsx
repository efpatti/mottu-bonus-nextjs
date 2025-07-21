"use client";

import Image from "next/image";
import { getAssetPath } from "@/utils/assets";
import { useLevelContext } from "@/providers/LevelProvider";

interface ProgressStepProps {
 step: number;
 isActive: boolean;
 onClick: () => void;
 showConnector?: boolean;
}

const ProgressStep = ({
 step,
 isActive,
 onClick,
 showConnector = true,
}: ProgressStepProps) => (
 <span className="flex items-center z-20 m-1">
  <button
   className={`cursor-pointer progress-step flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 rounded-full transition-all duration-300 text-md sm:text-sm hover:bg-gray-300 ${
    isActive ? "bg-green-600 text-white scale-110" : "bg-gray-200 text-gray-700"
   }`}
   onClick={onClick}
   aria-label={`Go to step ${step}`}
  >
   {step}
  </button>
  {showConnector && <div className="h-px w-4 sm:w-6 bg-gray-300" />}
 </span>
);

export const Navbar = () => {
 const { currentLevel, setCurrentLevel } = useLevelContext();

 // Debug log
 console.log(`Navbar: currentLevel=${currentLevel}`);

 const steps = [1, 2, 3, 4];

 const handleStepClick = (index: number) => {
  console.log(`Clicking step ${index + 1}, setting level to ${index}`);
  setCurrentLevel(index);
 };

 const renderProgressSteps = () => (
  <div
   className="flex items-center justify-center gap-2 sm:gap-4 mb-0 px-2 sm:px-4 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 overflow-hidden"
   style={{ minWidth: 0 }}
  >
   {steps.map((step, index) => (
    <ProgressStep
     key={step}
     step={step}
     isActive={currentLevel === index}
     onClick={() => handleStepClick(index)}
     showConnector={index < steps.length - 1}
    />
   ))}
  </div>
 );

 return (
  <nav className="bg-zinc-900 w-full">
   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between w-full">
     {/* Logo à esquerda */}
     <div className="flex items-center flex-shrink-0">
      <Image
       src={getAssetPath("mottu_logo.png")}
       alt="Mottu Logo"
       width={120}
       height={32}
       className="h-8 w-auto"
       priority
      />
     </div>{" "}
     {/* Desktop progress steps */}
     <div className="hidden sm:flex flex-1 justify-end items-center">
      {renderProgressSteps()}
     </div>
     {/* Mobile progress steps */}
     <div className="flex sm:hidden flex-1 justify-center items-center">
      {renderProgressSteps()}
     </div>
    </div>
   </div>
  </nav>
 );
};
