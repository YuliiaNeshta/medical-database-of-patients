import { ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const theme = createTheme({
  typography: {
    // allVariants: {
    //   color: '#acf4ff',
    // },
  },
  palette: {
    primary: {
      main: '#002D40',
      light: '#1AA6B7',
    },
    error: {
      main: '#FF414D',
      light: '#F56A79',
    },
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
