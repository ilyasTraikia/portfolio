import './App.css';
import {Navbar,Home,Work,Projects,About, Footer} from '../components';




function App() {
  return (
    <div className='flex flex-col'>
      <div className='max-w-full mx-[90px]'>
            
        <div className='absolute top-0 right-0 w-[1059px] h-[713px] bg-[#D8D8D8] opacity-[0.22] z-[-1]'></div>

        <div className='md:absolute top-[60.5px] right-[100px] mt-3 md:mt-0 mx-auto '>
         <Navbar/>
        </div>

        <div className='mt-[184px] z-10'>
         <Home />
        </div>

        <div className='mt-[100px]'>
          <Work />
        </div>

        <div className='mt-[100px]'>
          <Projects />
        </div>

        <div className='mt-[103px]'>
          <About /> 
        </div>

        

      </div>


       <div className='mt-[100px]'>
          <Footer />
        </div>

     </div>   


    
  );
}

export default App;
