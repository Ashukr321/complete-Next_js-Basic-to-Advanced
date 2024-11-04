import React from 'react'

const layout = ({children}:{
  children:React.ReactNode;
}) => {
  return (
    <div>
      <h1>layout</h1>
      <main>{children}</main>
    </div>
  )
}

export default layout
