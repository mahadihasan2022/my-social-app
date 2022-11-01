import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutLinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import user from '../../images/user.svg';
import "./navBar.scss";


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" 
        style=
        {{
             textDecoration: "none",
              fontWeight: "bold",
              color: "darkgreen",
              fontSize: "20px"
        }}>
          <span>MahaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
        <img src={user} alt="" />
        <span>Mahadi Hasan</span>
      </div>

      </div>
    </div>
  );
};

export default NavBar;
