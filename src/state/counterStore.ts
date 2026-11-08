import { create } from "zustand";

type CounterState = {
  content: string;
  skipSpaces: boolean;
  limitOn: boolean;
  maxChars: number;
  setContent: (value: string) => void;
  toggleSkipSpaces: () => void;
  toggleLimit: () => void;
  setMaxChars: (value: number) => void;
};

export const useCounterStore = create<CounterState>()((set) => ({
  content: "",
  skipSpaces: false,
  limitOn: false,
  maxChars: 0,
  setContent: (value) => set({ content: value }),
  toggleSkipSpaces: () => set((state) => ({ skipSpaces: !state.skipSpaces })),
  toggleLimit: () => set((state) => ({ limitOn: !state.limitOn })),
  setMaxChars: (value) => set({ maxChars: value }),
}));
