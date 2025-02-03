import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./header.css"; // CSS

// import Components
import Hamburger from "../Hamburger/Hamburger";

// import Images
import logoImage from "/Images/23chambers_logo.jpg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSubLinks, setShowSubLinks] = useState(false);
  const params = useParams();

  const handleLinksClick = (e) => {
    if (e.target.tagName === "A") setMobileMenu(false);
  };

  return (
    <header className={`header_container ${mobileMenu ? "active" : ""}`}>
      <div className="header_wrapper">
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>

        <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

        <div className="header_links" onClick={handleLinksClick}>
          <span>
            <Link to="/about-us">About Us</Link>
          </span>

          <span className="link_separator"></span>
          <span>
            <Link to="/specialisation">Specialisation</Link>
          </span>
          {/* <span>
            <span
              className="specialization"
              onClick={() => setShowSubLinks(!showSubLinks)}
            >
              Specialisation
              <i className="fa-solid fa-caret-down" />
            </span>

            <div className={`header_link_items ${showSubLinks && "show"}`}>
              <Link to="/about-us">Litigation</Link>
              <Link to="/about-us">Dispute Resolution</Link>
            </div>
          </span> */}
          <span className="link_separator"></span>

          <span>
            <Link to="/blogs">Blog & Published Works</Link>
          </span>
          <span className="link_separator"></span>

          <span>
            <Link to="/#contact">Contact Us</Link>
          </span>
          <span className="link_separator"></span>

          <div className="anchor_button">
            <a href="/#query" aria-label="submit your query">
              Submit Your Query
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
