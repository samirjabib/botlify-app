import { create } from "zustand";

export type HeaderStoreTypes = {
  navBarOpen: boolean;
  setNavBarOpen: (by: boolean) => void;
};

export const useHeaderStore = create<HeaderStoreTypes>()((set) => ({
  navBarOpen: false,
  setNavBarOpen: (boolean) => set({ navBarOpen: boolean }),
}));
