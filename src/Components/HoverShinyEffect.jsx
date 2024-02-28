import { useEffect, useRef } from 'react';
// import styles from '../Styles/Styles.scss';
import '../Styles/Styles.scss'

function HoverShinyEffect({ color }) {
  const containerRef = useRef(null);

  useEffect(() => {
    function mouseMoveEvent(e) {
      const { x } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty('--px', e.clientX - x);
      color && containerRef.current.style.setProperty('--color', color);
    }
    containerRef.current.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
    };
  });

  return <div ref={containerRef} className="shiny_boi"></div>;
}

export default HoverShinyEffect;
