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
import BonusCalculation from "@/sections/BonusCalculation";
import YourOwnCalculator from "@/sections/YourOwnCalculator";

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
   "Perda de ferramentas e ensumos: desconto no bônus se positivo",
  ],
 };
 const rules = selectedVehicle === "motorcycle" ? motorcycleRules : carRules;
 const sections = [
  <>
   <Introduction />
  </>,
  <>
   <Benefits />
  </>,
  <>
   <Eligibility1 />
   <NavigationButtons />
  </>,
  <>
   <Eligibility2 />
   <NavigationButtons />
  </>,
  <>
   <Vehicle />
   <NavigationButtons />
  </>,
  <>
   <BonusCalculation type={selectedVehicle} />
   <NavigationButtons />
  </>,
  <>
   <YourOwnCalculator />
  </>,
  <>
   <Fatores penaltyFactors={rules.penaltyFactors} />
   <NavigationButtons showOnlyPrevious />
  </>,
 ];

 return (
  <main className="h-full bg-white min-h-screen">
   {sections.map((content, idx) => (
    <Section key={idx} level={idx}>
     {content}
    </Section>
   ))}
  </main>
 );
}
