import React from 'react'

const page = ({params}:{
  params:{
    productId:string,
    reviewId:string
  }
}) => {
  return (
    <div>
      <h1>product {params.productId} review id {params.reviewId}</h1>
    </div>
  )
}

export default page
