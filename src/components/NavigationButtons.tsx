"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLevelContext } from "@/providers/LevelProvider";

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

 return (
  <nav
   aria-label="Navegação de etapas"
   className={`flex justify-center items-center p-[20px] ${className}`}
  >
   <div className="flex gap-6 bg-transparent rounded-xl border border-gray-100">
    {!showOnlyNext && (
     <button
      type="button"
      className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-black bg-white border border-black hover:bg-green-50 hover:text-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={previousLevel}
      disabled={!canGoPrevious()}
      aria-label="Voltar para etapa anterior"
     >
      <FaChevronLeft className="text-green-600" />
      {customPreviousLabel}
     </button>
    )}

    {!showOnlyPrevious && (
     <button
      type="button"
      className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={nextLevel}
      disabled={!canGoNext()}
      aria-label="Avançar para próxima etapa"
     >
      {customNextLabel}
      <FaChevronRight className="text-white" />
     </button>
    )}
   </div>
  </nav>
 );
};
