import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-800/90 text-white  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-indigo-800/80"></div>

      <div className="text-center max-w-4xl mx-auto px-6 relative z-10 pt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg font-manrope">
          Tiny Step Therapy Center
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in drop-shadow-md font-inter">
          Empowering children with special needs through expert, personalized
          therapy services. Every tiny step leads to big milestones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-scale shadow-lg font-manrope">
            Learn More About Our Services
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover-scale font-manrope">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
