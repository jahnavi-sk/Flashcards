import './App.css';
import 'boxicons'
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserData.js'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useReactTable } from '@tanstack/react-table'

import { 
     useReactTable,
     getCoreRowModel,
     getPaginationRowModel,
     getSortedRowModel
   } from '@tanstack/react-table';

function App() {
  

  const tableInstance = useReactTable({
         columns,
         data,
         getCoreRowModel: getCoreRowModel(),
         getPaginationRowModel: getPaginationRowModel(),
         getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
         // etc.
       });


       columnHelper.accessor('firstName', { //accessorKey
            header: 'First Name',
          }),
          columnHelper.accessor(row => row.lastName, { //accessorFn
            header: () => <span>Last Name</span>,
          })
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
//   const [rowData, setRowData] = useState([
//     { word: 'Tesla', definition: 'definition Y', type: 64950, sentence: "true" },
//     { word: 'Ford', definition: 'F-Series', type: 33850, sentence: "false" },
//     { word: 'Toyota', definition: 'Corolla', type: 29600, sentence: "false" },
//     { word: 'Mercedes', definition: 'EQA', type: 48890, sentence: "true" },
//     { word: 'Fiat', definition: '500', type: 15774, sentence: "false" },
//     { word: 'Nissan', definition: 'Juke', type: 20675, sentence: "false" },
// ]);

// // Column Definitions: Defines & controls grid columns.
// const [colDefs, setColDefs] = useState([
//     { field: 'word' },
//     { field: 'definition' },
//     { field: 'type' },
//     { field: 'sentence' },
// ]);

const defaultColDef = {
    flex: 1,
};

  

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [cards, setCards] = useState([]);
  const [entries, setEntry] = useState([]);


  const [adminMode, setAdminMode] = useState(false);

  const handleAdminClick = () => {
    setAdminMode(true); // Trigger the animations when "Admin" is clicked
  };

  useEffect(() => {
    // Fetch cards from the API
    axios.get('/api/cards')
      .then((response) => {
        setCards(response.data); // Save data to state
        // console.log("rsp=", response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the cards!", error);
      });
  }, []);



  useEffect(() => {
    // Fetch cards from the API
    axios.get('/api/edit')
      .then((response) => {


        const data = response.data;
        const columns = Object.keys(data[0]).map(key => ({ field: key }));
        setColDefs(columns);

        setRowData(data);
        
        // setEntry(response.data); // Save data to state
        console.log("rsp2=", response.data)
        // console.log("response", response)
      })
      .catch((error) => {
        console.error("There was an error editing the cards!", error);
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
{/*       
      <section id='pg1' className={`flex items-center justify-center h-screen ${currentPage === 'pg1' ? '' : 'hidden'}`}>
      <div className=" xl:block absolute top-4 left-4 bg-pinkbrown w-16 h-14 border-4 border-black  rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={() => handlePageChange('login')}>
        <h1 className="text-2xl mt-3 font-bryndan text-center">Admin!</h1>
      </div>
        <div className="flex flex-col justify-center align-middle bg-babyyellow w-80 sm:w-1/2 h-64 md:h-80 border-4 border-black p-8 rounded-2xl scale-100 transition-all duration-300    cursor-pointer animate-bounce-slow hover:scale-110 hover:bg-yellow-200 hover:border-black " onClick={() => handlePageChange('pg2')}>
          <h1 className='text-5xl lg:text-9xl font-bryndan text-center'>Let's get started!</h1>
        </div>
      </section>

      <section id='login' className={`flex flex-row items-center justify-between h-screen ${currentPage === 'login' ? '' : 'hidden'}`}>
       
        <div className="hidden xl:block absolute top-4 left-4 bg-pinkbrown w-16 h-14 border-4 border-black  rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={() => handlePageChange('pg1')}>
              <h1 className="text-2xl mt-3 font-bryndan text-center">Back!</h1>
        </div>
        <div className="flex flex-col justify-center ml-5 items-center bg-babyyellow w-1/2 h-64 border-r-4 border-black p-8 rounded-2xl scale-100 transition-all duration-300 cursor-pointer animate-bounce-slow hover:scale-110 hover:bg-yellow-200 hover:border-black"
        >
          <h1 className='text-5xl lg:text-7xl font-bryndan text-center'>Welcome Back Admin!</h1>
        </div>

       
        <div className="flex flex-col justify-center items-center mr-5 ml-5 w-1/2 h-5/6 bg-snuff border-l-4 border-black p-8 rounded-2xl ">
          <h1 className='text-4xl font-bold mb-10'>Login</h1>
          <form className="flex flex-col w-3/4">
            <label htmlFor="username" className="text-xl mb-2">Username</label>
            <input type="text" id="username" className="p-2 border-2 border-black mb-6 rounded-md" />

            <label htmlFor="password" className="text-xl mb-2">Password</label>
            <input type="password" id="password" className="p-2 border-2 border-black mb-6 rounded-md" />

            <button type="submit" className="mt-4 p-2 bg-yellow-200 border-2 border-black rounded-md hover:bg-yellow-300">
              Submit
            </button>
          </form>
        </div>
      </section>
       */}
{/* 

<section id='pg1' className={`flex items-center justify-center h-screen ${currentPage === 'pg1' ? '' : 'hidden'}`}>
    <div className=" xl:block absolute top-4 left-4 bg-pinkbrown w-16 h-14 border-4 border-black rounded-2xl scale-100 hover:bg-pink-200 hover:scale-110 hover:border-black transition-all duration-300 cursor-pointer flex items-center justify-center" onClick={handleAdminClick}>
      <h1 className="text-2xl mt-3 font-bryndan text-center">Admin!</h1>
    </div>

    <div className={`flex flex-col justify-center align-middle bg-babyyellow h-64 md:h-80 border-4 border-black p-8 rounded-2xl scale-100 transition-all duration-500 ease-in-out transform ${adminMode ? 'w-3/6 md:w-2/6 translate-x-[-10%]' : 'w-80 sm:w-1/2'}`}>
      <h1 className={` font-bryndan text-center transition-all duration-1000 ease-in-out transform  ${adminMode ? 'text-7xl' : 'text-8xl'}`} onClick={() => handlePageChange('pg2')}>
        Let's get started!
      </h1>
    </div>

    <div className={`flex flex-col justify-center items-center w-1/2 h-5/6 bg-snuff border-l-4 border-black p-8 rounded-2xl transition-opacity duration-500 ease-in-out ${adminMode ? 'opacity-100 translate-x-[0%]' : 'opacity-0 translate-x-[100%] hidden'}`}>
      <h1 className='text-4xl font-bold mb-10'>Login</h1>
      <form className="flex flex-col w-3/4">
        <label htmlFor="username" className="text-xl mb-2">Username</label>
        <input type="text" id="username" className="p-2 border-2 border-black mb-6 rounded-md" />

        <label htmlFor="password" className="text-xl mb-2">Password</label>
        <input type="password" id="password" className="p-2 border-2 border-black mb-6 rounded-md" />

        <button type="submit" className="mt-4 p-2 bg-yellow-200 border-2 border-black rounded-md hover:bg-yellow-300">
          Submit
        </button>
      </form>
    </div>
  </section>    */}

{/* 
<section id='admin' className='mt-12 flex flex-col items-center h-screen '>
      
    <div className={`flex flex-col justify-center align-middle items-center bg-pinkans h-48 md:h-80 border-4 border-black p-8 rounded-2xl scale-100 transition-all duration-500 ease-in-out transform ${adminMode ? 'w-3/6 md:w-2/6 translate-x-[-10%]' : 'w-80 sm:w-1/2'}`}>
      <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform text-6xl md:text-8xl `}>
        What's new today?
      </h1>
    </div>

    <div className='mt-8 md:mt-14 flex flex-col md:flex-row justify-evenly gap-8 md:gap-40 '>
      <div className='flex flex-col justify-center align-middle items-center bg-blue_btn border-black p-12 rounded-2xl scale-100 hover:scale-110 transition-all duration-500 ease-in-out' >
        <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform  ${adminMode ? 'text-4xl' : 'text-5xl'}`}>
          Create flashcard
        </h1>
      </div>

      <div className='flex flex-col justify-center align-middle items-center bg-blue_2 border-black p-12 rounded-2xl scale-100 hover:scale-110 transition-all duration-500 ease-in-out' >
        <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform  ${adminMode ? 'text-4xl' : 'text-5xl'}`}>
          Delete flashcard
        </h1>
      </div>
    </div>

    <div className={`mt-10 flex flex-col justify-center align-middle items-center  bg-lightpinkans border-4 border-black p-12 rounded-2xl scale-100 hover:scale-110 transition-all duration-500 ease-in-out`}>
      <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform  ${adminMode ? 'text-4xl' : 'text-5xl'}`}>
       Edit flashcard
      </h1>
    </div>
</section>  */}

{/* 
    <section id='createpg' className='mt-12 flex flex-col items-center   h-screen '>
      <div className={`flex flex-col justify-center align-middle items-center bg-pinkans h-40 w-1/2 border-4 border-black rounded-2xl scale-100 transition-all duration-500 ease-in-out transform `}>
        <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform text-6xl md:text-7xl `}>
          Create Flashcard!
        </h1>
      </div>
      <div className={`mt-8 flex flex-col justify-center align-middle items-start bg-pinkbg h-4/6 w-5/6 border-4 border-black rounded-2xl scale-100 transition-all duration-500 ease-in-out transform `}>
      
      


      <div className='mt-2 ml-6 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Enter word</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='mt-2 ml-6 w-11/12 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Definition</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='mt-2 ml-6 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Type</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='ml-6 mt-2 w-11/12 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl ">Sentence with word</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

            
            
    <div className='flex flex-col align-center justify-center items-center w-full'>
      <div>
      <button type="submit" className="text-3xl font-bryndan flex justify-center items-center mt-8 p-10 h-12 bg-snuff scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  hover:bg-lightpinkans text-center border-2 border-black rounded-md">
        Submit
      </button>
      </div>
      
    </div>
          

      </div>
    </section>  
 */}


<section id='editpg' className='mt-12 flex flex-col items-center   h-screen '>
      <div className={`flex flex-col justify-center align-middle items-center bg-pinkans h-40 w-1/2 border-4 border-black rounded-2xl scale-100 transition-all duration-500 ease-in-out transform `}>
        <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform text-6xl md:text-7xl `}>
          Edit Flashcard!
        </h1>
      </div>
    
      {/* <table className='mt-8 w-3/4 border-collapse border border-black'>
        <thead>
          <tr>
          <th className='border border-black p-2 text-start'>Delete</th>
            <th className='border border-black p-2 text-start'>Edit</th>
            <th className='border border-black p-2 text-start'>Word</th>
            <th className='border border-black p-2 text-start'>Definition</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className='border border-black p-2'>
              <box-icon class="size-10 scale-100 hover:scale-110 transition-all duration-300 cursor-pointer " name='message-alt-x' color='#fb0404' ></box-icon>
              </td>
              <td className='border border-black p-2'>
              <box-icon class="size-10  scale-100 hover:scale-110 transition-all duration-300 cursor-pointer" name='edit-alt' color='green' ></box-icon>
              </td>
              <td className='border border-black p-2'>{entry.word}</td>
              <td className='border border-black p-2'>{entry.definition}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      
      <div className="mt-10 ag-theme-quartz-dark w-2/3 h-80">
            <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
      </div>


 
</section>


{/* 
<section id='editpg2' className='mt-12 flex flex-col items-center   h-screen '>
<div className={`flex flex-col justify-center align-middle items-center bg-pinkans h-40 w-1/2 border-4 border-black rounded-2xl scale-100 transition-all duration-500 ease-in-out transform `}>
        <h1 className={`font-bryndan text-center transition-all duration-1000 ease-in-out transform text-6xl md:text-7xl `}>
          Edit Flashcard!
        </h1>
      </div>
      <div className={`mt-8 flex flex-col justify-center align-middle items-start bg-pinkbg h-4/6 w-5/6 border-4 border-black rounded-2xl scale-100 transition-all duration-500 ease-in-out transform `}>
      
      


      <div className='mt-2 ml-6 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Enter word</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='mt-2 ml-6 w-11/12 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Definition</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='mt-2 ml-6 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl whitespace-nowrap">Type</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

    <div className='ml-6 mt-2 w-11/12 flex flex-row items-center space-x-4'>
      <label htmlFor="username" className="font-bryndan text-6xl ">Sentence with word</label>
      <input type="text" id="username" className="mb-2 p-7 border-2 border-black  rounded-md w-full bg-pinkans" />
    </div>

            
            
    <div className='flex flex-col align-center justify-center items-center w-full'>
      <div>
      <button type="submit" className="text-3xl font-bryndan flex justify-center items-center mt-8 p-10 h-12 bg-snuff scale-100 hover:scale-110 transition-all duration-300 cursor-pointer  hover:bg-lightpinkans text-center border-2 border-black rounded-md">
        Submit
      </button>
      </div>
      
    </div>
          

      </div>
</section> */}





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
