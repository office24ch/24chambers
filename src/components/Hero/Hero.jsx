import "./hero.css"; // CSS

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_wrapper">
        <h1 className="hero_title">24 Chambers: Your Trusted Legal Partner</h1>
        <div className="hero_subtitle">
          <p>
            <span>
              24 Chambers is a law firm dedicated to delivering exceptional
              legal expertise and personalized service to clients across a range
              of core practice areas. With its Head Office in New Delhi, the
              firm is well-positioned to navigate the legal landscape and serve
              clients across India.
            </span>
            <span>
              With a team of seasoned lawyers, 24 Chambers provides tailored
              solutions backed by extensive knowledge and experience, ensuring
              clients receive the best possible representation.
            </span>
            <span>
              We believe in building strong relationships based on trust,
              communication, and dedication to achieving our clients&#39; goals.
              Our team works with clients to develop and implement customised
              legal strategies to secure the best possible outcomes.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
