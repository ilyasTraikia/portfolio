import React from 'react'

export default function Footer() {
  return (
    <div className='h-[208px] w-full bg-[#D8D8D8] opacity-[0.4] text-center relative'>
       <div className='absolute top-[50%] left-[50%] m-0 aClassForCentering flex flex-col space-y-[16px]'>
         <h5 className='text-[#000000] text-opacity-100 text-[18px] leading-[36px]'>Designed in figma. With love.</h5>
         <h5 className='text-[black]  text-opacity-100  text-[18px] leading-[36px]'>John Doe • 2020</h5>
       </div>  
    </div>
  )
}
