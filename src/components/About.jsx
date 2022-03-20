import React from 'react';
import bg1 from './../assets/bg1.svg';
import signature from './../assets/Signature.svg';

export default function About() {
  return (
    <div className='flex flex-col'>

     <h2 className='font-bold text-[70px]  sm:text-[80px] leading-[120px] text-[#999999]'>About</h2>

     <p className='text-[18px] leading-[36px] text-[#6D6D6D] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Ultrices eros in cursus turpis massa tincidunt dui ut. Blandit massa enim nec dui nunc. Mi quis hendrerit dolor magna eget est lorem. In tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet. Ultrices eros in cursus turpis massa tincidunt dui ut. Blandit massa enim nec dui nunc. Mi quis hendrerit dolor magna eget est lorem. In tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>

     <div className='flex flex-col relative space-y-[42px] mt-[60px] '>

       <div className='md:absolute w-[300px] md:w-[400px] h-[293px] bg-[#FFE8E8] right-[5%] top-[-15%]  md:top-[1%] lg:top-[40%] static '>
         <div className='flex flex-col space-y-[20px] ml-[35px] mt-[44.5px]'>
           <div className='flex flex-col'>
             <h3 className='font-medium text-[16px] leading-[24px] text-[background: #7E7C7C] opacity-[60%] tracking-[4px] pb-1'>EMAIL</h3>
             <h3>johndoe@example.com</h3>
           </div>
           <div className='flex flex-col'>
             <h3 className='font-medium text-[16px] leading-[24px] text-[background: #7E7C7C] opacity-[60%] tracking-[4px] pb-1'>ROLE</h3>
             <h3>Frontend Developer</h3>
           </div>
           <div className='flex flex-col'>
              <h3 className='font-medium text-[16px] leading-[24px] text-[background: #7E7C7C] opacity-[60%] tracking-[4px] pb-1'>PHONE</h3> 
              <h3>(+987) 987 654 32</h3>
           </div>
          </div> 
       </div>

       <img alt='background image' src={bg1}  />

       <div className='w-[250px] md:w-[500px]'><p className='text-[18px] leading-[36px] text-[#6D6D6D] mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p></div>

     </div>

     <div className='flex flex-col space-y-[34px] mt-[35px]'>
         <p className='text-[18px] leading-[36px] text-[#6D6D6D] mt-3'>Nec feugiat in fermentum posuere urna nec tincidunt. Vitae suscipit tellus mauris a diam. Ultrices mi tempus imperdiet nulla malesuada. Suspendisse ultrices gravida dictum fusce ut placerat orci. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Tristique sollicitudin nibh sit amet commodo. Et odio pellentesque diam volutpat commodo. Aliquam etiam erat velit scelerisque in dictum non consectetur. Rhoncus urna neque viverra justo. Urna cursus eget nunc scelerisque viverra mauris. Odio euismod lacinia at quis. Eu nisl nunc mi ipsum faucibus vitae aliquet.  Lectus arcu bibendum at varius vel pharetra vel turpis nunc. </p>
         <img className='ml-2'  alt='background img' src={signature} width="110"/>

     </div>


    </div>
  )
}
