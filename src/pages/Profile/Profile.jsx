import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./profile.css"; // CSS

//import appData
import { profileData } from "../../../appData";

const Profile = () => {
  const [currentProfile, setCurrentProfile] = useState({});
  const { name } = useParams();

  useEffect(() => {
    setCurrentProfile(
      name === "atul-nigam"
        ? profileData[0]
        : name === "tanvi-nigam"
        ? profileData[1]
        : profileData[2]
    );

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="profile">
      <main>
        <div className="profile_top">
          <div className="profile_top_wrapper">
            <div className="profile_image">
              <img src={currentProfile?.image} alt="profile image" />
            </div>

            <div className="profile_info">
              <div className="profile_name_title">
                <div className="profile_name">{currentProfile?.name}</div>
                <div className="profile_title">{currentProfile?.title}</div>
              </div>

              <div className="profile_contact">
                {/* check is phone number is present */}
                {currentProfile?.phone && (
                  <div className="profile_phone">
                    <i className="fa-solid fa-phone" />
                    {currentProfile?.phone}
                  </div>
                )}

                <div className="profile_email">
                  <i className="fa-solid fa-envelope" /> {currentProfile?.email}
                </div>
                <a
                  href={currentProfile?.linkedin}
                  className="profile_linkedin"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>

              {/* check is practice area is present */}
              <div className="profile_practice_special">
                {currentProfile?.practice && (
                  <div className="profile_expertise">
                    <span>Practice Areas: </span>
                    {currentProfile?.practice}
                  </div>
                )}

                {/* check is specialization is present */}
                {currentProfile?.specialization && (
                  <div className="profile_special">
                    <span>Specialization: </span>
                    {currentProfile?.specialization}
                  </div>
                )}

                {/* check is expertise is present */}
                {currentProfile?.expertise && (
                  <div className="profile_expertise">
                    <span>Expertise: </span>
                    {currentProfile?.expertise}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="profile_bottom">
          <div className="profile_details">
            {currentProfile?.details?.map((detail) => (
              <p key={detail.id}>{detail.text}</p>
            ))}
          </div>

          {/* check is membership is present */}
          {currentProfile?.membership && (
            <div className="profile_memebership">
              <h3>Membership:</h3>
              <ol>
                {currentProfile?.membership?.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ol>
            </div>
          )}

          {/* check is awards is present */}
          {currentProfile?.awards && (
            <div className="profile_award">
              <h3>Awards and Recognition: </h3>
              {currentProfile?.awards}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
