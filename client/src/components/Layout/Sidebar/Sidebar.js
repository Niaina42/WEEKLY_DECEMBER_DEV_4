import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="container-fluid page-body-wrapper">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav mt-4">
           <li className="nav-item">
            <Link className="nav-link" to={`/home`}>
              <span className="menu-title">Links</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to={`/home`}>
              <span className="menu-title">QR Codes</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </Link>
          </li>
           {/* <li className="nav-item">
            <Link className="nav-link" to={`/home`}>
              <span className="menu-title">Mon profile</span>
              <i className="mdi mdi-table-large menu-icon"></i>
            </Link>
          </li> */}

          {/* <li className="nav-item sidebar-actions">
            <span className="nav-link">
              <Link to="/folder/add" style={{width:"100%"}} className="btn btn-block btn-lg btn-gradient-primary mt-4">
                <i className="mdi mdi-table-large menu-icon"></i> Profile
              </Link>
            </span>
          </li> */}
        </ul>
      </nav>

      { children }
    </div>
  );
};
export default Sidebar;
