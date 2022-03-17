import React from 'react'

export default function Home() {
  return (


  <div className='flex flex-col space-y-[40px]'> 

    <div className='flex flex-col sm:flex-row md:space-x-[70px]  lg:space-x-[200px]  items-center'>

      <div className='flex flex-col'>

        <h2 className='font-bold text-[70px]  sm:text-[90px] leading-[150px] text-[#999999]'>Hello</h2>
        <div className='flex flex-row space-x-2'>
          <h2 className='font-bold text-[70px] sm:text-[90px] leading-[150px] text-[#999999]'>I'm </h2>
          <h2 className='font-bold text-[70px] sm:text-[90px] leading-[150px] text-[#999999]'> John </h2>
        </div>   
        <h2 className='font-bold  text-[70px] sm:text-[90px] leading-[150px] text-[#999999]'>Doe</h2>
      </div>  

      

      <div>
          <p className='text-[18px] leading-[36px] text-[#6D6D6D]'>A Sydney based frontend designer, working and living in Australia. I love to work on anything code, from designing simple HTML pages to solving complex problems. I love to illustrate as well. Recetly I won the award for best portfolio. Download the CV to know more about my background.</p>

      </div>



    </div>

    <div>
        <button className='px-[50px] py-[25px] bg-[#FFE8E8] font-medium tracking-[6px]'>DOWNLOAD CV</button>
    </div>


  </div>    
  )
}
