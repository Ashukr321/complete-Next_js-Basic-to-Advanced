import React from 'react'

type childProps ={
  children:React.ReactNode
}
const Layout:React.FC<childProps>= ({children}) => {
  return (
    <div className='flex h-screen'>
      <div className='bg-white h-full'> 

      sidebar
      </div>
      <div className='flex-1'>
<h1  className='text-center'>header</h1>
<main className='p-2'>

      {children}
</main>
      </div>
    </div>
  )
}

export default Layout
