import twitter from "../../assets/images/twitter.svg"
import Navbar from "../Navbar"
import person from "../../assets/images/person.png"

const Header = ()=>{

  return<>
    <header className="header">
      <div className="heder__container container max-w-[300px] w-full h-full mx-auto border-r-[1px] border-[#D8D8D8">

      <img className="pt-8 pb-6" src={twitter} width={40} height={33} alt="logo twitter" />

      <Navbar />

      <div className="flex items-center mt-[260px] pb-[80px]">
        <img src={person} width={50} height={50} alt="person" />
        <div className="ml-[10px] mr-[42px]">
          <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans]">Bobur</p>
          <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans] text-black/60">@bobur_movlonov</p>
        </div>
        <p className="font-black text-[22px]">...</p>
      </div>

      </div>
    </header>
  </>

}

export default Header