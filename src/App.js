import './App.css';
import { useState } from 'react';
function App() {

  // const [flipped, setFlipped] = useState(false);
 

  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);
  const [flipped4, setFlipped4] = useState(false);
  const [flipped5, setFlipped5] = useState(false);
  const [flipped6, setFlipped6] = useState(false);



  // const [flipped, setFlipped] = useState(Array(6).fill(false));

  
  const handleClick1 = () => {
    setFlipped1(!flipped1);
  };
  const handleClick2 = () => {
    setFlipped2(!flipped2);
  };const handleClick3 = () => {
    setFlipped3(!flipped3);
  };const handleClick4 = () => {
    setFlipped4(!flipped4);
  };const handleClick5 = () => {
    setFlipped5(!flipped5);
  };const handleClick6 = () => {
    setFlipped6(!flipped6);
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
      
        

    <div className='bg-cover flex flex-col items-center justify-center '>
              <div className='grid lg:grid-cols-3 gap-12'>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
                <div className='hover:scale-110 transition-all duration-300 h-80 w-80 bg-babyyellow border-4 border-black cursor-pointer flex flex-col items-center justify-center text-center'>
                  <h1>Word 1</h1>
                </div>
              </div>
            </div>  
      </section>
    </div>
  );
}

export default App;
