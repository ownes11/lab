import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lab 7.1 – Lazy Loading Dashboard</h1>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">Code Splitting with Suspense</footer>
    </div>
  )
}

