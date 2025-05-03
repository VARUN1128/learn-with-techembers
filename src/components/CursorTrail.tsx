import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const trailCount = 12;
    const trailEls: HTMLDivElement[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let coords = Array(trailCount).fill([mouseX, mouseY]);

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function animate() {
      coords = coords.map((c, i) => {
        if (i === 0) return [mouseX, mouseY];
        const [prevX, prevY] = coords[i - 1];
        const [currX, currY] = c;
        const dx = prevX - currX;
        const dy = prevY - currY;
        return [currX + dx * 0.25, currY + dy * 0.25];
      });
      trailEls.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate3d(${coords[i][0]}px, ${coords[i][1]}px, 0)`;
          el.style.opacity = `${1 - i / trailCount}`;
        }
      });
      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Only show on desktop
  if (window.innerWidth < 768) return null;

  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          ref={el => (trailRef.current[i] = el!)}
          className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full z-50"
          style={{
            background: 'radial-gradient(circle, #60a5fa 0%, #6366f1 80%, transparent 100%)',
            filter: 'blur(2px)',
            mixBlendMode: 'lighten',
            transition: 'opacity 0.2s',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail; 