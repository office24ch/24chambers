import { useEffect } from "react";

import "./specialisation.css"; // CSS

// import Components
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SpecialCard from "../../components/SpecialCard/SpecialCard";

// import appData
import { specialData } from "../../../appData";

const Specialisation = () => {
  useEffect(() => {}, [window.scrollTo(0, 0)]);

  return (
    <div className="specialisation">
      <div className="specialisation_wrapper">
        <SectionHeader title="Specialisation" />

        <main>
          {specialData.map((data) => (
            <SpecialCard
              key={data.id}
              icon={data.icon}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Specialisation;
