import React from 'react'

const Waterintake=()=>{
    return(
        <div className='flex flex-col'>
            <span className='text-xl font-extrabold m-1 mt-3'>Water Intake</span>
            <div className='flex justify-between font-light text-lg m-1 mt-3'>
                <span>Daily goal</span>
                <span>1.8L/3L</span>
            </div> 
            <div className='absolute h-2 ml-1 mt-22 w-[98vw] z-0 rounded-full bg-gray-200'></div>
            <div className='relative h-2 ml-1 w-[58vw] z-10 rounded-full bg-black'></div>
            <span>💧</span>
        </div>
    )
}

export default Waterintake; 