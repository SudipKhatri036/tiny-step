import Image from "next/image";
import React from "react";

const AboutTherapist = () => {
  return (
    <div className="  bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-manrope">
            Our Therapist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-20">
          <div className="w-full md:w-6/12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-black font-manrope">
                Ranjita Pradhan
              </h1>
              <p className="text-gray-700 leading-relaxed font-inter">
                A dedicated therapist specializing in working with children with
                special needs particularly those on the Autism spectrum. She
                holds a Master&apos;s degree in Psychology from Bangalore
                University along with certifications as an Autism
                Interventionist and Behavioral therapist.
              </p>
              <p className="text-gray-700 leading-relaxed font-inter">
                Additionally, she holds a Diploma in Counselling equipping with
                a comprehensive understanding of child development and
                therapeutic techniques.
              </p>
              <p className="text-gray-700 leading-relaxed font-inter">
                Her practice focuses on individualized support plans, behaviour
                modification and developmental therapies.
              </p>
              <p className="text-gray-700 leading-relaxed font-inter">
                With a compassionate and individualized approach, she works
                closely with families and educators to create tailored
                intervention plans that foster growth, communication and social
                skills in children. Her commitment is to empower each child to
                reach their full potential in a supportive and inclusive
                environment.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 flex justify-center items-center">
            <Image
              src="/images/therapist.jpg"
              alt="Therapist Image"
              width={800}
              height={400}
              className="w-full rounded-2xl shadow-lg max-h-[600px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTherapist;
