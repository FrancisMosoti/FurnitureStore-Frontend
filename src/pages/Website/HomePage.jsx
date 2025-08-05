import { Hero } from "../../App";
import Overview from "../../Sections/Overview";
import Testimonials from "../../Sections/Testimonials";
import WhyChooseUs from "../../Sections/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Overview />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default HomePage;
