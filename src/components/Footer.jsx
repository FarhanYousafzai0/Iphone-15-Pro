import React from 'react'

const Footer = () => {
  return (
    <section className='py-5 px-5 md:px-10'>
      <div className="screen-max-width">
     <p className='text-sm text-[gray] font-semibold '>More ways to shop {''} <span className='text-underline text-blue-800'>
        Find an Apple Store
        </span> or  <span className='text-underline text-blue-800'>
      other retailer.
        </span> <br /> Or call 00000099</p>
   
   
<div className='bg-neutral-600 h-[1px] my-4 w-full'></div>

<div className="flex flex-col md:flex-row md:items-center justify-between">
<p className='text-[gray] text-sm'>Copyright 2024 Apple inc.ALl right reserved.</p>

<div className="flex items-center gap-4 whitespace-nowrap">
<p className='text-[gray] text-sm '>Privacy Policy |</p>
<p className='text-[gray] text-sm'>Terms of use  |</p>
<p className='text-[gray] text-sm'>Sales Policy |</p>




</div>
</div>
      </div>
    </section>
  )
}

export default Footer
