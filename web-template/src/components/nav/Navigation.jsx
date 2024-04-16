import { Fragment, useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";

import { APP_PATH } from "../../utils/paths";

import MenuIcon from "@mui/icons-material/Menu";

import MiddleNav from "./MiddleNav";

import "./nav.scss";
import ScrollToAnchor from "../../utils/ScrollToAnchor";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const [isTopPage, setIsTopPage] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleNavIsTop = () => {
      window.pageYOffset > 10 ? setIsTopPage(false) : setIsTopPage(true);
    };

    window.addEventListener("scroll", handleNavIsTop);

    return () => {
      window.removeEventListener("scroll", handleNavIsTop);
    };
  }, []);

  useEffect(() => {
    dispatch(setIsMenuOpen(false));
  }, [pathname]);

  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <Fragment>
      <nav className={isTopPage ? "navbar" : "navbar navbar-scrolling"}>
        <div className="navbar-left">
          <Link to={APP_PATH.root} className="navbar-logo-container">
            <h2>ChatCord</h2>
          </Link>
        </div>

        <MiddleNav />

        <div className="navbar-right">
          <div className="nav-menu-icon">
            <MenuIcon className="material-icon" onClick={toggleIsMenuOpen} />
          </div>
        </div>
      </nav>
      <ScrollToAnchor />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
