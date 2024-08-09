import {create} from "zustand";

type storeType = {
    counter: number,
    inc: () => void,
    dec: () => void
}
export const useStoreCounter = create<storeType>((set) => ({
    counter: 0,
    inc: () => {
        set((state) => ({counter: state.counter + 1}));
    },
    dec: () => {
        set((state) => ({counter: state.counter - 1}));
    }
}));