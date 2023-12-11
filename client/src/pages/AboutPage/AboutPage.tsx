import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WorkSection from "../../components/WorksSection/WorkSection";
import ApproachSection from "../../components/ApproachSection/ApproachSection";

// import 'bootstrap/dist/css/bootstrap.min.css';


const AboutPage: React.FC = () => {

  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ApproachSection />
    </div>
  );
};


export default AboutPage;