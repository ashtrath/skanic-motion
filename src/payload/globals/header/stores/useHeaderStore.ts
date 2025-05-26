import { create } from "zustand"

interface HeaderState {
    isOpen: boolean
    toggleHeader: () => void
    openHeader: () => void
    closeHeader: () => void
}

export const useHeaderStore = create<HeaderState>((set) => ({
    isOpen: false,

    toggleHeader: () => set((state) => ({ isOpen: !state.isOpen })),
    openHeader: () => set({ isOpen: true }),
    closeHeader: () => set({ isOpen: false }),
}))
