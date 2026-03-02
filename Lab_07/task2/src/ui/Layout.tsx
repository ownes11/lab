import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Lab 7.2 – Error Boundaries</h1>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/broken">Broken Page</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">Lazy loading with error handling</footer>
    </div>
  )
}

