import './App.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Work from '../components/Work';

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


      </div>
    
  );
}

export default App;
