import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, schoolInfo } from '../../utils/constant';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaSchool,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFootballBall
} from 'react-icons/fa';

const Footer = () => {
  const SocialIcon = ({ icon }) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebook className="w-5 h-5" />;
      case 'twitter':
        return <FaTwitter className="w-5 h-5" />;
      case 'instagram':
        return <FaInstagram className="w-5 h-5" />;
      case 'youtube':
        return <FaYoutube className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const LinkIcon = ({ name }) => {
    switch (name) {
      case 'Home':
        return <FaSchool className="w-4 h-4" />;
      case 'About Us':
        return <FaChalkboardTeacher className="w-4 h-4" />;
      case 'Academics':
        return <FaGraduationCap className="w-4 h-4" />;
      case 'Campus':
        return <FaSchool className="w-4 h-4" />;
      case 'Contact Us':
        return <FaChalkboardTeacher className="w-4 h-4" />;
      case 'Events':
        return <FaFootballBall className="w-4 h-4" />;
      default:
        return <FaSchool className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{schoolInfo.name}</h3>
            <p className="text-gray-300 mb-4">{schoolInfo.description}</p>
            <p className="text-gray-400 text-sm">Established: {schoolInfo.established}</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition duration-200 flex items-center"
                  >
                    <LinkIcon name={link.name} />
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
                {footerLinks.contactInfo.address}
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 shrink-0" />
                {footerLinks.contactInfo.phone}
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 shrink-0" />
                {footerLinks.contactInfo.email}
              </li>
              <li className="flex items-center">
                <FaClock className="w-5 h-5 mr-3 shrink-0" />
                {footerLinks.contactInfo.timing}
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              {footerLinks.socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Stay connected with us for latest updates and news.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;