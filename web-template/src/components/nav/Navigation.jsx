import { Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import "./nav.scss";

const Navigation = () => {
  return (
    <Fragment>
      NavBar
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
