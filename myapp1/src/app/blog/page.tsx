"use client"
import React from 'react'

const page = () => {
  const num = 1;
  if(num==1){
    throw new Error("error in blog");
  }
  return (
    <div>
      <h1>blog</h1>
      
    </div>
  )
}

export default page
