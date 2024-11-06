
const layout = ({children,team,user,notification}:{
  children:React.ReactNode,
  team:React.ReactNode,
  user:React.ReactNode,
  notification:React.ReactNode
}) => {
  return (
    <div>
      <main>
       {children}
      </main>
      <div>
        {team}
      </div>
      
      <div>
        {user}
      </div>

      <div>
        {notification}
      </div>

    </div>
  )
}

export default layout
