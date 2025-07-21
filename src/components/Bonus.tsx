// Bonus.tsx
"use client";

import React, { useState } from "react";
import {
 FiInfo,
 FiDollarSign,
 FiCalendar,
 FiCheckCircle,
 FiXCircle,
 FiChevronDown,
 FiChevronUp,
} from "react-icons/fi";
import { FaMotorcycle, FaCar } from "react-icons/fa";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";

type TableRow = {
 dias: string;
 recolhido: number;
 pago: number;
 insucesso: string;
};

type BonusRow = {
 tipo: string;
 valor: string;
};

const Bonus: React.FC = () => {
 const [activeTab, setActiveTab] = useState<"main" | "bonus">("main");
 const [showInfo, setShowInfo] = useState(false);
 const [expandedRows, setExpandedRows] = useState<number[]>([]);
 const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);

 const toggleRow = (index: number) => {
  if (expandedRows.includes(index)) {
   setExpandedRows(expandedRows.filter((i) => i !== index));
  } else {
   setExpandedRows([...expandedRows, index]);
  }
 };

 const getMainTableData = (): TableRow[] => {
  if (selectedVehicle === "motorcycle") {
   return [
    { dias: "1 a 7", recolhido: 1, pago: 2, insucesso: "1/2 até 5 serviços" },
    { dias: "8 a 15", recolhido: 3, pago: 4, insucesso: "1/2 até 5 serviços" },
    { dias: "15 a 30", recolhido: 4, pago: 5, insucesso: "1/2 até 5 serviços" },
   ];
  }
  return [
   { dias: "1 a 7", recolhido: 1, pago: 2, insucesso: "1/2 até 6 serviços" },
   { dias: "8 a 15", recolhido: 3, pago: 4, insucesso: "1/2 até 6 serviços" },
   { dias: "15 a 30", recolhido: 4, pago: 5, insucesso: "1/2 até 6 serviços" },
  ];
 };

 const bonusTableData: BonusRow[] = [
  {
   tipo: selectedVehicle === "motorcycle" ? "5 serviços" : "6 serviços",
   valor: "R$ 40,00",
  },
  { tipo: "serviço extra", valor: "R$ 15,00" },
 ];

 return (
  <div className="max-w-full sm:max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-sm sm:shadow-md border border-gray-100">
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    <div className="flex items-center gap-4">
     <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 flex items-center">
      <FiDollarSign className="mr-2 text-green-600" />
      Tabela de Bônus
     </h2>
     <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
      {selectedVehicle === "motorcycle" ? (
       <>
        <FaMotorcycle className="text-green-600" />
        <span className="font-medium">Moto</span>
       </>
      ) : (
       <>
        <FaCar className="text-green-600" />
        <span className="font-medium">Carro</span>
       </>
      )}
     </div>
    </div>
    <button
     onClick={() => setShowInfo(!showInfo)}
     className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
     aria-label="Informações"
    >
     <FiInfo size={20} />
    </button>
   </div>

   {showInfo && (
    <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm flex items-start">
     <FiInfo className="mr-2 mt-0.5 flex-shrink-0" />
     <p>
      Esta tabela mostra os critérios para bonificação baseados na quantidade de
      dias e serviços realizados. O bônus é calculado conforme as regras
      especificadas para {selectedVehicle === "motorcycle" ? "moto" : "carro"}.
     </p>
    </div>
   )}

   <div className="mb-6 flex border-b border-gray-200 overflow-x-auto">
    <button
     onClick={() => setActiveTab("main")}
     className={`whitespace-nowrap px-4 py-2 font-medium flex items-center transition-colors text-sm sm:text-base ${
      activeTab === "main"
       ? "text-green-600 border-b-2 border-green-600"
       : "text-gray-500 hover:text-gray-700"
     }`}
    >
     <FiCalendar className="mr-2" />
     Critérios
    </button>
    <button
     onClick={() => setActiveTab("bonus")}
     className={`whitespace-nowrap px-4 py-2 font-medium flex items-center transition-colors text-sm sm:text-base ${
      activeTab === "bonus"
       ? "text-green-600 border-b-2 border-green-600"
       : "text-gray-500 hover:text-gray-700"
     }`}
    >
     <FiDollarSign className="mr-2" />
     Valores
    </button>
   </div>

   {activeTab === "main" ? (
    <>
     {/* Desktop Table */}
     <div className="hidden sm:block overflow-x-auto">
      <table className="w-full text-sm sm:text-base">
       <thead>
        <tr className="bg-green-50 text-green-800">
         <th className="px-4 py-3 text-left font-semibold">Período (dias)</th>
         <th className="px-4 py-3 text-left font-semibold">
          Serviço Recolhido
         </th>
         <th className="px-4 py-3 text-left font-semibold">Serviço Pago</th>
         <th className="px-4 py-3 text-left font-semibold">Insucesso</th>
        </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
        {getMainTableData().map((row, index) => (
         <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3 whitespace-nowrap">{row.dias}</td>
          <td className="px-4 py-3 whitespace-nowrap">
           <div className="flex items-center gap-1">
            <FiCheckCircle className="text-green-500" /> {row.recolhido}
           </div>
          </td>
          <td className="px-4 py-3 whitespace-nowrap">
           <div className="flex items-center gap-1">
            <FiCheckCircle className="text-green-500" /> {row.pago}
           </div>
          </td>
          <td className="px-4 py-3 whitespace-nowrap">
           <div className="flex items-center gap-1">
            <FiXCircle className="text-red-500" /> {row.insucesso}
           </div>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     {/* Mobile Cards */}
     <div className="sm:hidden space-y-3">
      {getMainTableData().map((row, index) => (
       <div
        key={index}
        className="border border-gray-200 rounded-lg overflow-hidden"
       >
        <div
         className="p-3 bg-green-50 flex justify-between items-center cursor-pointer"
         onClick={() => toggleRow(index)}
        >
         <div className="font-medium text-green-800">Período: {row.dias}</div>
         {expandedRows.includes(index) ? (
          <FiChevronUp className="text-gray-500" />
         ) : (
          <FiChevronDown className="text-gray-500" />
         )}
        </div>
        {expandedRows.includes(index) && (
         <div className="p-3 bg-white divide-y divide-gray-100">
          <div className="py-2 flex items-center gap-2">
           <FiCheckCircle className="text-green-500 flex-shrink-0" />
           <div>
            <div className="font-medium">Serviço Recolhido</div>
            <div>{row.recolhido}</div>
           </div>
          </div>
          <div className="py-2 flex items-center gap-2">
           <FiCheckCircle className="text-green-500 flex-shrink-0" />
           <div>
            <div className="font-medium">Serviço Pago</div>
            <div>{row.pago}</div>
           </div>
          </div>
          <div className="py-2 flex items-center gap-2">
           <FiXCircle className="text-red-500 flex-shrink-0" />
           <div>
            <div className="font-medium">Insucesso</div>
            <div>{row.insucesso}</div>
           </div>
          </div>
         </div>
        )}
       </div>
      ))}
     </div>
    </>
   ) : (
    <>
     {/* Desktop Table */}
     <div className="hidden sm:block overflow-x-auto">
      <table className="w-full text-sm sm:text-base">
       <thead>
        <tr className="bg-green-50 text-green-800">
         <th className="px-4 py-3 text-left font-semibold">Tipo</th>
         <th className="px-4 py-3 text-left font-semibold">Valor Bônus</th>
        </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
        {bonusTableData.map((row, index) => (
         <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3 capitalize">{row.tipo}</td>
          <td className="px-4 py-3 font-medium text-green-600">{row.valor}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     {/* Mobile Cards */}
     <div className="sm:hidden space-y-3">
      {bonusTableData.map((row, index) => (
       <div
        key={index}
        className="border border-gray-200 rounded-lg overflow-hidden"
       >
        <div
         className="p-3 bg-green-50 flex justify-between items-center cursor-pointer"
         onClick={() => toggleRow(index + 10)} // Offset to avoid conflict with main table rows
        >
         <div className="font-medium text-green-800">{row.tipo}</div>
         {expandedRows.includes(index + 10) ? (
          <FiChevronUp className="text-gray-500" />
         ) : (
          <FiChevronDown className="text-gray-500" />
         )}
        </div>
        {expandedRows.includes(index + 10) && (
         <div className="p-3 bg-white">
          <div className="py-1">
           <div className="font-medium text-gray-500">Valor Bônus</div>
           <div className="font-medium text-green-600">{row.valor}</div>
          </div>
         </div>
        )}
       </div>
      ))}
     </div>
    </>
   )}

   <div className="mt-6 p-4 sm:p-6 bg-gray-50 rounded-lg text-sm sm:text-base">
    <h3 className="font-medium text-gray-800 mb-2">Observações importantes:</h3>
    <ul className="text-gray-600 space-y-1 list-disc pl-5">
     <li>Atendimentos de retirada evitados por pagamento contam em dobro</li>
     <li>Trocas resolvidas no local contam em dobro (apenas para motos)</li>
     <li>Ultrapassar 90 km/h resulta em perda do bônus diário</li>
    </ul>
   </div>
  </div>
 );
};

export default Bonus;
