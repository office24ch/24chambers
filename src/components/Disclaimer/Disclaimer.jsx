import { useState } from "react";

// import AppData
import { disclaimerData } from "../../../appData";

import "./disclaimer.css"; // CSS

const Disclaimer = () => {
  const [hide, setHide] = useState(false);

  return (
    <section className={`disclaimer ${hide && "hide"}`}>
      <div className="disclaimer_wrapper">
        <h1 className="disclaimer_title">DISCLAIMER</h1>
        <div className="disclaimer_info">
          <p>
            The rules of the Bar Council of India do not permit the solicitation
            of work or advertising by legal practitioners except as permitted
            under the aforesaid rules. The information displayed on this website
            is solely for informational purposes and should not be interpreted
            as soliciting or advertisement. By accessing the website of 24
            Chambers, you acknowledge that:
          </p>
          <div className="list_items">
            <ul>
              {disclaimerData.map((data) => (
                <li key={data.id}>{data.info}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="disclaimer_button">
          <button onClick={() => setHide(true)}>I Agree</button>
          {/* <button className="decline">Decline</button> */}
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
