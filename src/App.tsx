import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'
import { Router } from './router'

import { getUserInfo } from './api/user'

const App = () => {
  useEffect(() => {
    getUserInfo()
  })
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
