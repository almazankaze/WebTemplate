import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import { APP_PATH } from "../../utils/paths";

import "./error-page.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  const goToContactHandler = () => {
    navigate(APP_PATH.general.contact);
  };

  return (
    <section className="container error-container">
      <div className="error-text-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-message">OOPS! PAGE NOT FOUND</h2>
        <h4 className="error-desc">
          Sorry, the page you're looking for does not exist. If you think
          something is broken, report a problem.
        </h4>
      </div>
      <div className="error-btns">
        <Button className="long-btn" type="button" onClick={goToHomeHandler}>
          Go to Home
        </Button>
        <Button
          className="long-btn"
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.clear}
          onClick={goToContactHandler}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
