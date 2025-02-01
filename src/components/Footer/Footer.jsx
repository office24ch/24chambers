import { Link } from "react-router-dom";

import "./footer.css"; // CSS

// import Images
import logoImage from "/Images/23chambers_logo.jpg";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_top">
          <div className="footer_top_left">
            <div className="footer_logo">
              <img src={logoImage} alt="logo" />
            </div>
            <div className="footer_city">New Delhi | Rajasthan</div>
            <div className="footer_connect">
              <h1>Connect with us:</h1>

              <div className="footer_email_linkedin">
                <span>
                  Email:
                  <a
                    href="mailto:office@24chambers.in"
                    aria-label="email address"
                    className="email"
                  >
                    office@24chambers.in
                  </a>
                </span>
                <a
                  href="https://www.linkedin.com/company/24-chambers/about/?viewAsMember=true"
                  aria-label="linkedin link"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_top_right">
            <p>Access Links</p>
            <div className="footer_top_links_name">
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to="/specialisation">Specialization</Link>
                </li>
                <li>
                  <Link to="/#query">Query</Link>
                </li>
                <li>
                  <Link to="/#locations">Locations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="name">24 Chambers, 2024-2025</div>

          <div className="copyright">
            <span>&#169;</span> All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
