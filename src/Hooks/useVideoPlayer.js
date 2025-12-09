import { useState } from 'react';
import { gsap } from 'gsap';

const useVideoPlayer = (videos) => {
  const [currentVideo, setCurrentVideo] = useState(0);

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

  return {
    currentVideo,
    handleVideoEnd,
    setCurrentVideo
  };
};

export default useVideoPlayer;