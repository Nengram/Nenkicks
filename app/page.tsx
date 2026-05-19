

import About from "./_components/About/About";
import Footer from "./_components/Header/Footer";
import { CommerceHero } from "./_components/Hero/commerce-hero";
import FeatureCarousel from "./_components/Hotspot/feature-carousel";
import Signup from "./_components/Signup/Signup";


export default function Home() {
  return (
    <div>
      <CommerceHero/>
      
      <FeatureCarousel/>
      <About/>
      <Signup/>
      <Footer/>
    </div>
  );
}
