import React from 'react';
import Reaction from './components/Reaction.jsx'
import Intake from './components/Intake.jsx'
import Cravings from './components/Cravings.jsx'
import Notes from './components/Notes.jsx'
import Waterintake from './components/Waterintake.jsx';

const App=()=>{
  return <div className='flex flex-col min-h-screen bg-gray'>
  <span className='text-2xl text-center font-extrabold m-1'>Today</span>
  <Reaction/>
  <Waterintake/>
  <Intake/>
  <Cravings/>
  <Notes/>
  <div className='flex justify-center'>
    <button className='text-white font-extrabold bg-pink-600 rounded-full w-[90vw] m-3 py-1'>Submit</button>
  </div>
  </div>
}

export default App;