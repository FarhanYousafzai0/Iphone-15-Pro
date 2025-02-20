import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enables smooth scrolling
      lerp: 0.1, // Adjusts the smoothness
      direction: 'vertical',
      smoothTouch: false, // Optional: disable for mobile if needed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Sentry.withProfiler(App);
