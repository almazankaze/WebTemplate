import SectionHeader from "../../components/section-header/SectionHeader";

const HomeSection = ({ children, sectionTitle = "Home Section" }) => {
  return (
    <section id={sectionTitle}>
      <SectionHeader title={sectionTitle} />
      {children}
    </section>
  );
};

export default HomeSection;
