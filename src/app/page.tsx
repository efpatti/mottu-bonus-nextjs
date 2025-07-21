"use client";

import { Section } from "@/components/Section";
import { Introduction } from "@/sections/Introduction";
import { Eligibility1 } from "@/sections/Eligibility1";
import { Eligibility2 } from "@/sections/Eligibility2";
import { Vehicle } from "@/sections/Vehicle";
import { NavigationButtons } from "@/components/NavigationButtons";
import { Benefits } from "@/sections/Benefits";
import Fatores from "@/sections/Fatores";
import { useVehicleSelection } from "@/hooks/useVehicleSelection";

export default function HomePage() {
 const selectedVehicle = useVehicleSelection((s) => s.selectedVehicle);

 const motorcycleRules = {
  penaltyFactors: [
   "Ultrapassar 90 km/h: perde o bônus diário",
   "Ultrapassar 120 km/h: perde a quinzena do bônus mensal",
   "Faltas injustificadas: perde o bônus quinzenal",
   "Atrasos ou sair antes do horário: penalidade no bônus diário (melhor dia da quinzena)",
   "Perda de ferramenta: desconto no bônus se positivo",
  ],
 };
 const carRules = {
  penaltyFactors: [
   "Ultrapassar limites de velocidade: penalidade no bônus",
   "Faltas injustificadas: perde o bônus quinzenal",
   "Atrasos ou sair antes do horário: penalidade no bônus diário",
   "Perda de ferramenta: desconto no bônus se positivo",
  ],
 };
 const rules = selectedVehicle === "motorcycle" ? motorcycleRules : carRules;
 return (
  <main className="h-full bg-white">
   {/* Level 0 - Introduction (botão "1" na navbar) */}
   <Section level={0}>
    <Introduction />
   </Section>

   <Section level={1}>
    <Benefits />
   </Section>

   <Section level={2}>
    <Eligibility1 />
    <NavigationButtons />
   </Section>
   <Section level={3}>
    <Eligibility2 />
    <NavigationButtons />
   </Section>

   {/* Level 4 - Bonus Rules (botão "4" na navbar) */}
   <Section level={4}>
    <Vehicle />
    <NavigationButtons />
   </Section>
   <Section level={5}>
    <Fatores penaltyFactors={rules.penaltyFactors} />
    <NavigationButtons showOnlyPrevious />
   </Section>
  </main>
 );
}
