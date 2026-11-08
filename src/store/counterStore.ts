import { create } from "zustand";

type TextState = {
  text: string;
  excludeSpaces: boolean;
  limitEnabled: boolean;
  limit: number | null;
  setText: (text: string) => void;
  toggleExcludeSpaces: () => void;
  toggleLimit: () => void;
  setLimit: (limit: number | null) => void;
};

export const useTextStore = create<TextState>()((set) => ({
  text: "",
  excludeSpaces: false,
  limitEnabled: false,
  limit: null,
  setText: (text) => set({ text }),
  toggleExcludeSpaces: () => set((state) => ({ excludeSpaces: !state.excludeSpaces })),
  toggleLimit: () => set((state) => ({ limitEnabled: !state.limitEnabled })),
  setLimit: (limit) => set({ limit }),
}));
