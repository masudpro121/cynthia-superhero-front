import React from "react";
import Logo from "./../../assets/svg/logo.svg";
import User from "./../../assets/svg/user.svg";
import Down from "./../../assets/svg/down.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div id="navbar">
      <div>
        <img alt=" " src={Logo} onClick={() => navigate("/")} />
        <button>
          <img alt=" " src={User} id="navbar-user-icon" />
          <span>AI AVATAR</span>
          <img alt=" " src={Down} id="navbar-down-icon" />
        </button>
      </div>
      {/* <button id="navbar-generated-avatars" onClick={() => navigate("/gallery")}>
        View My Generated Avatars
      </button> */}
    </div>
  );
};
export default Navbar;
