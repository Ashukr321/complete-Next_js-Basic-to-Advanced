import React from 'react'

const page = ({params}:{
  params:{
    productId:string
  }
}) => {

  return (
    <div>
      <h1>product {params.productId} details</h1>
    </div>
  )
}

export default page
