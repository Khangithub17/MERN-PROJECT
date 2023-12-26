import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Codewithkhan</NavLink>
          </div>
          <nav className={isMobileMenuOpen ? "mobile-menu-open" : ""}>
            <div className="menu-icon" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
