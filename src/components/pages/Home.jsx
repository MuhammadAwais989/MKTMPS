import React from 'react';
import Hero from '../sections/Hero';
import Events from '../sections/Events';
import AboutSection from '../sections/About';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { 
  FaUserGraduate, 
  FaCalendarAlt, 
  FaChalkboardTeacher,
  FaQuoteLeft,
  FaArrowRight
} from 'react-icons/fa';
import Counter from "../sections/Counter"
import VisionMissionWithIcons from '../sections/VisionMission';
import GallerySlider from '../sections/GallerySlider';
import CallToEnroll from './CallToEnroll';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <VisionMissionWithIcons />
      {/* <Events /> */}
      <GallerySlider />
      <Counter />
      <CallToEnroll />
      
   


    </div>
  );
};

export default Home;