import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>archive mode</h1>
      <Link href={'/dashboard'}>go to default mode</Link>
    </div>
  )
}

export default page
