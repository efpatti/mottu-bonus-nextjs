import { FaInfoCircle, FaMotorcycle, FaCar } from "react-icons/fa";
import React, { useState } from "react";

const BonusCalculation: React.FC = () => {
 const [selectedVehicle, setSelectedVehicle] = useState<"motorcycle" | "car">(
  "motorcycle"
 );

 return (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
   <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
    Cálculo do Bônus
   </h2>

   {/* Vehicle Selection */}
   <div className="grid grid-cols-2 gap-4 mb-6">
    <button
     onClick={() => setSelectedVehicle("motorcycle")}
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
     onClick={() => setSelectedVehicle("car")}
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

   {/* Selected Vehicle Info */}
   <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-4 flex items-start">
    <FaInfoCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
    <div>
     <p className="text-green-800 font-medium">
      Veículo selecionado:{" "}
      <span className="font-bold">
       {selectedVehicle === "motorcycle" ? "Moto" : "Carro"}
      </span>
     </p>
     <p className="text-green-600 text-xs mt-1">
      {selectedVehicle === "motorcycle"
       ? "Moto: meta diária de 5 pontos. Cada ponto extra soma R$ 15."
       : "Carro: meta diária de 6 pontos. Cada ponto extra soma R$ 15."}
     </p>
    </div>
   </div>

   <h3 className="text-base font-semibold text-gray-800 mb-2">
    Exemplo Prático
   </h3>
   <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
    {selectedVehicle === "motorcycle" ? (
     <>
      <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
       <span>5 pontos (meta):</span>
       <span className="font-bold">R$ 40</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
       <span>+ 4 pontos extras:</span>
       <span className="font-bold">R$ 60</span>
      </div>
      <div className="flex justify-between pt-2 font-bold text-green-600 text-base">
       <span>Total (9 pontos):</span>
       <span>R$ 100</span>
      </div>
     </>
    ) : (
     <>
      <div className="flex justify-between border-b border-gray-200 pb-2 text-sm">
       <span>6 pontos (meta):</span>
       <span className="font-bold">R$ 40</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
       <span>+ 4 pontos extras:</span>
       <span className="font-bold">R$ 60</span>
      </div>
      <div className="flex justify-between pt-2 font-bold text-green-600 text-base">
       <span>Total (10 pontos):</span>
       <span>R$ 100</span>
      </div>
     </>
    )}
   </div>
  </div>
 );
};

export default BonusCalculation;
