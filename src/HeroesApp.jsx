import React from 'react'
import { AuthProvider } from './auth'
import { Outlet } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvider>      
      <AppRouter />
    </AuthProvider>    
  )
}
