import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Auth from "../../utils/auth";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);
  let logInLink;
  if (Auth.loggedIn()) {
    logInLink = "/logout";
  } else {
    logInLink = "/login";
  }

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/fluffr-logo-circle.png`}
              alt="brand"
              className="logo"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link to="/home">
                {" "}
                <ion-icon
                  name="home-outline"
                  size="large"
                  fontSize="70px"
                ></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                {" "}
                <ion-icon name="person-outline" size="large"></ion-icon>
              </Link>
            </li>
            {/* <li>
              <Link to='/location'>
                {' '}
                <ion-icon name='location-outline' size="large"></ion-icon>
              </Link>
            </li> */}
            <li>
              <Link to="/about">
                {" "}
                <ion-icon name="mail-outline" size="large"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/search">
                {" "}
                <ion-icon name="search-outline" size="large"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to={logInLink} onClick={checkIfLoggedIn}>
                {" "}
                <ion-icon name="power-outline" size="large"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function checkIfLoggedIn() {
  if (Auth.loggedIn) {
    Auth.logout();
  }
}

export default NavBar;
