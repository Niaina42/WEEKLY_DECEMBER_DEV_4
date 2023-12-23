import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuItem = ({ id, title }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/home/${id}`}>
        <span className="menu-title">{ title }</span>
        <i className=""></i>
      </Link>
    </li>
  );
};
export default MenuItem;
