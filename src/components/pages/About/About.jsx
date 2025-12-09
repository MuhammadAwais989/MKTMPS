import React from 'react';
import Card from '../../ui/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <Card className="p-6 mb-8">
          <p className="text-gray-600 mb-6">
            Welcome to Muslim Khatri School, where we are committed to providing quality education 
            and nurturing young minds for a brighter future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/about/facilities" className="block p-4 border rounded-lg hover:bg-blue-50 transition duration-300">
              <h3 className="font-bold mb-2">Facilities for Student</h3>
              <p className="text-sm text-gray-600 mb-2">Modern infrastructure and amenities</p>
              <FaArrowRight className="text-blue-600" />
            </Link>
            
            <Link to="/about/rules" className="block p-4 border rounded-lg hover:bg-green-50 transition duration-300">
              <h3 className="font-bold mb-2">Rule and Regulations</h3>
              <p className="text-sm text-gray-600 mb-2">School policies and guidelines</p>
              <FaArrowRight className="text-green-600" />
            </Link>
            
            <Link to="/about/ptm" className="block p-4 border rounded-lg hover:bg-purple-50 transition duration-300">
              <h3 className="font-bold mb-2">PTM</h3>
              <p className="text-sm text-gray-600 mb-2">Parent-Teacher Meetings</p>
              <FaArrowRight className="text-purple-600" />
            </Link>
            
            {/* Add similar links for other about sections */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;