import HomeSection from "./HomeSection";

import "./home.scss";

const Home = () => {
  return (
    <div className="container page-container">
      <HomeSection sectionTitle="Discover" />
      <HomeSection sectionTitle="Products" />
      <HomeSection sectionTitle="Gallery" />
    </div>
  );
};

export default Home;
