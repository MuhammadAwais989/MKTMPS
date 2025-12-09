import React, { useState, useEffect, useRef } from 'react';
import {stats} from '../../utils/constant'

const NumberStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

 

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-0 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center p-6"
            >
              {/* Main Number */}
              <div className="mb-4">
                <span className="text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {isVisible ? <Counter target={stat.number} /> : '0'}
                </span>
                {stat.suffix && (
                  <span className="text-4xl lg:text-5xl font-bold text-blue-600">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              {stat.label && (
                <div className="mb-2">
                  <span className="text-2xl font-bold text-gray-800">
                    {stat.label}
                  </span>
                </div>
              )}

              {/* Description */}
              <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
                {stat.description}
              </div>

              {/* Bottom Border */}
              <div className="mt-6 w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Component for number animation
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds
  const steps = 60;
  const stepTime = duration / steps;

  useEffect(() => {
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const currentCount = Math.floor(target * progress);
      
      setCount(currentCount);
      
      if (currentStep === steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, stepTime]);

  return <span>{count}</span>;
};

export default NumberStats;