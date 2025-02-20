import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Hero = () => {
  const [vedioSrc,setVedioSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

// Handle Vedio Resizing accorrding to screen
  const handleVedio = ()=>{
    if(window.innerWidth < 760){
      setVedioSrc(smallHeroVideo)
    }else{

setVedioSrc(heroVideo)
    }
  }
// UseEFfect-
  useEffect(() => {
window.addEventListener('resize',handleVedio);
    return () => {
      window.removeEventListener('resize',handleVedio)
    }
  }, )
  
// Using Gsap
  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:2,
    });

    gsap.to('#cta',{
      y:-50,
      opacity:1,
      delay:2,
      
    })

  })
  return (
    <section className='w-full nav-height relative'>
      
<div className='h-5/6 w-full flex-col flex-center'>
<p id='hero' className=' hero-title text-3xl text-white'>iPhone 15 Pro</p>
{/* Hero-Vedio-Section */}
<div className='md:w-10/12 w-9/10'>
<video className=' pointer-events-none'  mute autoPlay key={vedioSrc} playsInline={true}>
  <source src={vedioSrc} type='video/mp4' />
</video>
</div>
</div>
{/* Buy-Section */}
<div id='cta' className='flex flex-col mt-6 translate-y-25 items-center opacity-0'>
  <a href="#highlights" className='btn'>Buy</a>
  <p className='text-normal text-xl'>From $199/month or $999</p>
</div>
    </section>
  )
}

export default Hero
