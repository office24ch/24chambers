import "./contact.css"; // CSS

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <section className="contact_section" id="contact">
      <main>
        <SectionHeader
          title="Contact Us"
          subtitle="Get in Touch"
          color="light"
        />

        <div className="contact_wrapper">
          <div className="contact_top">
            <div className="contact_card_city">New Delhi</div>

            <div className="contact_cards">
              <div className="contact_card_item">
                <div className="contact_card_office">Head Office</div>
                <div className="contact_card_address">
                  <a
                    href="https://maps.app.goo.gl/Riib6HBiFkLDm2Jm8"
                    aria-label="google maps"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot" />
                    24 Jangpura ‘A’, First Floor, Mathura Road, New Delhi –
                    110014
                  </a>
                </div>
                <div className="contact_card_phone">
                  <a href="tel:+919910597272" aria-label="phone number">
                    <i className="fa-solid fa-phone" /> +91 9910597272
                  </a>
                </div>
                <div className="contact_card_email">
                  <a
                    href="mailto:office@24chambers.in"
                    aria-label="email address"
                  >
                    <i className="fa-solid fa-envelope" />
                    office@24chambers.in
                  </a>
                </div>
              </div>

              <span className="card_divider"></span>

              <div className="contact_card_item">
                <div className="contact_card_office">Chamber</div>
                <div className="contact_card_address">
                  <a
                    href="https://maps.app.goo.gl/fBf4b3MHNCsWGPZj9"
                    aria-label="Delhi address"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot" />
                    217, Block ‘S’, High Court of Delhi, Sher Shah Road, New
                    Delhi – 110003
                  </a>
                </div>
                <div className="contact_card_phone">
                  <a href="tel:+911121410192" aria-label="phone number">
                    <i className="fa-solid fa-phone" />
                    +91 11-21410192
                  </a>
                </div>
                <div className="contact_card_email">
                  <a
                    href="mailto:office@24chambers.in"
                    aria-label="email address"
                  >
                    <i className="fa-solid fa-envelope" />
                    office@24chambers.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_bottom">
            <div className="contact_card_city">Rajasthan</div>

            <div className="contact_cards">
              <div className="contact_card_item">
                <div className="contact_card_office">Jaipur</div>
                <div className="contact_card_address">
                  <a
                    href="http://maps.google.com/?q=House no -322 Ganesh Nagar Vistar Near Kardhani Kalwar Road,
                    Jhotwara Jaipur -302012"
                    aria-label="Jaipur address"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot" />
                    House no -322 Ganesh Nagar Vistar Near Kardhani Kalwar Road,
                    Jhotwara Jaipur -302012
                  </a>
                </div>
                <div className="contact_card_phone">
                  <a href="tel:+919910597272" aria-label="phone number">
                    <i className="fa-solid fa-phone" /> +91 9910597272
                  </a>
                </div>
                <div className="contact_card_email">
                  <a
                    href="mailto:office@24chambers.in"
                    aria-label="email address"
                  >
                    <i className="fa-solid fa-envelope" />
                    office@24chambers.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
