import React from 'react';
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from '@mui/material';

import {
  faHome,
  faUserCircle,
  faNewspaper,
  faHammer,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar />
                <Link to="/"></Link>
            </div>
        </div>
    )
}

export default NavBar
