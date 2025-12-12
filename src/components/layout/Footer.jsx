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
  FaFootballBall,
  FaArrowRight,
  FaHeart,
  FaRegCopyright
} from 'react-icons/fa';

const Footer = () => {
  const SocialIcon = ({ icon, color }) => {
    const baseClass = "w-5 h-5 transition-transform duration-300 group-hover:scale-110";

    switch (icon) {
      case 'facebook':
        return <FaFacebook className={`${baseClass} ${color}`} />;
      case 'twitter':
        return <FaTwitter className={`${baseClass} ${color}`} />;
      case 'instagram':
        return <FaInstagram className={`${baseClass} ${color}`} />;
      case 'youtube':
        return <FaYoutube className={`${baseClass} ${color}`} />;
      default:
        return null;
    }
  };

  const LinkIcon = ({ name }) => {
    switch (name) {
      case 'Home':
        return <FaSchool className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      case 'About Us':
        return <FaChalkboardTeacher className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      case 'Academics':
        return <FaGraduationCap className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      case 'Campus':
        return <FaSchool className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      case 'Contact Us':
        return <FaChalkboardTeacher className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      case 'Events':
        return <FaFootballBall className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
      default:
        return <FaSchool className="w-4 h-4 group-hover:rotate-12 transition-transform" />;
    }
  };

  const socialColors = {
    facebook: 'text-blue-400 group-hover:text-white',
    twitter: 'text-blue-300 group-hover:text-white',
    instagram: 'text-pink-400 group-hover:text-white',
    youtube: 'text-red-400 group-hover:text-white'
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Floating Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-60 h-60 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Information - Enhanced */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
                <FaSchool className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {schoolInfo.name}
              </h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {schoolInfo.description}
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-lg">
              <FaClock className="text-yellow-400 mr-2" />
              <span className="text-sm font-medium">
                Est: {schoolInfo.established}
              </span>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h4 className="font-bold mb-6 text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 p-2 rounded-lg mr-3 transition-all duration-300">
                      <LinkIcon name={link.name} />
                    </div>
                    <span className="flex-1">{link.name}</span>
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Enhanced */}
          <div>
            <h4 className="font-bold mb-6 text-lg relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: footerLinks.contactInfo.address, color: 'text-red-400' },
                { icon: FaPhone, text: footerLinks.contactInfo.phone, color: 'text-green-400' },
                { icon: FaEnvelope, text: footerLinks.contactInfo.email, color: 'text-yellow-400' },
                { icon: FaClock, text: footerLinks.contactInfo.timing, color: 'text-blue-400' }
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className={`${item.color} p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 mr-3 transition-all duration-300`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Newsletter - Enhanced */}
          <div>
            <h4 className="font-bold mb-6 text-lg relative inline-block">
              Follow Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></span>
            </h4>

            <div className="flex space-x-3 mb-6">
              {footerLinks.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group relative"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <SocialIcon icon={social.icon} color={socialColors[social.icon]} />
                    </div>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Copyright - Enhanced */}
        <div className="border-t border-gray-700/50 mt-10 pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
            <p className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <FaRegCopyright className="w-3 h-3 mr-2" />
              {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;