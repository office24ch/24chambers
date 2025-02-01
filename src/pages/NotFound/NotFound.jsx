import { Link } from "react-router-dom";

import "./notFound.css"; // CSS

const NotFound = () => {
  return (
    <div className="notfound_wrapper">
      <div className="notfound_big">404</div>

      <p className="notfound_info">
        <span>404</span> Sorry, we couldn't find this page.
      </p>

      <Link to="/">
        Go to homepage <i className="fa-solid fa-house" />
      </Link>
    </div>
  );
};

export default NotFound;
