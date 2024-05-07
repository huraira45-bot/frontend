import React from 'react'
import Faqs from './Faqs'


const Footer = () => {
  return (
  <>
  <div className='bg-[#010E27] relative'>
  <div className='py-6 px-2'>
     <div ><p className='text-xs text-white/60'>See our 1,893 reviews on </p></div>
     <div><p className='text-xs text-white/60'>Buy & sell crypto:
</p></div>
  </div>
  <hr  className='border-b border-[0.25px] border-gray-100/20'/>
<div className='flex flex-col gap-y-2 p-6'>
    <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '>Get It On</button></div>
    <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '>Get It On</button></div>
    <div className='w-[90%] cursor-pointer text-white mx-auto rounded-lg bg-[#142444] flex justify-center items-center'><button className='p-2 text-base '>Get It On</button></div>

</div>

<Faqs/>

<div className='py-12 px-2 bg-[#0B172F]'>
<div><p className='text-xs text-white/50'>© 2018-2024 SimpleSwap</p></div>
<div className='flex justify-between'>
    <div>icon</div>
    <div>icon</div>
    <div>icon</div>
    <div>icon</div>
    <div>icon</div>
    <div>icon</div>
    <div>icon</div>
</div>
</div>

  </div>

  </>
  )
}

export default Footer