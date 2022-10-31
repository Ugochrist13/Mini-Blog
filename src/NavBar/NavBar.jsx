import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import fsvg from "./images/facebook.svg";
import tsvg from "./images/twitter.svg";
import isvg from "./images/instagram.svg";
import ysvg from "./images/youtube.svg";
import { Context } from "../ContexApi/Context";

const NavBar = () => {
  const { access } = useContext(Context);

  return (
    <div className="navbar">
      <header>
        <h3>SkillupAfrica Blog</h3>
      </header>

      <nav className="nav">
        <div className="nav-list">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/posts">
              <li>Articles</li>
            </NavLink>
            <NavLink to="/editor/:id">
              <li>About us</li>
            </NavLink>
          </ul>
        </div>

        <div className="clicks">
          <div className="icons">
            <a href="https://www.facebook.com/skillupafrica1" target="_blank">
              <img src={fsvg} alt="" />
            </a>
            <a href="https://twitter.com/SkillupAfrica1" target="_blank">
              <img src={tsvg} alt="" />
            </a>
            <a href="https://www.instagram.com/_skillupafrica/" target="_blank">
              <img src={isvg} alt="" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSLjipbYcJixWsZu_TeW49g"
              target="_blank"
            >
              <img src={ysvg} alt="" />
            </a>
          </div>

          <div className="post-button">
            <Link to={access?.isLoggedIn ? "/add-post" : "/login"}>
              Post your article
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
