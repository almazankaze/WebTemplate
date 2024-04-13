import { useSelector } from "react-redux";

import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";

import "./disablecontainer.scss";

const DisableContainer = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);

  return <div className={isMenuOpen ? "disable-container" : ""}></div>;
};

export default DisableContainer;
