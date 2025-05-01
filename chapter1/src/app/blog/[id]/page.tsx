import React from 'react'
import { notFound } from 'next/navigation'

type Propsparsm = {
  params: {
    id: string
  }
}

const Page: React.FC<Propsparsm> = ({ params }) => {
  const idNum = parseInt(params.id)
  // parseInst is use for parse the string into number 
  // isNaN
  if (isNaN(idNum) || idNum > 10) {
    notFound()
  }

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}

export default Page
