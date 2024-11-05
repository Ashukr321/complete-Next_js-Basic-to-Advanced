"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  const orderNow= ()=>
  { 
    router.push('/');
  }
  return (
    <div className='p-10'>
      <h1>welcome to order page </h1>
      <button  onClick={orderNow} className='px-10 py-2 bg-orange-600 text-white'>order Now </button>
    </div>
  )
}

export default Page
