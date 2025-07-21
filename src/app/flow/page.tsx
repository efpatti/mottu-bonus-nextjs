"use client";

import { Section } from "@/components/Section";
import { Introduction } from "@/sections/Introduction";
import { Eligibility } from "@/sections/Eligibility1";
import { Vehicle } from "@/sections/Vehicle";
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

   {/* Level 2 - Bonus Rules (placeholder for now) */}
   <Section level={2}>
    <Vehicle />

    <NavigationButtons showOnlyPrevious />
   </Section>
  </main>
 );
}
