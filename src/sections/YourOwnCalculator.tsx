"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
 FaMotorcycle,
 FaCar,
 FaInfoCircle,
 FaTrash,
 FaEdit,
} from "react-icons/fa";
import { NavigationButtons } from "@/components/NavigationButtons";
import { v4 as uuidv4 } from "uuid";

const carOptions = [
 { label: "1-7 dias", value: "1-7", points: 1 },
 { label: "8-15 dias", value: "8-15", points: 2 },
 { label: "16-30 dias", value: "16-30", points: 3 },
 { label: "31-50 dias", value: "31-50", points: 4 },
 { label: "50+ dias", value: "50+", points: 5 },
];

const motoOptions = [
 { label: "Moto desligando sozinha", value: "desligando", points: 2 },
 { label: "Moto não liga - Não Identificado", value: "nao-liga", points: 2 },
 { label: "Problema com embreagem", value: "embreagem", points: 2 },
 { label: "Moto não Desbloqueia", value: "nao-desbloqueia", points: 2 },
 { label: "Problema Elétrico", value: "eletrico", points: 2 },
 { label: "Outros", value: "outros", points: 1 },
];

interface BikeEntry {
 id: string;
 days: string;
 totalCount: number;
 paidCount: number;
}

const calculateBonus = (points: number, type: "car" | "motorcycle") => {
 const min = type === "car" ? 6 : 5;
 if (points < min) return 0;
 return 40 + (points - min) * 15;
};

