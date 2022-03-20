import React from 'react';
import SubComp1 from './subComp1';
import {frontendprojects,fullstackprojects,androidprojects} from './../constants/data/projects';
import { useState,useEffect } from "react";

export default function Projects() {

  const [data, setData] = useState(frontendprojects);

  const [currentpage,setCurrentpage] = useState(1);

  const [array,setArray] = useState([]);
  

 

    useEffect(
      ()=> {
        var pagenumber = Math.ceil(data.length /3);
        const row = [];

        for (var i = 0; i < pagenumber; i++) {
          var num = pagenumber-i;
          row.push(num);
        }
        setArray(row);
        setCurrentpage(1);
      },[data]
    ) 

   

  /* function filterArray(element,index,array) {
     var Index = index+1;
       if(Index <= (currentpage*3) && Index > ((currentpage -1) *3)) {
         return element;
       }
  }
  */

  /*  for 2 projects only
    function filterArray(element,index,array) {
     var Index = index+1;
       if(Index <= (3*currentpage) && Index >= ((currentpage*3) / 2)) {
         return element;
       }
  } */


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

      default:
        setData(frontendprojects);

      }

        

   }

  return (
    <div className='flex flex-col space-y-[52px]'>

          <h2 className='font-bold text-[70px]  sm:text-[80px] leading-[120px] text-[#999999]'>Projects</h2>

          <div className='max-w-[500px] mx-auto border-2 pr-2 '>
           <select name="" id="select" className=' px-3 py-5 text-[20px] outline-none' onChange={select}>
             <option value="" selected>front-end projects</option>
             <option value="">full-stack projects</option>
             <option value="">android projects</option>
           </select>
          </div>  


           {
             data.slice(3*(currentpage-1),3*(currentpage-1+1)).map( (project,index,array) => (
          
           
            <SubComp1  title={project.title} key={index} img={project.img} description={project.description} index= {index}/> 
                
             ))

           }
          <div className='flex flex-row space-x-8 mx-auto'>
           { array.map((element)=> (
              <button onClick={()=> {setCurrentpage(element)}}>{element}</button>
           )) }
           
          </div>


          

    </div>
  )
}
