"use client";

import { Section } from "@/components/Section";
import { Introduction } from "@/sections/Introduction";
import { Eligibility } from "@/sections/Eligibility";
import { VehicleSelection } from "@/sections/VehicleSelection";
import { NavigationButtons } from "@/components/NavigationButtons";

export default function HomePage() {
 return (
  <main className="min-h-screen bg-white">
   {/* Level 0 - Introduction */}
   <Section level={0}>
    {/* Hero Section */}
    <section className="w-full bg-gradient-to-r from-green-600 to-green-500 py-16 px-4 sm:px-6 lg:py-20 shadow-md flex flex-col justify-center items-center text-center">
     <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
       Aumente seus Ganhos com Nosso Programa de Bônus!
      </h1>
      <p className="text-green-100 text-lg sm:text-xl max-w-3xl mx-auto">
       Seu desempenho merece o nosso reconhecimento
      </p>
     </div>
    </section>

    {/* Introduction Section */}
    <Introduction />

    <NavigationButtons showOnlyNext />
   </Section>

   {/* Level 1 - Eligibility */}
   <Section level={1}>
    <Eligibility />
    <NavigationButtons />
   </Section>

   {/* Level 2 - Vehicle Selection */}
   <Section level={2}>
    <VehicleSelection />
   </Section>

   {/* Level 3 - Bonus Rules (placeholder for now) */}
   <Section level={3}>
    <section className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
     <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Regras do Bônus</h1>
      <p className="text-gray-600 mb-8">
       Entenda como seu bônus é calculado e quais fatores podem afetá-lo
      </p>
      <div className="bg-green-50 p-6 rounded-lg">
       <p className="text-green-800">
        Esta seção será implementada com as regras específicas para cada tipo de
        veículo.
       </p>
      </div>
     </div>
    </section>

    <NavigationButtons showOnlyPrevious />
   </Section>
  </main>
 );
}
