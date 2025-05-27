import { Users, Heart, Star, Award } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-manrope">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              At Tiny Step Therapy Centre, we are passionate about helping
              children with special needs to grow emotionally, socially and
              developmentally in a warm welcoming environment. Through
              personalized behavioural therapy, speech and occupational therapy
              and special education we support every child&apos;s unique
              journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By working hand-in-hand with families, we believe every tiny step
              leads to big milestones. The center is child-focused,
              family-centred and believes in celebrating every small milestone
              in a child&apos;s developmental journey as every tiny step they
              take brings them closer to greater confidence, independence and
              joy.
            </p>
          </div>

          <div>
            <Image
              src="/images/about-us.png"
              alt="Children Image"
              width={500}
              height={600}
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-manrope">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family-Centered",
                description: "We work hand-in-hand with families",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Compassionate Care",
                description: "Warm and welcoming environment",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Individualized Plans",
                description: "Tailored intervention for each child",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Therapist",
                description: "Certified and experienced professional",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group hover-scale">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 font-inter">
                  {feature.title}
                </h4>
                <p className="text-gray-600 font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
