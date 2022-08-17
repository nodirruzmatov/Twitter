import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"


Header

function App() {

  const back = useNavigate()

  const user ={
    userNmae: 'admin123',
    password: '123456'
  }

  const auth = (param)=>{
    (param.userNmae === user.userNmae && param.password === user.password) ? back("/") : back("login")
  }

  const {pathname} = useLocation()

  return <>

    {(pathname === "/login") ? "" : <Header />}
    <Main auth={auth}/>
  </>
}

export default App
