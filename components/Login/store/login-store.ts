import { create } from "zustand";

export type useLoginStoreType = {
  openModalLogin: boolean;
  setModalLogin: (by: boolean) => void;
};

export const useLoginStore = create<useLoginStoreType>()((set) => ({
  setModalLogin: (boolean) => set({ openModalLogin: boolean }),
  openModalLogin: false,
}));
