
"use client"
import React from 'react'

type ClientComponent={
  name:string;
  age:number;
  children?:React.ReactNode;
}
const ClientComp:React.FC<ClientComponent>= ({name,age,children}) => {
  return (
    <div>
      <h1>this is the client component {name} {age}</h1>
      {children}
    </div>
  )
}

export default ClientComp
