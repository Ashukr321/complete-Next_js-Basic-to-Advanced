import React from 'react'

const layout = ({children}:{
  children:React.ReactDOM
}) => {
  return (
    <div>
      <h1>product layout</h1>
     <main>{children}</main> 
    </div>
  )
}

export default layout
