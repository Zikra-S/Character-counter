import { create } from "zustand";

type TextState = {
  text: string;
  setText: (text: string) => void;
};

export const useTextStore = create<TextState>()((set) => ({
  text: "",
  setText: (text) => set({ text }),
}));