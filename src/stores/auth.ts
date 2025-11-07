import { create } from "zustand";
import type { User } from "../types/user";
import type { GeneralError } from "../types/error";

interface AuthStoreProps {
  user: User | null;
  setUser: (newState: User) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  error: GeneralError<"login" | "register"> | null;
  setError: (newState: GeneralError<"login" | "register">) => void;
}

export const useAuthStore = create<AuthStoreProps>((set) => ({
  user: null,
  setUser: (newState) => set({ user: newState }),
  loading: true,
  setLoading: (newState) => set({ loading: newState }),
  error: null,
  setError: (newState) => set({ error: newState }),
}));
