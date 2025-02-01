import "./specialCard.css"; // CSS

const SpecialCard = ({ icon, title, subtitle }) => {
  return (
    <div className="specialCard">
      <div className="specialCard_icon_title">
        <i className={icon} />
        <h3>{title}</h3>
      </div>
      <div className="specialCard_subtitle">{subtitle}</div>
    </div>
  );
};

export default SpecialCard;
