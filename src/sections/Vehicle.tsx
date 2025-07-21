// Vehicle.tsx
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
 FaMotorcycle as MotorcycleIcon,
 FaCar as CarIcon,
} from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
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
   <Bonus />
   <div className="p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
    <div className="border-b border-gray-200 pb-4">
     <h2 className="text-lg sm:text-xl font-bold text-gray-900">
      Cálculo do Bônus
     </h2>
     <p className="text-sm sm:text-base text-gray-600 mt-2">
      {type === "motorcycle" ? (
       <>
        Você recebe <span className="font-bold text-green-600">R$ 40</span> ao
        atingir a meta diária de 5 atendimentos. Cada atendimento adicional soma{" "}
        <span className="font-bold text-green-600">R$ 15</span> ao seu bônus.
       </>
      ) : (
       <>
        Você recebe <span className="font-bold text-green-600">R$ 40</span> ao
        atingir a meta diária de 6 atendimentos. Cada atendimento adicional soma{" "}
        <span className="font-bold text-green-600">R$ 15</span> ao seu bônus.
       </>
      )}
     </p>
    </div>

    <div className="border-b border-gray-200 pb-4">
     <h3 className="text-base sm:text-lg font-semibold text-gray-900">
      Exemplo de Cálculo
     </h3>
     <div className="mt-2 bg-gray-50 p-4 rounded-lg text-sm sm:text-base">
      {type === "motorcycle" ? (
       <>
        <p>
         5 atendimentos (meta) → <span className="font-bold">R$ 40</span>
        </p>
        <p>
         + 4 atendimentos adicionais → <span className="font-bold">R$ 60</span>{" "}
         (4 × R$ 15)
        </p>
        <p className="font-bold text-green-600 border-t border-gray-200 pt-2 mt-2">
         Total para 9 atendimentos: R$ 100
        </p>
       </>
      ) : (
       <>
        <p>
         6 atendimentos (meta) → <span className="font-bold">R$ 40</span>
        </p>
        <p>
         + 4 atendimentos adicionais → <span className="font-bold">R$ 60</span>{" "}
         (4 × R$ 15)
        </p>
        <p className="font-bold text-green-600 border-t border-gray-200 pt-2 mt-2">
         Total para 10 atendimentos: R$ 100
        </p>
       </>
      )}
     </div>
    </div>

    <div className="border-b border-gray-200 pb-4">
     <h3 className="text-base sm:text-lg font-semibold text-gray-900">
      Casos Especiais
     </h3>
     <ul className="mt-2 space-y-2 list-disc pl-5 text-sm sm:text-base">
      {rules.specialCases.map((item, index) => (
       <li key={index} className="text-gray-700">
        {item}
       </li>
      ))}
     </ul>
    </div>

    <div>
     <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
      <FiAlertTriangle className="text-yellow-500" />
      Fatores que Modificam o Cálculo do Bônus
     </h3>
     <ul className="mt-2 space-y-2 list-disc pl-5 text-sm sm:text-base">
      {rules.penaltyFactors.map((item, index) => (
       <li key={index} className="text-gray-700">
        {item}
       </li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
};

export function Vehicle() {
 const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);

 return (
  <div className="flex flex-col w-full items-center py-6 px-4 sm:px-6 lg:px-8 min-h-screen">
   <div className="w-full max-w-2xl">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
     Regras do Bônus
    </h1>
    <p className="text-sm sm:text-base text-gray-600 mb-8 text-center">
     Entenda como seu bônus é calculado e quais fatores podem afetá-lo
    </p>
    <Tabs value={selectedVehicle} className="w-full">
     <TabsList className="grid w-full grid-cols-2 gap-2 bg-gray-100 rounded-lg p-1">
      <TabsTrigger
       value="motorcycle"
       className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer px-2 py-1 text-sm sm:text-base"
       onClick={() =>
        useVehicleSelection.getState().setSelectedVehicle("motorcycle")
       }
      >
       <MotorcycleIcon /> Moto
      </TabsTrigger>
      <TabsTrigger
       value="car"
       className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer px-2 py-1 text-sm sm:text-base"
       onClick={() => useVehicleSelection.getState().setSelectedVehicle("car")}
      >
       <CarIcon /> Carro
      </TabsTrigger>
     </TabsList>
     <TabsContent value="motorcycle" className="mt-6">
      <BonusRules type="motorcycle" />
     </TabsContent>
     <TabsContent value="car" className="mt-6">
      <BonusRules type="car" />
     </TabsContent>
    </Tabs>
   </div>
  </div>
 );
}

export default Vehicle;
