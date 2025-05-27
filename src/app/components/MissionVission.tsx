import { Target, Eye, Heart, Star, Users, Shield } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-manrope">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto animate-fade-in font-inter">
            Creating a nurturing, inclusive space where every child is empowered
            through small, meaningful steps toward their fullest potential
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 animate-fade-in hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-manrope">Our Vision</h3>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed font-inter">
              To create a nurturing, inclusive space where every child is
              empowered through small, meaningful steps toward their fullest
              potential – emotionally, socially and academically. We envision a
              world where every child with special needs can thrive and reach
              their unique goals.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 animate-fade-in hover-scale">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-manrope">Our Mission</h3>
            </div>
            <p className="text-lg text-blue-100 leading-relaxed font-inter">
              To support and empower children with special needs through expert,
              personalized therapy in Speech, Occupational, Behavioral and
              Special Education services. We work hand in hand with families to
              help children make lasting progress, one step at a time.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12 animate-fade-in font-manrope">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Compassion",
                description: "Caring with empathy and understanding",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Family-Centered",
                description: "Supporting the whole family unit",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Excellence",
                description: "Highest quality therapy services",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Safe Environment",
                description: "Child-friendly, secure spaces",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 font-inter">
                  {value.title}
                </h4>
                <p className="text-blue-200 font-inter">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
