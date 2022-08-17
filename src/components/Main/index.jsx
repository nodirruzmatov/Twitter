import { Routes, Route, useLocation } from "react-router-dom"
import Aside from "../Aside"
import Bookmark from "../Bookmark"
import Explore from "../Explore"
import Home from "../Home"
import Lists from "../Lists"
import Messages from "../Messages"
import More from "../More"
import Notification from "../Notification"
import Profil from "../Profil"
import Login from "../Login"






const Main = ({auth})=> {

  const {pathname} = useLocation()

  return <>

    <main className="main flex ">
      <Routes>
      <Route exact strict path="/login" element={<Login auth={auth} />} />
      <Route sensitive path="/" element={<Home />} />
      <Route exact path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmarks" element={<Bookmark />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/more" element={<More />} />
      <Route path="/profil" element={<Profil />} />

      </Routes>
      
      
      {(pathname==="/login") ? "" : <Aside />}
    </main>
  </>

}

export default Main