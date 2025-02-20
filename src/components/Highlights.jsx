import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VideoCarousal from './VideoCarousal'
const Highlights = () => {

  useGSAP(()=>{
gsap.to('#title',{
  opacity:1,
  y:0,
});
gsap.to('.link',{
  opacity:1,
  y:0,
  duration:1,
  stagger:0.25,
})

  })
  return (
  <>
  <div className="w-screen h-full relative bg-[#101010] common-padding overflow-hidden ">


<div className='screen-max-width'>

<div className='mb-12 md:flex w-full items-center justify-between'>
  <h1 id='title' className='section-heading'>Get the highlights</h1>

  <div className="flex flex-wrap items-center gap-5">
    <p className='link '>Watch the film <img src={watchImg} className='ml-3' alt="watchimg" /></p>
    <p className='link '>Watch the events <img src={rightImg}  className='ml-3' alt="rightimg" /></p>
  </div>
</div>

</div>


<VideoCarousal/>

  </div>
  </>
  )
}

export default Highlights
