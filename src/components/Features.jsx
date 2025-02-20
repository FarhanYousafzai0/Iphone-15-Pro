import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsap('#features-title', { y: 0, opacity: 1 });

    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      {
        scrub: 5.5,
        trigger: '.g_grow',
        start: 'top 80%',
        end: 'bottom 20%',
      }
    );

    gsap.to('#exploreVideo', {
        scrollTrigger: {
            trigger: '#exploreVideo',
            toggleActions: 'play pause reverse restart',
            start: '-10% bottom',
          },
      onComplete: () => {
        videoRef.current.play();
      }
    });

    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 2,
    });
  }, []);

  return (
    <section className="w-full h-full bg-[#101010] common-padding">
      <div className="screen-max-width">
        <div className="mt-12 w-full">
          <h1 id="features-title" className="section-heading">Explore the features</h1>
        </div>

        {/* Features-text */}
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mt-32 mb-24 pl-20">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in <br />
              titanium.
            </h2>
          </div>
        </div>

        {/* Features-Video */}
        <div className="flex-center flex-col sm:px-10">
          <div className="relative h-[50vh] w-full flex items-center">
            <video
              className="object-center object-cover w-full h-full"
              autoPlay
              muted
              playsInline
              ref={videoRef}
              id="exploreVideo"
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col w-full relative">
            <div className="feature-video-container">
              <div className="overflow-hidden flex-1 h-[50vh]">
                <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
              </div>
              <div className="overflow-hidden flex-1 h-[50vh]">
                <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
              </div>
            </div>
            <div className="feature-text-container">
              <div className="flex-1 flex-start">
                <p className='feature-text g_text'>
                  iPhone 15 Pro is a {''}
                  <span className='text-white'>
                    The iPhone 15 Pro is a groundbreaking device featuring an aerospace-grade titanium design, making it lighter, stronger, and more durable than ever.
                  </span>
                  Powered by the A17 Pro chip, the first 3nm processor, it delivers unmatched speed, efficiency, and gaming performance with hardware-accelerated ray tracing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
