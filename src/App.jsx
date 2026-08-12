import { useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RouteLine from './components/RouteLine';

export default function App() {
  const pageRef = useRef(null);

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <NavBar />
      <div ref={pageRef} className="relative">
        <RouteLine containerRef={pageRef} />
        <div className="relative z-10">
          <Hero />
          <About />
          <Fleet />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
