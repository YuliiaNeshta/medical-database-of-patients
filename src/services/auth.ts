import create from 'zustand'

interface AuthState {
  email: string | null
  token: string | null
  id: string | null
  addUser: () => void
  removeUser: () => void
}

export const useAuth = create<AuthState>((set) => ({
  email: null,
  token: null,
  id: null,
  addUser: () =>
    set((state) => ({
      email: state.email,
      token: state.token,
      id: state.id,
    })),
  removeUser: () =>
    set((state) => ({
      email: null,
      token: null,
      id: null,
    })),
}))
