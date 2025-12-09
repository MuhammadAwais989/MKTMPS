import React from "react";
import schoolBuilding from '../../assets/images/schoolBuilding.jpg'

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="w-full bg-white -translate-y-14 -mt-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
    >
      {/* LEFT SIDE IMAGE */}
      <div className="w-full lg:w-1/2 scale-90 relative h-fit rounded-lg overflow-hidden shadow-lg">
        <img
          src={schoolBuilding} 
          alt="School Building"
          className="w-full h-full object-cover"
        />

      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>

        <div className="w-20 h-1 bg-blue-600 mx-auto lg:mx-0 my-3"></div>

        <p className="text-gray-700 leading-relaxed text-[17px] mt-4">
          Established in Karachi in 1978,{" "}
          <span className="italic font-semibold">The City School</span> is today
          one of the largest private school networks across the globe. Having
          more than 500 schools with over 150,000 students, we continue to
          expand our reach in other countries including United Arab Emirates,
          Malaysia, Philippines, Oman and Saudi Arabia, to meet the demands for
          quality education as well as to ensure a strong global presence.
        </p>

        {/* <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
          LEARN MORE
        </button> */}
      </div>
    </section>
  );
};

export default AboutSection;
