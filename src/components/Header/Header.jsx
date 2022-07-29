import "./Header.scss";
import doge from "../../assets/images/doge.jpg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        BrewD
        <span>
          <img src={doge} alt="doge" className="header__image" />
        </span>
        g Catal
        <span>
          <img src={doge} alt="doge" className="header__image" />
        </span>
        gue
      </h1>
    </header>
  );
};

export default Header;
