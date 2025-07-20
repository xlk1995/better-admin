import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'
import { Router } from './router'

import { getUserInfo } from './api/user'
import { hideLoading } from './utils/loading'

const App = () => {
  useEffect(() => {
    getUserInfo()
      .then(response => {
        console.log('User Info:', response.data)
      })
      .catch(error => {
        hideLoading()
        console.error('Error fetching user info:', error)
      })
  }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
