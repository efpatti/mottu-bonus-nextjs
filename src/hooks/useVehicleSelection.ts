import { create } from "zustand";

export type VehicleType = "motorcycle" | "car";

interface VehicleSelectionState {
 selectedVehicle: VehicleType;
 setSelectedVehicle: (vehicle: VehicleType) => void;
}

export const useVehicleSelection = create<VehicleSelectionState>((set) => ({
 selectedVehicle: "motorcycle",
 setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
}));
