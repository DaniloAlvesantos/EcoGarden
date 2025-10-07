import { create } from "zustand";
import type { GardenResponse } from "../types/api/api.garden";

interface MapStoreProps {
  showAside: boolean;
  setShowAside: (state: boolean) => void;
  currentGarden: GardenResponse | null;
  setCurrentGarden: (newState: GardenResponse) => void;
}

export const useMapStore = create<MapStoreProps>((set) => ({
  showAside: false,
  setShowAside: (newState) => set({ showAside: newState }),
  currentGarden: null,
  setCurrentGarden: (newState) => set({ currentGarden: newState }),
}));
