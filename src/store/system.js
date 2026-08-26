import { create } from "zustand";

const useSystemStore = create((set) => ({
  booting: true,
  locked: true,

  sleep: () => set({ locked: true }),
  lock: () => set({ locked: true }),

  restart: () =>
    set({
      booting: true,
      locked: false,
    }),

  shutdown: () =>
    set({
      locked: true,
    }),
}));

export default useSystemStore;
