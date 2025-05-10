import { useState, useEffect } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is below 768px (Tailwind's md: breakpoint)
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Handle changes when viewport resizes
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useMobile;