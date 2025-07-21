"use client";

import { Section } from "@/components/Section";
import { Introduction } from "@/sections/Introduction";
import { Eligibility } from "@/sections/Eligibility";
import { Vehicle } from "@/sections/Vehicle";
import { NavigationButtons } from "@/components/NavigationButtons";
import { Benefits } from "@/sections/Benefits";

export default function HomePage() {
 return (
  <main className="min-h-screen bg-white">
   {/* Level 0 - Introduction (botão "1" na navbar) */}
   <Section level={0}>
    <Introduction />
   </Section>

   <Section level={1}>
    <Benefits />
   </Section>

   {/* Level 2 - Eligibility (botão "2" na navbar) */}
   <Section level={2}>
    <Eligibility />
    <NavigationButtons />
   </Section>

   {/* Level 3 - Bonus Rules (botão "4" na navbar) */}
   <Section level={3}>
    <Vehicle />
    <NavigationButtons showOnlyPrevious />
   </Section>
  </main>
 );
}
