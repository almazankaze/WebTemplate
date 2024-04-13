import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";

import { APP_PATH } from "../../utils/paths";

import "./nav.scss";

const MiddleNav = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return (
    <div className={isMenuOpen ? "navbar-middle show" : "navbar-middle"}>
      <ul className="navbar-links">
        <li>
          <Link className="nav-link" to={APP_PATH.general.about}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Discover
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Safety
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/">
            Support
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Careers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleNav;
