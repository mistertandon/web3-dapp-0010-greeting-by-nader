import { useContext } from "react";
import { Link } from "react-router-dom";
import { WalletContext } from "./../../contexts/WalletProvider.jsx";
import "./Navigation.scss";

const Navigation = ({ parentCss = {} }) => {
  const { checkUserLoginStatus } = useContext(WalletContext);
  const userLoginStatus = checkUserLoginStatus();

  return (
    <>
      {userLoginStatus && (
        <section
          className="routes-section--container"
          style={parentCss}
        >
          <div className="routes-section__link">
            <Link
              className="routes-section__link--nav"
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="routes-section__link">
            <Link
              className="routes-section__link--nav"
              to="/buy-chai"
            >
              Buy Chai
            </Link>
          </div>
          <div className="routes-section__link">
            <Link
              className="routes-section__link--nav"
              to="/donation"
            >
              Donation
            </Link>
          </div>
          <div className="routes-section__link">
            <Link
              className="routes-section__link--nav"
              to="/logout"
            >
              Logout
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Navigation;
