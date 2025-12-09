import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Optimized scroll detection with debouncing
  useEffect(() => {
    let timeoutId;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Set new timeout for scroll end detection
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Show/hide button logic
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY < lastScrollY ? 'up' : 'down';
      
      if (currentScrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced smooth scroll with progress indicator
  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const duration = 800; // milliseconds
    const startTime = performance.now();

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = easeOutExpo(progress);
      
      window.scrollTo(0, startPosition * (1 - easeProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Calculate progress indicator (optional visual feedback)
  const getScrollProgress = () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = (window.scrollY / totalScroll) * 100;
    return Math.min(currentProgress, 100);
  };

  // Button styles with dynamic animations
  const buttonStyles = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: isHovered ? '#2563eb' : '#1d4ed8',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    cursor: 'pointer',
    boxShadow: isHovered 
      ? '0 8px 25px rgba(29, 78, 216, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.1)' 
      : '0 6px 20px rgba(29, 78, 216, 0.3)',
    fontSize: '24px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: visible ? 'translateY(0)' : 'translateY(100px)',
    opacity: visible ? 1 : 0,
    overflow: 'hidden',
    outline: 'none',
    pointerEvents: visible ? 'auto' : 'none',
  };

  // Pulsing animation effect
  const pulseStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    animation: isScrolling ? 'pulse 2s infinite' : 'none',
  };

  // Progress circle styles
  const progressCircleStyles = {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    borderRadius: '50%',
    background: `conic-gradient(#3b82f6 ${getScrollProgress()}%, transparent 0%)`,
    zIndex: -1,
    opacity: 0.3,
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0.5;
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .back-to-top-arrow {
            animation: bounce 2s infinite;
            transition: transform 0.3s ease;
          }
          
          .back-to-top-arrow:hover {
            animation: none;
            transform: translateY(-2px);
          }
        `}
      </style>
      
      <button
        onClick={scrollToTop}
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top"
        title="Back to top"
      >
        {/* Progress circle */}
        <div style={progressCircleStyles} />
        
        {/* Pulsing effect */}
        {isScrolling && <div style={pulseStyles} />}
        
        {/* Arrow with bounce animation */}
        <div className="back-to-top-arrow" style={{
          position: 'relative',
          zIndex: 1,
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'transform 0.2s ease'
        }}>
          ↑
        </div>
        
        {/* Ripple effect on click */}
        <div style={{
          position: 'absolute',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          transform: isHovered ? 'scale(1.2)' : 'scale(0)',
          width: '100%',
          height: '100%',
          transition: 'transform 0.3s ease',
          pointerEvents: 'none',
        }} />
      </button>
    </>
  );
};

export default BackToTop;