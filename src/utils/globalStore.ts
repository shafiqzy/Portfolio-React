import create from "zustand";

// Define the type for your state
interface CounterState {
  count: number;
  message: string;
  updateMessage: (by: string) => void;
  increment: () => void;
  decrement: () => void;
}

// Create your Zustand store
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  message: "",
  updateMessage: (newMessage) => set({ message: newMessage }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
