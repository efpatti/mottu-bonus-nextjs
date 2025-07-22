"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLevelContext } from "@/providers/LevelProvider";
import { scrollToTop } from "@/lib/scrollToTop";
import { useEffect, useState } from "react";

interface NavigationButtonsProps {
 className?: string;
 showOnlyNext?: boolean;
 showOnlyPrevious?: boolean;
 customNextLabel?: string;
 customPreviousLabel?: string;
}

export const NavigationButtons = ({
 className = "",
 showOnlyNext = false,
 showOnlyPrevious = false,
 customNextLabel = "Continuar",
 customPreviousLabel = "Voltar",
}: NavigationButtonsProps) => {
 const { nextLevel, previousLevel, canGoNext, canGoPrevious } =
  useLevelContext();
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
  setIsClient(true);
 }, []);

 if (!isClient) return null;

 return (
  <nav
   aria-label="Navegação de etapas"
   className={`flex justify-center items-center p-[20px] ${className}`}
  >
   <div className="flex gap-6 bg-transparent rounded-xl border border-gray-100">
    {!showOnlyNext && (
     <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 border border-gray-200"
      onClick={() => {
       previousLevel();
       scrollToTop();
      }}
      disabled={!canGoPrevious()}
     >
      <FaChevronLeft />
      <span>{customPreviousLabel}</span>
     </button>
    )}
    {!showOnlyPrevious && (
     <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 border border-green-600"
      onClick={() => {
       nextLevel();
       scrollToTop();
      }}
      disabled={!canGoNext()}
     >
      <span>{customNextLabel}</span>
      <FaChevronRight />
     </button>
    )}
   </div>
  </nav>
 );
};
