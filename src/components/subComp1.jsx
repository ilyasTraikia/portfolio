import React from 'react';



export default function subComp1(props) {

   if((props.index % 2) === 1) {
    return (
    
      /*    impair index , the image is on the right    */

      <div className='flex flex-col items-end  md:flex-row md:items-stretch space-x-[50px] '>
          

          <div className='flex flex-col space-y-[34px] '>
            <div className='flex  justify-center md:justify-end'><h3 className='font-bold text-[40px]  sm:text-[60px] leading-[90px] text-[#999999] '>{props.title}</h3></div>
            <p className='text-[18px] leading-[36px] text-[#6D6D6D] ml-10 md:ml-0'>{props.description}</p> 
         </div>

         <img className='order-last mt-8 md:mt-0' alt='project-pic' src={props.img} width="500px" height="662px"/>

         </div>

 
)
   } else {
    return (
    
      /*   pair index , the image is on the left       */

      <div className='flex flex-col md:flex-row  space-x-[80px]'>
          
          <img className='order-last md:order-first mt-8 md:mt-0  ' alt='project-pic'  src={props.img} width="500px" height="662px"/>

          <div className='flex flex-col space-y-[34px]'>
            <h3 className='font-bold text-[40px]  sm:text-[60px] leading-[90px] text-[#999999]'>{props.title}</h3>
            <p className='text-[18px] leading-[36px] text-[#6D6D6D]'>{props.description}</p> 
         </div>

         </div>

 
)
   }

  
}
