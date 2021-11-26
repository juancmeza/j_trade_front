import React from 'react';
import Navbar from "reactjs-navbar";
import Loader from "react-loader-spinner";
import Link from 'react-router-dom';

import {
  faHome,
  faUserCircle,
  faNewspaper,
  faHammer,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "reactjs-navbar/dist/index.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Link to="/"></Link>
            </div>
        </div>
    )
}

export default NavBar
