import React from 'react';
import HeaderComponent from '../sections/HeaderComponent';
import { 
  FaGraduationCap, 
  FaLightbulb, 
  FaHeart, 
  FaStar, 
  FaQuoteLeft,
  FaAward,
  FaUserTie,
  FaChalkboardTeacher
} from 'react-icons/fa';
import { founders } from '../../utils/constant';

// Icon mapping for dynamic icon rendering
const iconComponents = {
  FaGraduationCap: FaGraduationCap,
  FaLightbulb: FaLightbulb,
  FaUserTie: FaUserTie,
  FaHeart: FaHeart
};

const OurFounder = () => {
  // Function to get icon component
  const getIconComponent = (iconName) => {
    return iconComponents[iconName] || FaGraduationCap;
  };

  return (
    <>
      <HeaderComponent title="Our Founder"/>

      <section className="min-h-screen -translate-y-28 bg-linear-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg mb-6">
              <FaChalkboardTeacher className="text-3xl text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Visionaries</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The pioneering minds who transformed a vision into a thriving educational institution
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center gap-6">
              <div className="w-8 h-1 bg-linear-to-r from-blue-400 to-transparent"></div>
              <FaStar className="text-yellow-500 text-xl" />
              <div className="w-8 h-1 bg-linear-to-l from-blue-400 to-transparent"></div>
            </div>
          </div>

          {/* Founder Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {founders.map((item, index) => {
              const IconComponent = getIconComponent(item.iconName);
              
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                >
                  {/* Background Decoration */}
                  <div className="absolute inset-0 bg-linear-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Section with Image */}
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="relative mx-auto -mt-8 mb-4">
                      <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden bg-linear-to-br from-blue-100 to-indigo-100">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            // Hide the image and show icon instead
                            e.target.style.display = 'none';
                            const parent = e.target.parentElement;
                            const iconElement = document.createElement('div');
                            iconElement.className = 'w-full h-full flex items-center justify-center';
                            const icon = document.createElement('div');
                            icon.className = `text-5xl ${item.color}`;
                            // Create React element for icon
                            // For React, we need to handle this differently
                            iconElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="${item.color} text-5xl">
                                  ${item.iconName === 'FaGraduationCap' ? '🎓' : 
                                    item.iconName === 'FaLightbulb' ? '💡' : 
                                    item.iconName === 'FaUserTie' ? '👔' : 
                                    item.iconName === 'FaHeart' ? '👤' : '👤'}
                                </div>
                              </div>
                            `;
                            parent.appendChild(iconElement);
                          }}
                        />
                      </div>
                      
                      {/* Icon Badge */}
                      <div className="absolute -bottom-2 right-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-blue-100">
                        <IconComponent className={`text-2xl ${item.color}`} />
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="px-6 pb-4 text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <div className="inline-block px-4 py-1.5 bg-linear-to-r from-blue-50 to-indigo-50 rounded-full mb-4 border border-blue-100">
                        <span className="text-blue-700 font-semibold text-sm">
                          {item.role}
                        </span>
                      </div>

                      {/* Description */}
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-2 left-0 text-blue-200 text-xl" />
                        <p className="text-gray-600 leading-relaxed text-sm pl-6">
                          {item.desc}
                        </p>
                        <FaQuoteLeft className="absolute -bottom-2 right-0 text-blue-200 text-xl transform rotate-180" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Decorative Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>


          {/* Quote Section */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <FaQuoteLeft className="text-5xl text-blue-200 mx-auto mb-6" />
              <blockquote className="text-2xl font-light text-gray-700 italic mb-6">
                "Education is not the filling of a pail, but the lighting of a fire. 
                We strive to ignite curiosity, passion, and purpose in every student."
              </blockquote>
              
            </div>
          </div>
        </div>
      </section>

      {/* Add some custom styles for better responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .grid-cols-4, .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default OurFounder;