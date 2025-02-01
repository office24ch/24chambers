import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./aboutUs.css"; // CSS

// import appData
import { teamCounselData } from "../../../appData";

// import Images
import image1 from "/Images/about/Picture1.jpg";
import image2 from "/Images/about/Picture2.jpg";
import image3 from "/Images/about/Picture3.png";
import image4 from "/Images/about/Picture4.png";
import image5 from "/Images/about/Picture5.png";

const AboutUs = () => {
  useEffect(() => {}, [window.scrollTo(0, 0)]);

  return (
    <div className="aboutUs">
      <div className="aboutUs_wrapper">
        <main className="aboutUs_main">
          <div className="leadership_intro">
            <div className="div_wrapper">
              <p>
                24 Chambers is a law firm providing services across a range of
                core practice areas. With its Head Office in New Delhi, the firm
                is well-positioned to serve clients across India and is
                committed to providing the highest level of service.
              </p>
              <br />
              <p>
                We believe in building strong relationships based on trust,
                communication, and dedication to achieving our clients' goals.
                Our team works closely with clients to develop and implement
                customised legal strategies to secure the best possible
                outcomes.
              </p>
            </div>
          </div>

          <section className="leadership">
            <div className="section_detail one">
              <div className="section_image_info">
                <h1 className="about_section_title">
                  THE FIRM AND ITS BEGINNINGS
                </h1>

                <p>
                  <span>
                    The present law firm “24 Chambers” originates with the
                    foundation laid by Late Shri S.C. Nigam, Advocate, who set
                    up and established his chamber at 24, Jangpura 'A', Mathura
                    Road New Delhi in 1975.
                  </span>
                  <span>
                    Shri S.C. Nigam attained the degree of Bachelor of Arts
                    (Commerce Group). and LL.B. Thereafter, he enrolled as an
                    Advocate with the Bar Council of Delhi in the year 1958. He
                    joined the chambers of Late Shri Shiv Narain Shankar who was
                    later elevated as a Judge, Delhi High Court. He was also
                    associated with other eminent jurists like Late Shri Sardar
                    Bahadur.
                  </span>
                  <span>
                    Shri S.C. Nigam was a renowned expert in Civil Laws with a
                    specialised practice in Property Law and Electricity Laws.
                    He was the Standing Counsel and Legal Advisor for New Delhi
                    Municipal Committee (now, New Delhi Municipal Council).
                  </span>
                </p>
              </div>

              <img src={image1} alt="about us image" />
            </div>

            <div className="section_detail two">
              <div className="section_image_info">
                <p>
                  <span>
                    Mr Nigam built a reputation and practice rooted in
                    integrity, expertise and steadfast commitment to clients.
                    From its humble beginnings to its current evolution, 24
                    Chambers stands as a testament to the enduring legacy of
                    Late Shri S.C. Nigam, Advocate.
                  </span>
                  <span>
                    Over the years, the chamber evolved and adapted to the
                    changing legal landscape while remaining rooted in the
                    principles upon which it was founded. Now a Partnership
                    Firm, 24 Chambers continues to build upon the strong
                    foundations laid over five decades ago. The firm is
                    dedicated to providing personalized attention, and solutions
                    by representing clients in a rapidly evolving legal
                    environment.
                  </span>
                  <span>
                    As we look to the future, we remain steadfast in our
                    commitment to upholding excellence and service that have
                    defined 24 Chambers since its inception.
                  </span>
                </p>
              </div>

              <img src={image2} alt="about us image" />
            </div>
          </section>

          <section className="about_founder">
            <h1 className="about_section_title">THE LEADERSHIP</h1>
            <Link to="/profile/atul-nigam">
              <div className="about_founder_card">
                <img src={image3} alt="team image" />

                <div className="about_card_info">
                  <div className="about_card_name">Mr Atul Nigam</div>
                  <div className="about_card_title">Founder, 24 Chambers</div>
                </div>
              </div>
            </Link>
          </section>

          <section className="about_team">
            <h1 className="about_section_title">THE TEAM</h1>
            <div className="about_team_cards">
              <Link to="/profile/tanvi-nigam">
                <div className="team_card_item">
                  <img src={image4} alt="team image" />

                  <div className="about_card_info">
                    <div className="about_card_name">Ms Tanvi Nigam</div>
                    <div className="about_card_title">Partner, 24 Chambers</div>
                    <div className="about_card_expertise">
                      <span>Expertise:</span> Civil, Commercial, Arbitration,
                      Insurance and Trade Law
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/profile/animesh-upadhyay">
                <div className="team_card_item">
                  <img src={image5} alt="team image" />

                  <div className="about_card_info">
                    <div className="about_card_name">Mr Animesh Upadhyay</div>
                    <div className="about_card_title">Partner, 24 Chambers</div>
                    <div className="about_card_expertise">
                      <span>Expertise:</span> Criminal Law
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <section className="counsel_section">
            <h1 className="about_section_title">OF COUNSELS</h1>
            <div className="counsel_cards">
              {teamCounselData.map((card) => (
                <div key={card.id} className="counsel_card_item">
                  <div className="counsel_img">
                    <img src={card.image} alt="counsel image" />
                  </div>

                  <div className="about_card_info">
                    <h4 className="about_card_name">{card.name}</h4>
                    <div className="about_card_expertise">
                      <span>Expertise: </span>
                      {card.expertise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
