import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>default mode</h1>
      <Link href={'/dashboard/archive'}>go to archive mode</Link>
    </div>
  )
}

export default page
