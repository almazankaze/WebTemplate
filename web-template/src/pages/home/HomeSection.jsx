import SectionHeader from "../../components/section-header/SectionHeader";

const HomeSection = ({ sectionTitle = "Home Section" }) => {
  return (
    <section>
      <SectionHeader title={sectionTitle} />
    </section>
  );
};

export default HomeSection;
