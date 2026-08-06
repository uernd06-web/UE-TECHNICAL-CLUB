import AboutBanner from "@/components/about/AboutBanner";
import FeatureCards from "@/components/about/FeatureCards";
import HighlightSection from "@/components/about/HighlightSection";
import React from "react";

const About = () => {
  return (
   <div>
     <AboutBanner></AboutBanner>
    <HighlightSection></HighlightSection>
    <FeatureCards></FeatureCards>
   </div>
  );
};

export default About;