
const layout = ({children,team,user,notification,login}:{
  children:React.ReactNode,
  team:React.ReactNode,
  user:React.ReactNode,
  notification:React.ReactNode,
  login:React.ReactNode,
}) => {
  const isLogined = true;
  return isLogined?  (
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
  ):(
    <>
    <h1>{login}</h1>
    </>
  )
}

export default layout
