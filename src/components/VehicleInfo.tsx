import React from "react";
import { FaInfoCircle } from "react-icons/fa";

interface VehicleInfoProps {
 selectedVehicle: "motorcycle" | "car" | null;
}

export const VehicleInfo: React.FC<VehicleInfoProps> = ({
 selectedVehicle,
}) => {
 if (!selectedVehicle) return null;
 return (
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
 );
};

export default VehicleInfo;
