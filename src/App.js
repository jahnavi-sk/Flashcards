import './App.css';
import { useState } from 'react';
function App() {
  
  function pgChange(){
    document.getElementById('pg1').classList.add('hidden');
    document.getElementById('pg2').classList.remove('hidden');
  }

  function showDef(){
    document.getElementById('word1').classList.add('hidden');
    document.getElementById('def1').classList.remove('hidden');
    // document.getElementById('word1').classList.add('transform [transform:rotateY(180deg)]');
    // document.getElementById('def1').classList.add('text-2xl)]');
    document.getElementById('word1').classList.add('transform', 'y-180');
    document.getElementById('def1').classList.remove('transform', 'y-180');



    // document.getElementById('word1').classList.add('transform:rotateY(180deg)');

  }

  function showWord(){
    document.getElementById('def1').classList.add('hidden');
    document.getElementById('word1').classList.remove('hidden');
    // document.getElementById('word1').classList.remove('transform', 'rotatey');
    // document.getElementById('def1').classList.add('transform', 'y-180');

    // document.getElementById('word1').classList.remove('transform [transform:rotateY(180deg)]');

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
      
      <div onClick={goBack1} className="fixed top-4 left-4 bg-babyyellow w-10 h-10 border-4 border-black p-8 rounded-2xl scale-100 hover:bg-yellow-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer" onClick={pgChange}>
        <h1 className='text-sm font-bryndan text-center'>Back!</h1>
      </div>

        <div className='bg-cover flex flex-col items-center justify-center '>
            <div className='grid lg:grid-cols-3 gap-12 [perspective:1000px]'>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-rose-300 shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="group h-80 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0 h-full w-full rounded-xl bg-darkrose shadow-xl shadow-black/40 [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anarchist</h1>
                  </div>
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Definition</h1>
                    <p class="text-lg">ADJ</p>
                    <p class="text-base">A person who seeks to overturn the established government; advocate of abolishing authority/.</p>
                    <p class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                      Denying she was an anarchist, Katya maintained she wished only to make changes in our government, not to destroy it entirely.
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
