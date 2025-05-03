"use client"
import { useEffect, useState } from 'react';

import useDebounce from '@/hooks/useDebounce'
const Debouncing = () => {
 const [search,setSearch] = useState("");
 const debounceSearch  = useDebounce(search,2000);

 useEffect(()=>{
  // call the api 
 },[debounceSearch])


  return (
    <div>
      <h1 className='text-center mt-8' >Debouncing in the javascript </h1>
      <ol className='p-4 mt-4 bg-white text-black rounded'>
        <p className='text-center mb-2'>Uses Case of the Debouncing </p>
        Debouncing is a programming pattern used to limit the number of times a function is executed over time,
        specially typing,scrolling
        <li>Api Call on user input</li>
        <li>search input filtering</li>
        <li></li>
        <li></li>
        <li></li>
      </ol>

      <input type="text" onChange={(e)=>{setSearch(e.target.value)}}  value={search} className='w-full bg-white mt-4   text-black rounded border-2  p-2' />

    </div>
  )
}

export default Debouncing
