import { create } from "zustand";

type TextState = {
  text: string;
  excludeSpaces: boolean;
  setText: (text: string) => void;
  toggleExcludeSpaces: () => void;
};

export const useTextStore = create<TextState>()((set) => ({
  text: "",
  excludeSpaces: false,
  setText: (text) => set({ text }),
  toggleExcludeSpaces: () =>
    set((state) => ({ excludeSpaces: !state.excludeSpaces })),
}));