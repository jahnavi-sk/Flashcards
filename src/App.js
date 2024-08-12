import './App.css';
import { useState } from 'react';
function App() {

  // const [flipped, setFlipped] = useState(false);


  const [flipped, setFlipped] = useState(Array(6).fill(false));

  // Function to handle flipping
  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const words = ['Word 1', 'Word 2', 'Word 3', 'Word 4', 'Word 5', 'Word 6'];
  const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];

  const handleClick = () => {
    setFlipped(!flipped);
  };
  
  function pgChange(){
    document.getElementById('pg1').classList.add('hidden');
    document.getElementById('pg2').classList.remove('hidden');
  }

  function goBack1(){
    document.getElementById('pg2').classList.add('hidden');
    document.getElementById('pg1').classList.remove('hidden');
  }
  return (
    <div>
      <section id='pg1' className='flex items-center justify-center h-screen'>
        <div className="flex flex-col justify-center align-middle bg-babyyellow w-1/2 h-80 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-yellow-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer " onClick={pgChange}>
          <h1 className='text-9xl font-bryndan text-center'>Let's get started!</h1>
        </div>
      </section>

      <section id='pg2' className='flex flex-col items-center justify-center h-screen hidden'>
      {/* <div id='backpg1'className="flex flex-col justify-center align-middle bg-babyyellow w-96 h-96 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-white hover:scale-110 hover:border-black transition-all duration-300" onClick={goBack1}>
          <h1 className='text-9xl font-bryndan text-center'>Back</h1>
        </div> */}
        {/* <div className="flex flex-col justify-center align-middle bg-babyyellow w-96 h-96 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-white hover:scale-110 hover:border-black transition-all duration-300">
          <h1 className='text-9xl font-bryndan text-center'>Next page!</h1>
        </div> */}
        {/* <div className="grid grid-cols-3 gap-10 items-center">
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 1</h1>
          </div>
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 2</h1>
          </div>
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 3</h1>
          </div>
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 4</h1>
          </div>
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 5</h1>
          </div>
          <div className='bg-babyyellow w-80 h-80 border-8 border-black p-8 rounded-2xl scale-100'>
            <h1>Word 6</h1>
          </div>
          
        </div> */}
        {/* <div className='bg-cover flex flex-col items-center justify-center '>
          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
          </div>
        </div> */}


{/* <div className='bg-cover flex flex-col items-center justify-center '>
          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
            <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div>
          </div>
        </div>  */}





          {/* <div className='h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
            </div> */}

      
{/* <div className="flip-container" onClick={handleClick}>
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front flex items-center justify-center text-center h-full w-full">
          <h1>Word 1</h1>
        </div>
        <div className="flip-card-back flex items-center justify-center text-center h-full w-full">
          <h1>Word 2</h1>
        </div>
      </div>
    </div> */}

      <div onClick={handleClick}>

        <div className={`flip-card ${flipped ? 'flipped' : ''}`}>

          <div className='flip-card-front h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
              <h1>Word 1</h1>
          </div>

          <div className='flip-card-back h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
            <h1>Word 2</h1>
          </div>

      </div>
      




    </div>

    



        
      </section>
    </div>
  );
}

export default App;
