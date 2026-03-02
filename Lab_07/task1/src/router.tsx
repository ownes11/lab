import { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Layout } from './ui/Layout'
import { LoadingSpinner } from './ui/LoadingSpinner'
import { Home } from './pages/Home'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Settings'))
const Profile = lazy(() => import('./pages/Profile'))

const LazyOutlet = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Outlet />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <LazyOutlet />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'settings', element: <Settings /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
])

