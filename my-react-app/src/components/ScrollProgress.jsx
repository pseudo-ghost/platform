import React, { useState, useEffect } from 'react';

function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // how much user scrolled
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // total scrollable height
    const scrollPercent = (scrollTop / docHeight) * 100; // convert to percentage
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ ...styles.progressBar, width: `${scrollWidth}%` }} />
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '4px', // thickness of the line
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fbbf24', // yellow color
    transition: 'width 0.2s ease-out',
  },
};

export default ScrollProgress;
