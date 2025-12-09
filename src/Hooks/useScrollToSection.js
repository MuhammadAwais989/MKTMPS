import { gsap } from 'gsap';

const useScrollToSection = (exploreBtnRef) => {
  const handleExploreClick = () => {
    // Button animation
    if (exploreBtnRef.current) {
      gsap.to(exploreBtnRef.current, {
        scale: 0.9,
        duration: 0.15,
        yoyo: true,
        repeat: 1
      });
    }
    
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

  return handleExploreClick;
};

export default useScrollToSection;