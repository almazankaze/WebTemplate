import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";

import { APP_PATH } from "../../utils/paths";

import "./nav.scss";

const MiddleNav = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <div className={isMenuOpen ? "navbar-middle show" : "navbar-middle"}>
      <Link to={APP_PATH.root} className="mobile-nav-logo">
        <h2>ChatCord</h2>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link className="nav-link" to="/#Discover">
            Discover
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#Products">
            Products
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/#Gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={APP_PATH.general.about}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={APP_PATH.general.contact}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleNav;
