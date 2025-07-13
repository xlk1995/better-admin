import type { RouteObject } from 'react-router-dom'

import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Welcome from '@/views/Welcome'
import { Navigate, useRoutes } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/403',
    element: <h2>403 Forbidden</h2>
  }
]

export function Router() {
  return useRoutes(routes)
}
