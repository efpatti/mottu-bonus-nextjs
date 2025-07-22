"use client";
import { FaUsers, FaClock, FaSearch } from "react-icons/fa";
import { useState, useMemo } from "react";
import { filiais, filiaisProps } from "@/data/filiais";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export const Eligibility1 = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedUnit, setSelectedUnit] = useState<filiaisProps | null>(null);

 const filteredFiliais = useMemo(() => {
  if (!searchTerm) return [];
  return filiais.filter((filial) =>
   filial.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );
 }, [searchTerm]);

 const handleSelectUnit = (filial: filiaisProps) => {
  setSelectedUnit(filial);
  setSearchTerm(filial.unit);
 };

 return (
  <div className="w-full bg-white">
   {/* Hero Section */}
   <section className="w-full bg-green-600 py-10 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
      O sucesso coletivo libera seu bônus
     </h1>
     <p className="text-green-100 text-base sm:text-lg">
      Sua filial precisa cumprir 2 etapas para ativar o bônus individual
     </p>

     {/* Progress steps */}
     <div className="flex justify-center mt-8 gap-1 sm:gap-4">
      {["Elegibilidade", "Metas"].map((step, index) => (
       <div key={index} className="flex flex-col items-center">
        <div
         className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                            ${index === 0 ? "bg-green-700" : "bg-green-500"}`}
        >
         <span className="text-white font-medium">{index + 1}</span>
        </div>
        <span className="text-white text-xs sm:text-sm">{step}</span>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Seção 1 - Elegibilidade */}
   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
    <div className="mb-10">
     <div className="flex items-center mb-4">
      <div className="bg-green-100 p-2 rounded-full mr-3">
       <FaUsers className="text-green-600 text-lg" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">
       Passo 1: Verifique se a sua filial é elegível
      </h2>
     </div>

     <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
      <div className="flex">
       <FaClock className="text-green-600 mt-0.5 mr-3 flex-shrink-0" />
       <h3 className="font-semibold text-gray-800 mb-2">Estrutura da Equipe</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">
       Operar com pelo menos 4 prestadores. Se tiver dúvidas, consulte o seu
       líder.
      </p>

      {/* Buscador de Filiais */}
      <div className="relative mb-4">
       <div className="relative">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
         type="text"
         placeholder="Digite o nome da sua filial..."
         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
         value={searchTerm}
         onChange={(e) => {
          setSearchTerm(e.target.value);
          setSelectedUnit(null);
         }}
        />
       </div>

       {/* Dropdown de resultados */}
       {searchTerm && !selectedUnit && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
         {filteredFiliais.length > 0 ? (
          filteredFiliais.map((filial) => (
           <div
            key={filial.unit}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelectUnit(filial)}
           >
            {filial.unit}
           </div>
          ))
         ) : (
          <div className="px-4 py-2 text-gray-500">
           Nenhuma filial encontrada
          </div>
         )}
        </div>
       )}
      </div>

      {/* Resultado da busca */}
      {selectedUnit && (
       <div
        className={`p-4 rounded-lg border ${
         selectedUnit.providers >= 4
          ? "bg-green-50 border-green-200"
          : "bg-red-50 border-red-200"
        }`}
       >
        <h4 className="font-semibold mb-1">{selectedUnit.unit}</h4>
        <div className="flex items-center">
         <span className="mr-2">
          {selectedUnit.providers >= 4 ? (
           <FaCheckCircle className="text-green-600" />
          ) : (
           <FaExclamationCircle className="text-red-600" />
          )}
         </span>
         <span>
          {selectedUnit.providers} prestador
          {selectedUnit.providers !== 1 ? "es" : ""}
         </span>
        </div>
        <p className="mt-2 text-sm">
         {selectedUnit.providers >= 4
          ? "Esta filial é elegível para o bônus!"
          : "Esta filial precisa de pelo menos 4 prestadores para se tornar elegível."}
        </p>
       </div>
      )}
     </div>
    </div>
   </section>
  </div>
 );
};
