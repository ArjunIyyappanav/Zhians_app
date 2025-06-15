import React from 'react'

const Reaction=()=>{
    const reaction=['😍','😊','😑','😢','😡'];
    return(
    <div className='font-extrabold'>
    <span className='text text-1xl m-1'>How are you feeling today?</span>
    <ul className='box flex row'>
        {reaction.map((item)=>
             <li key={item} className='text-xl p-2 border border-gray-400 rounded-lg m-3 focus:ring-red-400'><button aria-label='happy'>{item}</button></li>
        )}
    </ul>
    </div>
    )
}

export default Reaction;