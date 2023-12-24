import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="container-fluid page-body-wrapper">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav mt-4">
           <li className="nav-item">
            <Link className="nav-link" to={`/home`}>
              <span className="menu-title">Mes liens</span>
              <i className="mdi mdi-link-variant menu-icon"></i>
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to={`/qr-codes`}>
              <span className="menu-title">Mes codes QR</span>
              <i className="mdi mdi-select-inverse menu-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>

      { children }
    </div>
  );
};
export default Sidebar;
