import { MessageSquare, Hand, Heart, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Speech Therapy",
      description:
        "Helping children improve their communication, language and social interaction skills through personalized therapy sessions.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Occupational Therapy",
      description:
        "Developing fine motor skills, sensory integration and independence in daily activities to enhance quality of life.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Behavioral Therapy",
      description:
        "Using evidence-based approaches to support positive behavior, emotional regulation and social development.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Special Education",
      description:
        "Customized learning programs that meet each child's unique needs in an appropriate educational setting.",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-manrope">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            We provide expert, personalized therapy services for children with
            special needs, working hand in hand with families to help children
            make lasting progress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 font-manrope">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed font-inter">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        {/* <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-600">
              Our commitment to excellence and personalized care sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
