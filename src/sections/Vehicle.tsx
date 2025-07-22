import React from "react";
import {
 FaMotorcycle as MotorcycleIcon,
 FaCar as CarIcon,
 FaInfoCircle,
} from "react-icons/fa";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";
import Bonus from "@/components/Bonus";

type VehicleType = "motorcycle" | "car";

interface BonusRulesProps {
 type: VehicleType;
}

const BonusRules: React.FC<BonusRulesProps> = ({ type }) => {
 const motorcycleRules = {
  baseBonus: "R$ 40 por atingir 5 atendimentos diários",
  additionalBonus: "R$ 15 para cada atendimento adicional além de 5",
  specialCases: [
   "Atendimentos de retirada evitados por pagamento do cliente contam em dobro",
   "Trocas resolvidas no local contam em dobro",
  ],
  penaltyFactors: [
   "Ultrapassar 90 km/h: perde o bônus diário",
   "Ultrapassar 120 km/h: perde metade do bônus mensal",
   "Faltas injustificadas: perde o bônus quinzenal",
   "Atrasos ou sair antes do horário: penalidade no bônus diário (melhor dia da quinzena)",
   "Perda de ferramenta: desconto no bônus se positivo",
  ],
 };

 const carRules = {
  baseBonus: "R$ 40 por atingir 6 atendimentos diários",
  additionalBonus: "R$ 15 para cada atendimento adicional além de 6",
  specialCases: [
   "Atendimentos de retirada evitados por pagamento do cliente contam em dobro",
  ],
  penaltyFactors: [
   "Ultrapassar limites de velocidade: penalidade no bônus",
   "Faltas injustificadas: perde o bônus quinzenal",
   "Atrasos ou sair antes do horário: penalidade no bônus diário",
   "Perda de ferramenta: desconto no bônus se positivo",
  ],
 };

 const rules = type === "motorcycle" ? motorcycleRules : carRules;

 return (
  <div className="space-y-6">
   <Bonus vehicleType={type} />

   {/* Seção de Cálculo do Bônus */}
   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo do Bônus</h2>
    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
     <p className="text-green-800">
      {type === "motorcycle" ? (
       <>
        Você recebe <span className="font-bold">R$ 40</span> ao atingir a meta
        diária de 5 serviços. Cada adicional soma{" "}
        <span className="font-bold">R$ 15</span>.
       </>
      ) : (
       <>
        Você recebe <span className="font-bold">R$ 40</span> ao atingir a meta
        diária de 6 serviços. Cada adicional soma{" "}
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
         <span>5 serviços (meta):</span>
         <span className="font-bold">R$ 40</span>
        </p>
        <p className="flex justify-between border-b border-gray-200 py-2">
         <span>+ 4 serviços extras:</span>
         <span className="font-bold">R$ 60</span>
        </p>
        <p className="flex justify-between pt-2 font-bold text-green-600">
         <span>Total (9 serviços):</span>
         <span>R$ 100</span>
        </p>
       </>
      ) : (
       <>
        <p className="flex justify-between border-b border-gray-200 pb-2">
         <span>6 serviços (meta):</span>
         <span className="font-bold">R$ 40</span>
        </p>
        <p className="flex justify-between border-b border-gray-200 py-2">
         <span>+ 4 serviços extras:</span>
         <span className="font-bold">R$ 60</span>
        </p>
        <p className="flex justify-between pt-2 font-bold text-green-600">
         <span>Total (10 serviços):</span>
         <span>R$ 100</span>
        </p>
       </>
      )}
     </div>
    </div>
   </div>

   {/* Casos Especiais */}
   {type === "car" && (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
     <h2 className="text-xl font-bold text-gray-800 mb-4">Casos Especiais</h2>
     <ul className="space-y-3">
      {rules.specialCases.map((item, index) => (
       <li key={index} className="flex items-start">
        <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
         <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M5 13l4 4L19 7"
          />
         </svg>
        </span>
        <span className="text-gray-700">{item}</span>
       </li>
      ))}
     </ul>
    </div>
   )}
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
  </div>
 );
}

export default Vehicle;
