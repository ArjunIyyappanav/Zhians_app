import React from 'react';

const Cravings=()=>{
    const option=['Salty','Sweet','Spicy','Savoury','Sour'];
    return(<div className='font-extrabold'>
    <span className="text text-1xl m-1 mt-3">Cravings</span>
    <ul>
        {option.map((item)=>
         <li key={item} className='text text-[1em] mt-2 pl-[0.4em]'><input type='checkbox'/><label className='pl-[0.5em]'>{item}</label></li>
        )}
    </ul>
    </div>)
}

export default Cravings;