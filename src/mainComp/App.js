import './App.css';
import {Navbar,Home,Work,Projects,About} from '../components';




function App() {
  return (
    
      <div className='max-w-full mx-[90px]'>

        <div className='md:absolute top-[60.5px] right-[100px] mt-3 md:mt-0 mx-auto '>
         <Navbar/>
        </div>

        <div className='mt-[184px]'>
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
    
  );
}

export default App;
