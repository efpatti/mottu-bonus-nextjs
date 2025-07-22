import React from "react";

interface BonusCalculationProps {
 type: VehicleType;
}

type VehicleType = "motorcycle" | "car";

const BonusCalculation: React.FC<BonusCalculationProps> = ({ type }) => {
 return (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
   <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo do Bônus</h2>
   <div className="bg-green-50 p-4 rounded-lg border border-green-100">
    <p className="text-green-800">
     {type === "motorcycle" ? (
      <>
       Você recebe <span className="font-bold">R$ 40</span> ao atingir a meta
       diária de 5 pontos. Cada adicional soma{" "}
       <span className="font-bold">R$ 15</span>.
      </>
     ) : (
      <>
       Você recebe <span className="font-bold">R$ 40</span> ao atingir a meta
       diária de 6 pontos. Cada adicional soma{" "}
       <span className="font-bold">R$ 15</span>.
      </>
     )}
    </p>
   </div>

   {/* Exemplo de Cálculo */}
   <div className="mt-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">
     Exemplo Prático
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
     {type === "motorcycle" ? (
      <>
       <p className="flex justify-between border-b border-gray-200 pb-2">
        <span>5 pontos (meta):</span>
        <span className="font-bold">R$ 40</span>
       </p>
       <p className="flex justify-between border-b border-gray-200 py-2">
        <span>+ 4 pontos extras:</span>
        <span className="font-bold">R$ 60</span>
       </p>
       <p className="flex justify-between pt-2 font-bold text-green-600">
        <span>Total (9 pontos):</span>
        <span>R$ 100</span>
       </p>
      </>
     ) : (
      <>
       <p className="flex justify-between border-b border-gray-200 pb-2">
        <span>6 pontos (meta):</span>
        <span className="font-bold">R$ 40</span>
       </p>
       <p className="flex justify-between border-b border-gray-200 py-2">
        <span>+ 4 pontos extras:</span>
        <span className="font-bold">R$ 60</span>
       </p>
       <p className="flex justify-between pt-2 font-bold text-green-600">
        <span>Total (10 pontos):</span>
        <span>R$ 100</span>
       </p>
      </>
     )}
    </div>
   </div>
  </div>
 );
};

export default BonusCalculation;
