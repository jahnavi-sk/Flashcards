import './App.css';
import 'boxicons'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    // Fetch cards from the API
    axios.get('/api/cards')
      .then((response) => {
        setCards(response.data); // Save data to state
        console.log("rsp=", response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the cards!", error);
      });
  }, []);

  const handleClick = (index) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };
  
  // const cards = [
  //   { word: 'Implacable', definition: 'Incapable of being pacified.', type:'ADJ', example:'Madame Defarge was the implacable enemy of the Evermonde family' },
  //   { word: 'Irrevocable', definition: 'Unalterable, Irreversible', type:'ADJ', example:'As Sue dropped the letter into the mailbox, she suddenly had seconf thoughts and wanted to take it back, but she could not; her action was irrevocable.' },
  //   { word: 'Anarchist', definition: 'A person who seeks to overturn the established government; advocate of abolishing authority',type:'ADJ', example:'Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.' },
  //   { word: 'Panache', definition: 'Flair; Flamboyance', type:'N', example: 'Many perfomers imitate Noel Coward, but few have his panache and sense of style.'},
  //   { word: 'Mogul', definition: 'A powerful person.', type:'ADJ', example:'The oil moguls made great profits when the price of gasoline rose.' },
  //   { word: 'Ramification', definition: 'Branching out; subdivision', type:'N', example:'We must examine all the ramifications of this problem.' },
  // ];

  



  const [currentPage, setCurrentPage] = useState('pg1');

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  function pgChange(){
    document.getElementById('pg1').classList.add('hidden');
    document.getElementById('pg2').classList.remove('hidden');
  }

  function pgChange2(){
    document.getElementById('pg2').classList.add('hidden');
    document.getElementById('pg3').classList.remove('hidden');
  }

  
  

  function goBack1(){
    document.getElementById('pg2').classList.add('hidden');
    document.getElementById('pg1').classList.remove('hidden');
    
  }

  function goBack2(){
    document.getElementById('pg3').classList.add('hidden');
    document.getElementById('pg2').classList.remove('hidden');
    
  }

  // console.log("cards info=", cards[0]);
  return (
    <div>
      <section id='pg1' className={`flex items-center justify-center h-screen ${currentPage === 'pg1' ? '' : 'hidden'}`}>
        <div className="flex flex-col justify-center align-middle bg-babyyellow w-80 sm:w-1/2 h-64 md:h-80 border-4 border-black p-8 rounded-2xl scale-100 transition-all duration-300    cursor-pointer animate-bounce-slow hover:scale-110 hover:bg-yellow-200 hover:border-black " onClick={() => handlePageChange('pg2')}>
          <h1 className='text-5xl lg:text-9xl font-bryndan text-center'>Let's get started!</h1>
        </div>
      </section>

      <section id='pg2' className={`flex flex-col items-center justify-center h-screen ${currentPage === 'pg2' ? '' : 'hidden'}`}>
      
      <div className="hidden xl:block absolute top-4 left-4 bg-pinkbrown w-16 h-14 border-4 border-black  rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={() => handlePageChange('pg1')}>
          <h1 className="text-2xl mt-3 font-bryndan text-center">Back!</h1>
      </div>

      
      {/* <i className='"absolute top-4 left-4 w-10 h-10 bx bx-arrow-back'></i> */}
      <box-icon name='arrow-back' class="block xl:hidden absolute top-2 left-4 w-10 h-10 cursor-pointer" onClick={() => handlePageChange('pg1')}></box-icon>
      <box-icon name='arrow-back' flip='horizontal' class="block xl:hidden absolute top-2 right-4 w-10 h-10 cursor-pointer" onClick={() => handlePageChange('pg3')}></box-icon>
      
      <div className="hidden xl:block absolute bottom-4 right-4 bg-pinkbrown w-16 h-14 border-4 border-black  rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={() => handlePageChange('pg3')}>

          <h1 className="text-2xl font-bryndan text-center mt-3 animate-bounce">Next!</h1>
      </div>

      

        <div className='mt-10 md:mt-0 bg-cover flex flex-col items-center justify-center '>
            <div className='max-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 [perspective:1000px]'>

            {/* <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkrose  px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Anarchist</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300 ">A person who seeks to overturn the established government; advocate of abolishing authority.</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>  */}


      {cards.slice(0, 6).map((card, index) => (
        <div
          key={index}
          className="group h-80 w-80 m-4 [perspective:1000px]"
          onClick={() => handleClick(index)}
        >
          <div
            className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] ${
              flippedCardIndex === index ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            <div className={`absolute inset-0 h-full w-full rounded-xl shadow-xl shadow-black/40 [backface-visibility:hidden] ${
          index % 2 === 0 ? 'bg-rose-300' : 'bg-darkrose'}`}>
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{card.word}</h1>
              </div>
            </div>
            <div className={`absolute inset-0 h-full w-full rounded-xl bg-darkrose px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] ${index % 2 === 0 ? 'bg-lightpinkans' : 'bg-pinkans'}`}>
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">{card.word}</h1>
                <p className="text-sm">{card.type}</p>
                <p className="text-lg hover:scale-110 transition-all duration-300">{card.definition}</p>
                <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                {card.sentence}
                    </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    

            {/* <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Implacable</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-pinkans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Implacable</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Incapable of being pacified</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      Madame Defarge was the implacable enemy of the Evermonde family
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Irrevocable</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-lightpinkans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Irrevocable</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Unalterable, Irreversible</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      As Sue dropped the letter into the mailbox, she suddenly had seconf thoughts and wanted to take it back, but she could not; her action was irrevocable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Mogul</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-pinkans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Mogul</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">A powerful person.</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      The oil moguls made great profits when the price of gasoline rose.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Panache</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-lightpinkans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Panache</h1>
                    <p className="text-sm">N</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Flair; Flamboyance</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      Many perfomers imitate Noel Coward, but few have his panache and sense of style.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Ramification</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-pinkans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Ramification</h1>
                    <p className="text-sm">N</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Branching out; subdivision</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      We must examine all the ramifications of this problem.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
              


                

              </div>
        </div>  
 
      </section>

      <section id='pg3' className={`flex items-center justify-center h-screen ${currentPage === 'pg3' ? '' : 'hidden'}`}>
      <div className="hidden xl:block absolute top-4 left-4 bg-blue_btn w-16 h-14 border-4 border-black rounded-2xl scale-100 hover:bg-sky-300 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={() => handlePageChange('pg2')}>
          <h1 className="text-2xl mt-3 font-bryndan text-center">Back!</h1>
      </div>

      <box-icon name='arrow-back' class="block xl:hidden absolute top-2 left-4 w-10 h-10 cursor-pointer" onClick={() => handlePageChange('pg2')}></box-icon>
      

      

        <div className='mt-10 md:mt-0 bg-cover flex flex-col items-center justify-center '>
            <div className='max-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 [perspective:1000px]'>


            {cards.slice(6, 12).map((card, index) => (
              <div
                key={index+6}
                className="group h-80 w-80 m-4 [perspective:1000px]"
                onClick={() => handleClick(index)}
              >
                <div
                  className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] ${
                    flippedCardIndex === index ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  <div className={`absolute inset-0 h-full w-full rounded-xl shadow-xl shadow-black/40 [backface-visibility:hidden] ${
                index % 2 === 0 ? 'bg-blue_1' : 'bg-blue_2'}`}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">{card.word}</h1>
                    </div>
                  </div>
                  <div className={`absolute inset-0 h-full w-full rounded-xl px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] ${index % 2 === 0 ? 'bg-blue_ans' : 'bg-darkblue_ans'}`}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">{card.word}</h1>
                      <p className="text-sm">ADJ</p>
                      <p className="text-lg hover:scale-110 transition-all duration-300">{card.definition}</p>
                      <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                            Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                          </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_1 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Quotidian</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Quotidian</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Occurring every day; daily.</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      To Philip, each new day of his internship was filled with excitement; he could not dimiss his rounds as merely quotidine routine.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_2 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Tedium</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkblue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Tedium</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300 ">Boredom; Weirdness</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      We hope this radio will help overcome the tedium of your stay in the hospital.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_1 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Vertigo</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Vertigo</h1>
                    <p className="text-sm">N</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Severe dizziness</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                    When you test potential plane pilots for susceptibilty to spells of vertigo, be sure to hand out airbags.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_2 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Waylay</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkblue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Waylay</h1>
                    <p className="text-sm">V</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Ambush; Lie in wait</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      They agreed to waylay their victim as he passed through the dark alley going home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_1 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Wistful</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Wistful</h1>
                    <p className="text-sm">ADJ</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Vaguely longing; Sadly pensive</p>
                    <p className="mt-2 rounded-md py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      With a last wistful galnce at the happy couple dancing in the hall, Sue headed back to her room to study for her exam.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-blue_2 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Zealot</h1>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-darkblue_ans px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Zealot</h1>
                    <p className="text-sm">N</p>
                    <p className="text-lg hover:scale-110 transition-all duration-300">Fanatic; person who shows excessive zeal</p>
                    <p className="mt-2 rounded-md  py-1 px-2 text-sm hover:scale-110 transition-all duration-300">
                      Though Glenn was devout, he was no zealot; he never tried to force his religious beliefs on his friends.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
              


                

              </div>
        </div>  
      </section>
      


      
    </div>
  );
}

export default App;
