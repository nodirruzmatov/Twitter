import { Routes, Route } from "react-router-dom"
import Aside from "../Aside"
import Bookmark from "../Bookmark"
import Explore from "../Explore"
import Home from "../Home"
import Lists from "../Lists"
import Messages from "../Messages"
import More from "../More"
import Notification from "../Notification"
import Profil from "../Profil"






const Main = ()=> {

  return <>

    <main className="main flex ">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmarks" element={<Bookmark />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/more" element={<More />} />
      <Route path="/profil" element={<Profil />} />

      </Routes>
      
      
      <Aside />
    </main>
  </>

}

export default Main