import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./homepage.css"; // CSS

// components
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Query from "../../components/Query/Query";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="homepage_container">
      <Hero />
      <Query />
      <Contact />
    </div>
  );
};

export default Homepage;
