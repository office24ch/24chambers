import { Link } from "react-router-dom";

import "./linkButton.css"; // CSS

const LinkButton = ({ link, text, icon, color = "" }) => {
  return (
    <div className={`linkButton ${color}`}>
      <Link to={link}>
        {text} <i className={icon ? icon : "fa-solid fa-arrow-right"} />
      </Link>
    </div>
  );
};

export default LinkButton;
