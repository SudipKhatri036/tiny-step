import Services from "./components/Services";
import MissionVision from "./components/MissionVission";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AboutTherapist from "./components/AboutTherapist";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <Hero />

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      <section>
        <AboutTherapist />
      </section>
      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Contact Us Section */}
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}
