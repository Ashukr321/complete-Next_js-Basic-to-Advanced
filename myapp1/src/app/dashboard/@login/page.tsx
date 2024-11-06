import React from 'react'

const page = () => {
  return (
    <div className='flex w-full  justify-center items-center h-screen bg-black' >
      <div className=' w-full mx-auto  md:w-1/2 bg-white rounded-sm p-2 md:p-4  '>
        <button className='mx-auto px-10 flex text-white py-3 bg-blue-600'>login</button> 
        <div className='flex gap-3 my-4 items-center text-xl'>
          <label htmlFor="name" className='inline-block'> Name</label>
          <input type="text" className=' w-full px-2 py-2  border-2' placeholder='Enter Your Name' />
        </div>
      </div>
      <button>login</button>
    </div>
  )
}

export default page
