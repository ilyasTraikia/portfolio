import React from 'react';
import SubComp1 from './subComp1';
import {projects} from './../constants/data/projects';

export default function Projects() {



  return (
    <div className='flex flex-col space-y-[52px]'>

          <h2 className='font-bold text-[70px]  sm:text-[80px] leading-[120px] text-[#999999]'>Projects</h2>
           {

             projects.map( (project,index) => (
            
            <SubComp1 title={project.title} img={project.img} description={project.description} index= {index}/>  
             )
             )

           }
         

    </div>
  )
}
