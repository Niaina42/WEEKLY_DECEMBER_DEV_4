import React from "react";
import { useAuth } from "../../../services/context/auth-context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuth()
  const navigation = useNavigate()
  
  const handleLogout = () => {
    navigation("/")
    logout()
  }

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <span className="logo-title">
          Link Reducer
        </span>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        {/* <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button> */}
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Rechercher des liens"
              />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="nav-profile-img">
                <img src="https://user-images.githubusercontent.com/35243461/168796906-ab4fc0f3-551c-4036-b455-be2dfedb9680.svg" alt="image" />
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">{user.user.name+" "+user.user.last_name}</p>
              </div>
            </a>
            <div
              className="dropdown-menu navbar-dropdown"
              aria-labelledby="profileDropdown"
            >
              <div className="p-2">
                <p>{user.user.name+" "+user.user.last_name}</p>
                <p>{user.user.email}</p>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item"onClick={handleLogout}>
                <i className="mdi mdi-logout me-2 text-primary"></i> Se déconnecter{" "}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
