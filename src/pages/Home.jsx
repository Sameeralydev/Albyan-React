import HeroNavbar from "../layout/navbar/HeroNavbar";
import StickyNavbar from "../layout/navbar/StickyNavbar";
import HeroSection from "../home/HeroSection";
import FeatureSection from "../home/FeatureSection";
import TestimonialSection from "../home/TestimonialSection";
import Teachers from "../home/Teachers";
import WelcomeSection from "../home/WelcomeSection";
import Convey from "../home/convey/Convey.jsx";
import StudentFeatureSection from "../home/StudentFeatureSection.jsx";
import EducationLayout from "../home/EducationLayout.jsx";
import HeroCartoonCloud from "../home/HeroCartoonCloud.jsx";
export default function Home() {
  return (
    <>
      <HeroNavbar />
      <StickyNavbar />
      <HeroSection />
      <Convey />
      <WelcomeSection/>
      <FeatureSection />
      <Teachers />
      <StudentFeatureSection />
      <EducationLayout />
      <HeroCartoonCloud />
      <TestimonialSection />
    </>
  );
}
