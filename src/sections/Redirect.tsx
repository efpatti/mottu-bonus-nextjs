"use client";

import { FaMotorcycle, FaCar } from "react-icons/fa";
import { VehicleType } from "@/stores/levelStore";
import { NavigationButtons } from "@/components/NavigationButtons";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";

interface RedirectProps {
 onContinue?: () => void;
}

export function Redirect({ onContinue }: RedirectProps) {
 const { selectedVehicle, setSelectedVehicle } = useVehicleSelection();

 const handleSelect = (vehicle: VehicleType) => {
  setSelectedVehicle(vehicle);
  if (onContinue) onContinue();
 };

 return (
  <section className="flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gray-50">
   <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
     Qual o seu veículo?
    </h1>

    <p className="text-gray-600 mb-8">
     Selecione o tipo de veículo que você utiliza para ver as regras específicas
     do seu bônus.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     {/* Motorcycle Button */}
     <button
      onClick={() => handleSelect("motorcycle")}
      className={`
              cursor-pointer flex flex-col items-center justify-center p-6 rounded-lg font-semibold text-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500
              ${
               selectedVehicle === "motorcycle"
                ? "bg-green-600 text-white shadow-lg shadow-green-200 scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 shadow-sm"
              }
            `}
     >
      <FaMotorcycle className="text-4xl mb-3" />
      <span>Moto</span>
     </button>

     {/* Car Button */}
     <button
      onClick={() => handleSelect("car")}
      className={`
              cursor-pointer flex flex-col items-center justify-center p-6 rounded-lg font-semibold text-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500
              ${
               selectedVehicle === "car"
                ? "bg-green-600 text-white shadow-lg shadow-green-200 scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700 shadow-sm"
              }
            `}
     >
      <FaCar className="text-4xl mb-3" />
      <span>Carro</span>
     </button>
    </div>

    {selectedVehicle && (
     <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
      <p className="text-green-800 font-medium">
       Veículo selecionado:{" "}
       <span className="font-bold">
        {selectedVehicle === "motorcycle" ? "Moto" : "Carro"}
       </span>
      </p>
      <p className="text-green-600 text-sm mt-2">
       Agora você pode prosseguir para ver as regras específicas do seu bônus.
      </p>
     </div>
    )}
   </div>

   <NavigationButtons />
  </section>
 );
}
