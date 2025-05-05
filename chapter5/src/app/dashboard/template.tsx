import React from 'react'

type propsType = {
  children:React.ReactNode;
}


const DashboardTemplate:React.FC<propsType> = ({children}) => {
  return (
    <div>

      <h1>Dashboard section</h1>
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardTemplate
