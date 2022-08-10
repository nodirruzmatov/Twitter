import { NavLink } from "react-router-dom"
import "./index.scss"

import home from "../../assets/images/home.png"
import explore from "../../assets/images/explore.png"
import notification from "../../assets/images/notification.png"
import messages from "../../assets/images/messages.png"
import bookmarks from "../../assets/images/bookmarks.png"
import lists from "../../assets/images/lists.png"
import profil from "../../assets/images/profile.png"
import more from "../../assets/images/more.png"


const Navbar = ()=>{

  return <>
    <nav className="nav pt-6">
      <ul className="nav_list font-[600] list-none">

        <li className="nav__item">
          <NavLink to="/" className={" font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={home} width={24} height={24} alt="home" /> Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/explore" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={explore} width={24} height={24} alt="explore" />Explore</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/notification" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={notification} width={24} height={24} alt="notification" />Notification</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/messages" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={messages} width={24} height={24} alt="messages" />Messages</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/bookmarks" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={bookmarks} width={24} height={24} alt="bookmarks" />Bookmarks</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/lists" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={lists} width={24} height={24} alt="lists" />Lists</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/profil" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={profil} width={24} height={24} alt="Profil" />profil</NavLink>
        </li>
        
        <li className="nav__item">
          <NavLink to="/more" className={"font-semibold text-[18px] leading-[24px] font-[Noto Sans] flex items-center"}><img className="mr-5" src={more} width={24} height={24} alt="more" />More</NavLink>
        </li>
        

      </ul>

      <button className="nav_btn mt-[30px] px-[90px] py-4 rounded-[28px] bg-[#1D9BF0] font-bold text-[18px] leading-[24px] font-[Noto Sans] text-white">Tweet</button>
    </nav>
  </>

}

export default Navbar