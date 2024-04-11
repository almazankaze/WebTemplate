import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import "./home.scss";

const Home = () => {
  return (
    <div>
      <Button type="button" buttonType={BUTTON_TYPE_CLASSES.danger}>
        Order Now
      </Button>
    </div>
  );
};

export default Home;
