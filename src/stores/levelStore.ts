import { create } from "zustand";
import { totalSteps, Steps } from "@/data/steps";

export type VehicleType = "motorcycle" | "car";

interface LevelState {
 currentLevel: number;
 currentLevelLabel: string;
 setCurrentLevelLabel: (label: string) => void;
 selectedVehicle: VehicleType;
 setCurrentLevel: (level: number) => void;
 setSelectedVehicle: (vehicle: VehicleType) => void;
 nextLevel: () => void;
 previousLevel: () => void;
 canGoNext: () => boolean;
 canGoPrevious: () => boolean;
}

export const useLevelStore = create<LevelState>((set, get) => ({
 currentLevel: 0,
 currentLevelLabel: Steps[0]?.label || "",
 selectedVehicle: "motorcycle",
 setCurrentLevelLabel: (label: string) => {
  console.log(`[LevelStore] setCurrentLevelLabel:`, label);
  set({ currentLevelLabel: label });
 },

 setCurrentLevel: (level: number) => {
  console.log(`[LevelStore] setCurrentLevel:`, level);
  set({ currentLevel: level });
 },

 setSelectedVehicle: (vehicle: VehicleType) => {
  console.log(`[LevelStore] setSelectedVehicle:`, vehicle);
  set({ selectedVehicle: vehicle });
 },

 nextLevel: () => {
  const { currentLevel, canGoNext } = get();
  const canNext = canGoNext();
  console.log(
   `[LevelStore] nextLevel called. currentLevel:`,
   currentLevel,
   `canGoNext:`,
   canNext
  );
  if (canNext) {
   set({ currentLevel: currentLevel + 1 });
   console.log(`[LevelStore] nextLevel: avançou para`, currentLevel + 1);
  } else {
   console.log(`[LevelStore] nextLevel: não avançou, já está no último nível.`);
  }
 },

 previousLevel: () => {
  const { currentLevel, canGoPrevious } = get();
  const canPrev = canGoPrevious();
  console.log(
   `[LevelStore] previousLevel called. currentLevel:`,
   currentLevel,
   `canGoPrevious:`,
   canPrev
  );
  if (canPrev) {
   set({ currentLevel: currentLevel - 1 });
   console.log(`[LevelStore] previousLevel: voltou para`, currentLevel - 1);
  } else {
   console.log(
    `[LevelStore] previousLevel: não voltou, já está no primeiro nível.`
   );
  }
 },

 canGoNext: () => {
  const { currentLevel } = get();
  const result = currentLevel < totalSteps - 1;
  console.log(
   `[LevelStore] canGoNext? currentLevel:`,
   currentLevel,
   `totalSteps:`,
   totalSteps,
   `=>`,
   result
  );
  return result;
 },

 canGoPrevious: () => {
  const { currentLevel } = get();
  const result = currentLevel > 0;
  console.log(
   `[LevelStore] canGoPrevious? currentLevel:`,
   currentLevel,
   `=>`,
   result
  );
  return result;
 },
}));
