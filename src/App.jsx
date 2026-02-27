import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

/* ── Custom cursor (desktop only) ── */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring_ = ringRef.current;
    if (!dot || !ring_) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
    };

    const onEnterLink = () => {
      ring_.style.width  = '52px';
      ring_.style.height = '52px';
      ring_.style.borderColor = 'rgba(236,72,153,0.8)';
      dot.style.transform = 'translate(-50%,-50%) scale(0.5)';
    };
    const onLeaveLink = () => {
      ring_.style.width  = '36px';
      ring_.style.height = '36px';
      ring_.style.borderColor = 'rgba(99,102,241,0.6)';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ring_.style.left = `${ring.current.x}px`;
      ring_.style.top  = `${ring.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
