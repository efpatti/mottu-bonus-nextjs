"use client";

import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useLevelStore, VehicleType } from "@/stores/levelStore";

import { Steps } from "@/data/steps";

interface LevelContextType {
 currentLevel: number;
 selectedVehicle: VehicleType;
 setCurrentLevel: (level: number) => void;
 setCurrentLevelLabel: (label: string) => void;
 currentLevelLabel: string;
 setSelectedVehicle: (vehicle: VehicleType) => void;
 nextLevel: () => void;
 previousLevel: () => void;
 canGoNext: () => boolean;
 canGoPrevious: () => boolean;
}

console.log("Can go next:", useLevelStore.getState().canGoNext());
console.log("Can go previous:", useLevelStore.getState().canGoPrevious());

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
 children: ReactNode;
}

export const LevelProvider = ({ children }: LevelProviderProps) => {
 const store = useLevelStore();

 useEffect(() => {
  const label = Steps[store.currentLevel]?.label || "";
  if (label !== store.currentLevelLabel) {
   store.setCurrentLevelLabel(label);
  }
 }, [store.currentLevel]);

 return <LevelContext.Provider value={store}>{children}</LevelContext.Provider>;
};

export const useLevelContext = () => {
 const context = useContext(LevelContext);
 if (context === undefined) {
  throw new Error("useLevelContext must be used within a LevelProvider");
 }
 return context;
};
