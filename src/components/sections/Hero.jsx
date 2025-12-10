import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaSchool, FaArrowRight, FaStar, FaGraduationCap, FaBookOpen, FaUsers, FaPlay } from 'react-icons/fa';
import { IoIosRibbon } from 'react-icons/io';
import HeroBGVideo from '../../assets/video/HeroBGVideo.mp4'
import HeroBGVideo1 from '../../assets/video/HeroBGVideo1.mp4'
import HeroBGVideo2 from '../../assets/video/HeroBGVideo2.mp4'
import schoolBook from '../../assets/images/5.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


// GSAP plugins register karo
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const videos = [HeroBGVideo, HeroBGVideo1, HeroBGVideo2];
  const [currentVideo, setCurrentVideo] = useState(0);
  
  // Refs for GSAP animation
  const heroRef = useRef(null);
  const schoolIconRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const schoolNameRef = useRef(null);
  const descriptionRef = useRef(null);
  const exploreBtnRef = useRef(null);
  const particlesRef = useRef(null);
  const statsRef = useRef(null);
  const overlayRef = useRef(null);
  const schoolBookRef = useRef(null);

  // Typewriter effect with backspace
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const schoolName = "Muslim Khatri Tameer-e-Millat Public School";

  // Typewriter Effect
  useEffect(() => {
    const handleType = () => {
      const fullText = schoolName;

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, schoolName]);

  // Video Handler
  const handleVideoEnd = () => {
    gsap.to('.video-change', {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        gsap.to('.video-change', { opacity: 1, duration: 0.3 });
      }
    });
  };

  // Scroll Handler
  const handleExploreClick = () => {
    // Button animation
    gsap.to(exploreBtnRef.current, {
      scale: 0.9,
      duration: 0.15,
      yoyo: true,
      repeat: 1
    });
    
    // Simple JavaScript se scroll karo
    const nextSection = document.querySelector('#about-section, #features-section, #mission-section, section:not(.hero)');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Background overlay animation
    tl.fromTo(overlayRef.current,
      { background: "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)" },
      { 
        background: "linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
        duration: 1.5,
        ease: "sine.inOut"
      }
    );

    // School Book GIF animation
    if (schoolBookRef.current) {
      tl.fromTo(schoolBookRef.current,
        {
          scale: 0,
          opacity: 0,
          x: 100,
          rotation: -180
        },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(2.5)",
          delay: 0.5
        }
      );
    }

    // Particle animation
    if (particlesRef.current && particlesRef.current.children) {
      tl.fromTo(particlesRef.current.children,
        {
          scale: 0,
          opacity: 0,
          y: 100
        },
        {
          scale: 1,
          opacity: 0.6,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)"
        },
        "-=1"
      );
    }

    // School icon grand entrance
    tl.fromTo(schoolIconRef.current,
      { 
        scale: 0,
        rotation: -360,
        opacity: 0,
        y: -100
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.8)"
      }
    );

    // Welcome text typewriter effect
    tl.to(welcomeTextRef.current, {
      duration: 0.8,
      text: "Welcome To",
      ease: "power2.out"
    });

    // School name reveal with glow
    tl.fromTo(schoolNameRef.current,
      {
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Description slide up
    tl.fromTo(descriptionRef.current,
      {
        y: 80,
        opacity: 0,
        rotationX: 90
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.2)"
      },
      "-=0.5"
    );

    // Explore button final entrance
    tl.fromTo(exploreBtnRef.current,
      {
        scale: 0,
        opacity: 0,
        y: 50
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "bounce.out"
      }
    );

    // Continuous animations
    gsap.to(schoolIconRef.current, {
      y: -15,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // School Book floating animation
    if (schoolBookRef.current) {
      gsap.to(schoolBookRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    gsap.to(".glow-element", {
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Particle movement
    if (particlesRef.current && particlesRef.current.children) {
      gsap.to(particlesRef.current.children, {
        y: -20,
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(6, 12)",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut"
      });
    }

  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative -translate-y-22 pt-45 w-full h-screen max-sm:h-[90vh] overflow-hidden hero"
    >

      {/* Background Video with Glow Effect */}
      <div className="video-change absolute top-0 left-0 w-full h-full">
        <video
          key={currentVideo}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
      </div>

      {/* Animated Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/20 to-indigo-900/40 mix-blend-overlay"
      ></div>

      {/* Additional Light Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/60"></div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        
        {/* Main Content with Grid Layout */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content - Text and Stats */}
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              

              {/* Welcome Text */}
              <h1 ref={welcomeTextRef} className="max-sm:pt-28 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-white to-blue-100 drop-shadow-2xl">
                {}
              </h1>

              {/* School Name with Typewriter Effect */}
              <h1 ref={schoolNameRef} className="h-44 text-4xl md:text-5xl lg:text-6xl font-black mb-3 min-h-[100px] lg:min-h-[120px] flex items-center justify-center lg:justify-start">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-white to-purple-300 drop-shadow-2xl font-bold typewriter-text leading-tight">
                  {displayText}
                  <span className="typing-cursor">|</span>
                </span>
              </h1>

              {/* Description */}
              <p ref={descriptionRef} className="text-lg md:text-xl lg:text-2xl mb-8 max-sm:mb-0 max-w-2xl leading-relaxed font-medium text-white/90 drop-shadow-lg backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                Nurturing young minds with quality education, moral values,
                and holistic development for a brighter future.
              </p>
              
            </div>

            {/* Right Content - School Book GIF */}
            <div className="lg:w-1/2 flex justify-center items-center  max-sm:mt-0 lg:mt-0">
              <div className="relative ">
                {/* School Book GIF Container */}
                <div 
                  className="relative  max-w-md"
                 >
                  
                  {/* Book GIF */}
                  <div className="relative z-10 w-fit max-sm:-mt-15">
                  <img 
                    src={schoolBook} 
                    alt="School Books Animation"
                    className="w-72 md:w-96 lg:w-[500px] h-auto rounded-2xl opacity-80"
                  />
                </div>
                  
                  <div className="absolute inset-0 border-2 border-transparent rounded-3xl animate-pulse"></div> 
                </div>

                {/* Additional Info */}
                <div className=" text-center -translate-y-10">
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Learning</h3>
                  <p className="text-blue-100 text-sm md:text-base">
                    Modern teaching methods with digital resources
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Explore Button */}
      <div 
        ref={exploreBtnRef}
        className='flex flex-col items-center text-white justify-center text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer group'
        onClick={handleExploreClick}
      >
        <div className='bg-white/20 backdrop-blur-lg cursor-pointer font-bold text-white px-8 py-3 rounded-2xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30 shadow-2xl hover:shadow-3xl mb-3 group-hover:scale-110'>
          EXPLORE
        </div>
        <TiArrowSortedDown className="text-white text-3xl animate-bounce group-hover:scale-125 transition-transform" />
      </div>

      {/* Advanced Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-linear-to-r from-blue-400/40 to-purple-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              rotate: `${Math.random() * 360}deg`,
              animation: `floatShape ${Math.random() * 20 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .typing-cursor {
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;