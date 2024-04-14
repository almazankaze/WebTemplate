import HomeSection from "./HomeSection";

import "./home.scss";

const Home = () => {
  return (
    <div className="container page-container">
      <HomeSection sectionTitle="Discover" />
      <HomeSection sectionTitle="Safety" />
      <HomeSection sectionTitle="Support" />
      <HomeSection sectionTitle="Blog" />
      <HomeSection sectionTitle="Careers" />
    </div>
  );
};

export default Home;
