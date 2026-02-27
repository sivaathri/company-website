import { useEffect, useState, useRef } from 'react';

/**
 * useParallaxScroll — returns a ref to attach to a section
 * plus the `offset` in px you can pass into `transform: translateY(${offset}px)`.
 *
 * @param {number} speed  - multiplier: 0.1=slow, 0.5=medium, 1=fast (use negative to invert)
 */
export function useParallaxScroll(speed = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed * -1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

/**
 * useTilt — returns mouse event handlers + tilt transform string
 * for 3D perspective hover effect.
 */
export function useTilt(maxAngle = 10) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(800px) rotateY(${dx * maxAngle}deg) rotateX(${-dy * maxAngle}deg) translateZ(8px)`;
    };

    const handleLeave = () => {
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxAngle]);

  return ref;
}
