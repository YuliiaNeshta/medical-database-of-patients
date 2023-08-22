import { useMutation } from '@tanstack/react-query'
import { supabase } from '../services/supabase'

export interface ICredentials {
  email: string
  password: string
}

export const useSignIn = () => {
  const mutation = useMutation(
    ['sign-in'],
    (credentials: ICredentials) => supabase.auth.signInWithPassword(credentials),
    {
      onSuccess: ({ data }) => {
        console.log(data.session)
      },
    },
  )
  return {
    login: mutation.mutate,
    isLoading: mutation.isLoading,
  }
}