const YourOwnCalculator = () => {
 const [selectedVehicle, setSelectedVehicle] = useState<"car" | "motorcycle">(
  "car"
 );
 const [entries, setEntries] = useState<BikeEntry[]>([]);
 const [form, setForm] = useState({ days: "", totalCount: "", paidCount: "" });
 const [totalPoints, setTotalPoints] = useState(0);
 const [editId, setEditId] = useState<string | null>(null);

 const options = selectedVehicle === "car" ? carOptions : motoOptions;
 const minPoints = selectedVehicle === "car" ? 6 : 5;

 const handleAddOrEditEntry = () => {
  const { days, totalCount, paidCount } = form;
  const total = parseInt(totalCount);
  const paid = parseInt(paidCount);
  if (!days || isNaN(total) || total < 0) return;
  if (selectedVehicle === "car" && (isNaN(paid) || paid > total || paid < 0))
   return;
  const newEntry: BikeEntry = {
   id: editId || uuidv4(),
   days,
   totalCount: total,
   paidCount: selectedVehicle === "car" ? paid : 0,
  };
  setEntries((prev) => {
   if (editId) {
    return prev.map((e) => (e.id === editId ? newEntry : e));
   }
   return [...prev, newEntry];
  });
  setForm({ days: "", totalCount: "", paidCount: "" });
  setEditId(null);
 };

 const handleCalculate = () => {
  const total = entries.reduce((acc, entry) => {
   const baseOption = options.find((o) => o.value === entry.days);
   if (!baseOption) return acc;
   if (selectedVehicle === "car") {
    const totalFromPaid = entry.paidCount * (baseOption.points + 1);
    const totalFromUnpaid =
     (entry.totalCount - entry.paidCount) * baseOption.points;
    return acc + totalFromPaid + totalFromUnpaid;
   } else {
    // Moto: cada serviço = pontos
    return acc + entry.totalCount * baseOption.points;
   }
  }, 0);
  setTotalPoints(total);
 };

 const valueToBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
 const totalMotos = entries.reduce((sum, e) => sum + e.totalCount, 0);
 const bonus = calculateBonus(totalPoints, selectedVehicle);

 const handleDelete = (id: string) => {
  setEntries((prev) => prev.filter((e) => e.id !== id));
  if (editId === id) {
   setForm({ days: "", totalCount: "", paidCount: "" });
   setEditId(null);
  }
 };

 const handleEdit = (entry: BikeEntry) => {
  setForm({
   days: entry.days,
   totalCount: String(entry.totalCount),
   paidCount: String(entry.paidCount),
  });
  setEditId(entry.id);
 };

 return (
  <section className="py-8 px-4 w-full bg-gradient-to-br from-green-600 via-green-500 to-green-400 flex items-center justify-center min-h-screen">
   <Card className="w-full max-w-md bg-white shadow-lg rounded-xl">
    <CardContent className="p-4 space-y-4">
     <h2 className="text-xl font-bold text-center text-gray-800">
      Calculadora de Bônus
     </h2>

     {/* Vehicle Selection */}
     <div className="grid grid-cols-2 gap-4 mb-4">
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
     <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-2 flex items-start">
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

     <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
       <select
        value={form.days}
        onChange={(e) => setForm({ ...form, days: e.target.value })}
        className="col-span-3 p-2 border rounded text-sm"
       >
        <option value="">
         {selectedVehicle === "car"
          ? "Selecione o período"
          : "Selecione o serviço"}
        </option>
        {options.map((opt) => (
         <option key={opt.value} value={opt.value}>
          {opt.label} ({opt.points} pts)
         </option>
        ))}
       </select>

       <input
        type="number"
        min={0}
        value={form.totalCount}
        onChange={(e) => setForm({ ...form, totalCount: e.target.value })}
        placeholder={
         selectedVehicle === "car" ? "Total de motos" : "Total de serviços"
        }
        className={
         selectedVehicle === "car"
          ? "col-span-1 p-2 border rounded text-sm"
          : "col-span-2 p-2 border rounded text-sm"
        }
       />

       {selectedVehicle === "car" && (
        <input
         type="number"
         min={0}
         value={form.paidCount}
         onChange={(e) => setForm({ ...form, paidCount: e.target.value })}
         placeholder="Pagas"
         className="col-span-1 p-2 border rounded text-sm"
        />
       )}

       <Button
        onClick={handleAddOrEditEntry}
        className={
         selectedVehicle === "car"
          ? "col-span-1 text-sm bg-green-600 hover:bg-green-700"
          : "col-span-1 text-sm bg-green-600 hover:bg-green-700"
        }
       >
        {editId ? "Salvar" : "Adicionar"}
       </Button>
      </div>
     </div>

     <div className="space-y-1 text-sm">
      {entries.map((entry) => {
       const label = options.find((d) => d.value === entry.days)?.label;
       return (
        <div
         key={entry.id}
         className="p-2 bg-gray-50 rounded-md flex justify-between items-center"
        >
         <div>
          <strong>{label}</strong> —{" "}
          {selectedVehicle === "car"
           ? `${entry.paidCount}/${entry.totalCount} pagas`
           : `${entry.totalCount} serviços`}
         </div>
         <div className="flex gap-2">
          <button onClick={() => handleEdit(entry)}>
           <FaEdit className="text-blue-500 hover:text-blue-700" />
          </button>
          <button onClick={() => handleDelete(entry.id)}>
           <FaTrash className="text-red-500 hover:text-red-700" />
          </button>
         </div>
        </div>
       );
      })}
     </div>

     <div className="bg-blue-50 p-3 rounded-lg">
      <div className="flex items-start gap-2">
       <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
       <div className="text-xs">
        <p className="font-medium">Como funciona o bônus:</p>
        <ul className="list-disc pl-4 space-y-1 mt-1">
         <li>{minPoints} pontos = R$ 40,00</li>
         <li>Cada ponto adicional = +R$ 15,00</li>
         <li>
          Exemplo: {minPoints + 1} pontos = R$ 55,00 | {minPoints + 2} pontos =
          R$ 70,00
         </li>
        </ul>
       </div>
      </div>
     </div>

     <Button
      className="w-full bg-green-600 hover:bg-green-700"
      onClick={handleCalculate}
     >
      Calcular Bônus
     </Button>

     {entries.length > 0 && (
      <div className="space-y-3">
       <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-sm">
        <h3 className="font-semibold text-green-800 flex items-center gap-2 text-sm">
         {selectedVehicle === "car" ? (
          <FaCar className="text-green-600" />
         ) : (
          <FaMotorcycle className="text-green-600" />
         )}{" "}
         Resumo
        </h3>
        <p>
         {selectedVehicle === "car"
          ? "Motos registradas:"
          : "Serviços registrados:"}{" "}
         <strong>{totalMotos}</strong>
        </p>
        <p>
         Pontos totais: <strong>{totalPoints}</strong>
        </p>
        <p className="text-base font-bold text-green-700">
         Bônus: {valueToBRL(bonus)}
        </p>
       </div>

       {totalPoints < minPoints && (
        <div className="bg-yellow-50 text-yellow-800 p-2 rounded-lg text-xs">
         Você precisa de {minPoints - totalPoints} ponto(s) adicional(is) para
         receber o bônus mínimo.
        </div>
       )}
      </div>
     )}
     <NavigationButtons />
    </CardContent>
   </Card>
  </section>
 );
};

export default YourOwnCalculator;
