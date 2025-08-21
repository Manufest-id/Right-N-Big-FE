import Hero from "../components/Hero";
import EventSlider from "../components/EventSlider";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Hero />
      <EventSlider />
      <Services />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default Home;
