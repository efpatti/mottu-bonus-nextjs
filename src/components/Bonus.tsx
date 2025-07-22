"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export interface BonusProps {
 vehicleType: "car" | "moto";
}

const mainTableDataCar = [
 { dias: "1 a 7", recolhido: 1, pago: 2 },
 { dias: "8 a 15", recolhido: 2, pago: 3 },
 { dias: "16 a 30", recolhido: 3, pago: 4 },
 { dias: "31 a 50", recolhido: 4, pago: 5 },
 { dias: "> 50", recolhido: 5, pago: 6 },
];

const mainTableDataMoto = [...mainTableDataCar];

const bonusTableDataCar = [
 { tipo: "6 pontos", valor: "R$ 40,00" },
 { tipo: "+1 ponto", valor: "R$ 15,00" },
];

const bonusTableDataMoto = [
 { tipo: "5 pontos", valor: "R$ 40,00" },
 { tipo: "+1 ponto", valor: "R$ 15,00" },
];

const Bonus: React.FC<BonusProps> = ({ vehicleType }) => {
 const [section, setSection] = useState("Acelerador");
 const aceleradorRef = useRef<HTMLDivElement | null>(null);
 const valoresRef = useRef<HTMLDivElement | null>(null);

 const getMainTableData = () =>
  vehicleType === "car" ? mainTableDataCar : mainTableDataMoto;
 const bonusTableData =
  vehicleType === "car" ? bonusTableDataCar : bonusTableDataMoto;

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.target === valoresRef.current && entry.isIntersecting) {
     setSection("Valores");
    } else if (
     aceleradorRef.current &&
     aceleradorRef.current.getBoundingClientRect().top <= 100
    ) {
     setSection("Acelerador");
    }
   },
   { threshold: 0.5 }
  );

  const valoresNode = valoresRef.current;
  if (valoresNode) observer.observe(valoresNode);

  return () => {
   if (valoresNode) observer.unobserve(valoresNode);
  };
 }, []);

 return (
  <div className="w-full bg-white relative">
   {/* Sticky section header for mobile */}
   <div className="sm:hidden sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm py-2 px-4">
    <p className="text-sm font-medium text-gray-500">
     Seção atual:{" "}
     <span className="text-green-600 font-semibold">{section}</span>
    </p>
   </div>

   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
    {/* Acelerador */}
    <div ref={aceleradorRef}>
     <h3 className="text-lg font-semibold text-gray-800 mb-4">Acelerador</h3>
     <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
       <thead>
        <tr className="bg-green-50 text-green-800">
         <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
          Período (dias)
         </th>
         <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
          Serviço Recolhido
         </th>
         <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
          Serviço Pago
         </th>
        </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
        {getMainTableData().map((row, index) => (
         <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3">{row.dias}</td>
          <td className="px-4 py-3">
           <div className="flex items-center gap-1">
            <FiCheckCircle className="text-green-500" /> {row.recolhido}{" "}
            {row.recolhido > 1 ? "pontos" : "ponto"}
           </div>
          </td>
          <td className="px-4 py-3">
           <div className="flex items-center gap-1">
            <FiCheckCircle className="text-green-500" /> {row.pago}{" "}
            {row.pago > 1 ? "pontos" : "ponto"}
           </div>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </div>

    {/* Valores */}
    <div ref={valoresRef}>
     <h3 className="text-lg font-semibold text-gray-800 mb-4">Valores</h3>
     <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
       <thead>
        <tr className="bg-green-50 text-green-800">
         <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
          Tipo
         </th>
         <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
          Valor Bônus
         </th>
        </tr>
       </thead>
       <tbody className="divide-y divide-gray-200">
        {bonusTableData.map((row, index) => (
         <tr key={index} className="hover:bg-gray-50 transition-colors">
          <td className="px-4 py-3 capitalize">{row.tipo}</td>
          <td className="px-4 py-3 text-green-600 font-medium">{row.valor}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </div>
   </section>
  </div>
 );
};

export default Bonus;
