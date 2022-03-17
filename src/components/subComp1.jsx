import React from 'react';



export default function subComp1(props) {

   if((props.index % 2) == 1) {
    return (
    
      <div className='flex flex-row space-x-[80px]'>
          
          <img className='order-last' src={props.img} width="500px" height="662px"/>

          <div className='flex flex-col space-y-[34px]'>
            <h3 className='font-bold text-[40px]  sm:text-[60px] leading-[90px] text-[#999999]'>{props.title}</h3>
            <p className='text-[18px] leading-[36px] text-[#6D6D6D]'>{props.description}</p> 
         </div>

         </div>

 
)
   } else {
    return (
    
      <div className='flex flex-row space-x-[80px]'>
          
          <img src={props.img} width="500px" height="662px"/>

          <div className='flex flex-col space-y-[34px]'>
            <h3 className='font-bold text-[40px]  sm:text-[60px] leading-[90px] text-[#999999]'>{props.title}</h3>
            <p className='text-[18px] leading-[36px] text-[#6D6D6D]'>{props.description}</p> 
         </div>

         </div>

 
)
   }

  
}
