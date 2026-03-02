import { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Layout } from './ui/Layout'
import { LoadingSpinner } from './ui/LoadingSpinner'
import { Home } from './pages/Home'
import ErrorBoundary from './ui/ErrorBoundary'
import { ErrorFallback } from './ui/ErrorFallback'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings = lazy(() => import('./pages/Settings'))
const Profile = lazy(() => import('./pages/Profile'))
const BrokenPage = lazy(() => import('./pages/BrokenPage'))

const LazyOutlet = () => (
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  </ErrorBoundary>
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
          { path: 'broken', element: <BrokenPage /> },
        ],
      },
    ],
  },
])

