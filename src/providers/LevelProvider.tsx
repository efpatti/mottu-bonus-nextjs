"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useLevelStore, VehicleType } from "@/stores/levelStore";

interface LevelContextType {
 currentLevel: number;
 selectedVehicle: VehicleType;
 setCurrentLevel: (level: number) => void;
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

 return <LevelContext.Provider value={store}>{children}</LevelContext.Provider>;
};

export const useLevelContext = () => {
 const context = useContext(LevelContext);
 if (context === undefined) {
  throw new Error("useLevelContext must be used within a LevelProvider");
 }
 return context;
};
