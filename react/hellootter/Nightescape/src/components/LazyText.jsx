import React, { useEffect, useRef, useState } from 'react';
import './LazyText.css';

const LazyText = ({ children, className = '', threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;
    const currentElement = elementRef.current;
    if (!currentElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]); 
  return (
    <div
      ref={elementRef}
      className={`lazy-text ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default LazyText;