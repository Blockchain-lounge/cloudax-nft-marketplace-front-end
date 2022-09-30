import CoinIcon from "../../atoms/vectors/coin-icon";
import "./hero-card-style.scss";

const HeroCard = ({ img, title, price }) => {
  return (
    <div className="hero-card-wrapper">
      <img src={img} alt={title} />
      <span className="title">{title}</span>
      <div className="flex items-center">
        <CoinIcon />
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default HeroCard;
