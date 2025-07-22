import React from "react";
import {
 FaMotorcycle as MotorcycleIcon,
 FaCar as CarIcon,
 FaInfoCircle,
} from "react-icons/fa";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";
import Bonus from "@/components/Bonus";
import { NavigationButtons } from "@/components/NavigationButtons";

type VehicleType = "motorcycle" | "car";

interface BonusRulesProps {
 type: VehicleType;
}

const BonusRules: React.FC<BonusRulesProps> = ({ type }) => {
 return (
  <div className="space-y-6">
   <Bonus vehicleType={type === "motorcycle" ? "moto" : "car"} />
  </div>
 );
};

export function Vehicle() {
 const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);
 const setSelectedVehicle = useVehicleSelection((s) => s.setSelectedVehicle);

 return (
  <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
   <div className="w-full max-w-2xl">
    {/* Header */}
    <div className="text-center mb-8">
     <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
      Regras do Bônus por Veículo
     </h1>
     <p className="text-gray-600">
      Selecione seu tipo de veículo para ver as regras específicas
     </p>
    </div>

    {/* Vehicle Selection */}
    <div className="grid grid-cols-2 gap-4 mb-8">
     <button
      onClick={() => setSelectedVehicle("motorcycle")}
      className={`
              flex flex-col items-center justify-center p-6 rounded-xl
              transition-all duration-200 border-2
              ${
               selectedVehicle === "motorcycle"
                ? "bg-green-600 text-white border-green-600 shadow-lg"
                : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }
            `}
     >
      <MotorcycleIcon className="text-3xl mb-2" />
      <span className="font-medium">Moto</span>
     </button>

     <button
      onClick={() => setSelectedVehicle("car")}
      className={`
              flex flex-col items-center justify-center p-6 rounded-xl
              transition-all duration-200 border-2
              ${
               selectedVehicle === "car"
                ? "bg-green-600 text-white border-green-600 shadow-lg"
                : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }
            `}
     >
      <CarIcon className="text-3xl mb-2" />
      <span className="font-medium">Carro</span>
     </button>
    </div>

    {/* Selected Vehicle Info */}
    {selectedVehicle && (
     <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-8 flex items-start">
      <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
      <div>
       <p className="text-green-800 font-medium">
        Veículo selecionado:{" "}
        <span className="font-bold">
         {selectedVehicle === "motorcycle" ? "Moto" : "Carro"}
        </span>
       </p>
       <p className="text-green-600 text-sm mt-1">
        Veja abaixo as regras específicas para seu veículo
       </p>
      </div>
     </div>
    )}

    {/* Rules Content */}
    {selectedVehicle === "motorcycle" && <BonusRules type="motorcycle" />}
    {selectedVehicle === "car" && <BonusRules type="car" />}
   </div>
   <NavigationButtons />
  </div>
 );
}

export default Vehicle;
