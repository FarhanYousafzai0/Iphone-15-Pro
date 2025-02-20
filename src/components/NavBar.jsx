import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
const NavBar = () => {
  
  return (
    <header className='flex w-full py-5 px-5 sm:px-10 justify-between  '>
      <nav className='flex  screen-max-width  w-full '>
        {/*  Logo*/}
<img src={appleImg} alt="" width={14} height={18} />

{/* Nav-Bar items */}
<div className='flex items-center flex-1 justify-center max-sm:hidden'>

  {["Store","Mac","iPhones","Support"].map((nav)=>(
          <div key={nav} className='px-5 text-sm text-gray-400 hover:text-white transition-all cursor-pointer'>{nav}</div>

  )
   
  )}
</div>

{/* Search and Buy */}
<div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
  <img src={searchImg} alt="searchimg" width={18} height={18} />
  <img src={bagImg} alt="bagImg" width={18} height={18}/>
</div>

      </nav>

      
    </header>
  )
}

export default NavBar
