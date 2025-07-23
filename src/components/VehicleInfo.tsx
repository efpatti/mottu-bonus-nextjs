import React, { ReactNode } from "react";
import { FaInfoCircle, FaMotorcycle, FaCar } from "react-icons/fa";

interface VehicleInfoProps {
 selectedVehicle: "motorcycle" | "car" | null;
 onSelectVehicle?: (type: "motorcycle" | "car") => void;
 showSelector?: boolean;
 children?: ReactNode;
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({
 selectedVehicle,
 onSelectVehicle,
 showSelector = false,
 children,
}) => {
 return (
  <>
   {showSelector && onSelectVehicle && (
    <div className="grid grid-cols-2 gap-4 mb-4">
     <button
      onClick={() => onSelectVehicle("motorcycle")}
      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 border-2 text-sm font-medium ${
       selectedVehicle === "motorcycle"
        ? "bg-green-600 text-white border-green-600 shadow-lg"
        : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
      }`}
     >
      <FaMotorcycle className="text-2xl mb-1" />
      Moto
     </button>
     <button
      onClick={() => onSelectVehicle("car")}
      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 border-2 text-sm font-medium ${
       selectedVehicle === "car"
        ? "bg-green-600 text-white border-green-600 shadow-lg"
        : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
      }`}
     >
      <FaCar className="text-2xl mb-1" />
      Carro
     </button>
    </div>
   )}
   {selectedVehicle && (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4 flex items-start">
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
   {children}
  </>
 );
};

export default VehicleInfo;
