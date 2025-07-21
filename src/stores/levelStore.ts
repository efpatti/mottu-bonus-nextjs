import { create } from "zustand";

export type VehicleType = "motorcycle" | "car";

interface LevelState {
 currentLevel: number;
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
 selectedVehicle: "motorcycle",

 setCurrentLevel: (level: number) => set({ currentLevel: level }),

 setSelectedVehicle: (vehicle: VehicleType) =>
  set({ selectedVehicle: vehicle }),

 nextLevel: () => {
  const { currentLevel, canGoNext } = get();
  if (canGoNext()) {
   set({ currentLevel: currentLevel + 1 });
  }
 },

 previousLevel: () => {
  const { currentLevel, canGoPrevious } = get();
  if (canGoPrevious()) {
   set({ currentLevel: currentLevel - 1 });
  }
 },

 canGoNext: () => {
  const { currentLevel } = get();
  return currentLevel < 3; // Assumindo 4 níveis (0-3)
 },

 canGoPrevious: () => {
  const { currentLevel } = get();
  return currentLevel > 0;
 },
}));
