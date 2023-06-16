import { create } from "zustand";

interface useHeaderStore {
  navBarOpen: boolean;
  setNavBarOpen: (by: boolean) => void;
}

const useHeaderStore = create<useHeaderStore>()((set) => ({
  navBarOpen: false,
  setNavBarOpen: (boolean) => set({ navBarOpen: boolean }),
}));
