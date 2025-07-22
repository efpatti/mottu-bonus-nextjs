import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const mainTableDataMoto = [
 { dias: "1 a 7", recolhido: 1, pago: 2 },
 { dias: "8 a 15", recolhido: 2, pago: 3 },
 { dias: "16 a 30", recolhido: 3, pago: 4 },
 { dias: "31 a 50", recolhido: 4, pago: 5 },
 { dias: "> 50", recolhido: 5, pago: 6 },
];

const bonusTableDataCar = [
 { tipo: "6 atendimentos", valor: "R$ 40,00" },
 { tipo: "+1 atendimento", valor: "R$ 15,00" },
];

const bonusTableDataMoto = [
 { tipo: "5 atendimentos", valor: "R$ 40,00" },
 { tipo: "+1 atendimento", valor: "R$ 15,00" },
];

const Bonus: React.FC<BonusProps> = ({ vehicleType }) => {
 const getMainTableData = () =>
  vehicleType === "car" ? mainTableDataCar : mainTableDataMoto;
 const bonusTableData =
  vehicleType === "car" ? bonusTableDataCar : bonusTableDataMoto;

 return (
  <div className="w-full bg-white">
   <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
    <div className="mb-10">
     <Tabs defaultValue="criterios">
      <TabsList className="mb-6">
       <TabsTrigger value="criterios">Critérios</TabsTrigger>
       <TabsTrigger value="valores">Valores</TabsTrigger>
      </TabsList>

      <TabsContent value="criterios">
       {/* Desktop Table */}
       <div className="hidden sm:block">
        <table className="w-full text-sm">
         <thead>
          <tr className="bg-green-50 text-green-800">
           <th className="px-4 py-3 text-left font-semibold">Período (dias)</th>
           <th className="px-4 py-3 text-left font-semibold">
            Serviço Recolhido
           </th>
           <th className="px-4 py-3 text-left font-semibold">Serviço Pago</th>
          </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
          {getMainTableData().map((row, index) => (
           <tr key={index} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 whitespace-nowrap">{row.dias}</td>
            <td className="px-4 py-3 whitespace-nowrap">
             <div className="flex items-center gap-1">
              <FiCheckCircle className="text-green-500" /> {row.recolhido}{" "}
              {row.recolhido > 1 ? "pontos" : "ponto"}
             </div>
            </td>
            <td className="px-4 py-3 whitespace-nowrap">
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

       {/* Mobile Table */}
       <div className="sm:hidden overflow-x-auto">
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
      </TabsContent>

      <TabsContent value="valores">
       {/* Desktop Table */}
       <div className="hidden sm:block">
        <table className="w-full text-sm">
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
            <td className="px-4 py-3 font-medium text-green-600">
             {row.valor}
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>

       {/* Mobile Table */}
       <div className="sm:hidden overflow-x-auto">
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
            <td className="px-4 py-3 text-green-600 font-medium">
             {row.valor}
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </TabsContent>
     </Tabs>
    </div>
   </section>
  </div>
 );
};

export default Bonus;
