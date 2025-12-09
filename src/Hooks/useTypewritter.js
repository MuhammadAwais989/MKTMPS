// hooks/useTypewriter.js
import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer;

    const handleType = () => {
      const fullText = text;

      const current = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(current);
      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && current === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && current === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleType, 500);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, text]);

  return displayText;
};

export default useTypewriter;
