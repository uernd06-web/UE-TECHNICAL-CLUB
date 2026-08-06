import EcosystemSection from "@/components/HomePage/EcoSystemSection";
import HeroBanner from "@/components/HomePage/Hero";
import LearningGallery from "@/components/HomePage/LearningGallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <HeroBanner></HeroBanner>
    <EcosystemSection></EcosystemSection>
    <LearningGallery></LearningGallery>
    </div>
  );
}
