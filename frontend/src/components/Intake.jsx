import React from 'react';

const Intake=()=>{
    return(
        <div className='flex flex-col font-extrabold'>
        <span className='text text-1xl m-1'>What did you eat today?</span>
        <textarea className='bg-gray-200 w-90 h-[10em] max-w-sm m-2 p-2 rounded-md' placeholder='Enter your food intake'></textarea>
        </div>
    )
}
  
export default Intake;
