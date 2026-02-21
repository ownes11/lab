import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
          Home
        </NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
          Courses
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Student Portal 2026</footer>
    </>
  );
}

export default Layout;
