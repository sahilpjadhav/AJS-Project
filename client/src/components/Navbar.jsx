import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>INDIA</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>ASIA</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>AMERICA</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>EURPOE</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>AFRICA</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>TRAVEL TIPS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logoutNavbar}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
