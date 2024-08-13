import './App.css';
import { useState } from 'react';
function App() {
  
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
  return (
    <div>
      <section id='pg1' className='flex items-center justify-center h-screen'>
        <div className="flex flex-col justify-center align-middle bg-babyyellow w-1/2 h-80 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-yellow-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer " onClick={pgChange}>
          <h1 className='text-9xl font-bryndan text-center'>Let's get started!</h1>
        </div>
      </section>

      <section id='pg2' className='flex flex-col items-center justify-center h-screen hidden'>
      
      <div className="absolute top-4 left-4 bg-pinkbrown w-10 h-10 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={goBack1}>
          <h1 className="text-lg font-bryndan text-center">Back!</h1>
      </div>

      <div className="absolute bottom-4 right-4 bg-pinkbrown w-10 h-10 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={pgChange2}>
          <h1 className="text-lg font-bryndan text-center">Next!</h1>
      </div>

      

        <div className='bg-cover flex flex-col items-center justify-center '>
            <div className='grid lg:grid-cols-3 gap-12 [perspective:1000px]'>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
            </div>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
            </div>
              


                

              </div>
        </div>  
 
      </section>


      <section id='pg3' className='flex items-center justify-center h-screen hidden'>
      <div className="absolute top-4 left-4 bg-blue_btn w-10 h-10 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-sky-300 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={goBack2}>
          <h1 className="text-lg font-bryndan text-center">Back!</h1>
      </div>

      

      

        <div className='bg-cover flex flex-col items-center justify-center '>
            <div className='grid lg:grid-cols-3 gap-12 [perspective:1000px]'>

            <div className="group h-80 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
            </div>
              


                

              </div>
        </div>  
      </section>
      
    </div>
  );
}

export default App;
