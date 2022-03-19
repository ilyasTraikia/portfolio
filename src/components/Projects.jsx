import React from 'react';
import SubComp1 from './subComp1';
import {frontendprojects,fullstackprojects,androidprojects} from './../constants/data/projects';
import { useState } from "react";

export default function Projects() {

  const [data, setData] = useState(frontendprojects);

  const [currentpage,setCurrentpage] = useState(1);
  

  var pagenumber = Math.ceil(data.length /3);



  function filterArray(element,index,array) {
     var Index = index+1;
       if((Index-currentpage) <= (currentpage*2)) {
         return element;
       }
  }

  function pageNumbers() {
    const row = [];
    for (var i = 0; i < pagenumber; i++) {
      var num = pagenumber-i;
      row.push(<button className='border-2' key={i} onClick={() => console.log(num) }>{pagenumber-i}</button>);
    }
    return row;
  }

  function changePage(pagenumber) {
         console.log(pagenumber);
  }

   function select() {
     var index = document.getElementById('select').selectedIndex;
      switch (index){
      case 0:
         setData(frontendprojects);
      break;

      case 1:
         setData(fullstackprojects);
      break;

      case 2: 
        setData(androidprojects);
      break;
      }

        

   }

  return (
    <div className='flex flex-col space-y-[52px]'>

          <h2 className='font-bold text-[70px]  sm:text-[80px] leading-[120px] text-[#999999]'>Projects</h2>

          <div className='max-w-[500px] mx-auto border-2 pr-2 '>
           <select name="" id="select" className=' px-3 py-5 text-[20px] outline-none' onChange={select}>
             <option value="" selected>font-end projects</option>
             <option value="">full-stack projects</option>
             <option value="">android projects</option>
           </select>
          </div>  


           {
             data.filter(filterArray).map( (project,index,array) => (
          
           
            <SubComp1  title={project.title} img={project.img} description={project.description} index= {index}/> 
                
             ))

           }
          <div className='flex flex-row space-x-8 mx-auto'>
           {  pageNumbers() }
          </div>


          

    </div>
  )
}
