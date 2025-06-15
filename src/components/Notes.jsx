import React from 'react';

const Notes=()=>{
    return(
        <div className='flex flex-col font-extrabold'>
        <span className='text-xl m-1 mt-3'>Notes</span>
        <textarea className='bg-gray-200 w-90 h-[10em] m-2 p-2 rounded-md' placeholder="Add notes"></textarea>
        </div>
    );
}

export default Notes;