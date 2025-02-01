import "./hamburger.css"; // CSS

const Hamburger = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      className={`hamburger_wrapper ${mobileMenu && "active"}`}
      onClick={() => setMobileMenu(!mobileMenu)}
    >
      <div className="ham_icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
