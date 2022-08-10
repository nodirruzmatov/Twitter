import "./index.scss"
import person from "../../assets/images/person.png"
import person2 from "../../assets/images/person2.png"
import person3 from "../../assets/images/person3.png"
import icons from "../../assets/images/icons.png"
import icons2 from "../../assets/images/icons2.png"
import shahlik from "../../assets/images/shashlik.png"

const Home = ()=> {

  return <>
  
    <section className="home">
      <div className="w-[660px]">
        

        <h1 className="home__heading px-5 py-5 border-b-[1px] border-[#D8D8D8] text-[24px] leading-[32px] font-bold w-full max-w-[909px]">Home</h1>

        <ul >
          <li className="px-5 py-[16px] border-b-[1px]">
            <div className="flex items-start mb-[35px]">
              <img src={person} width={60} height={60} alt="person" />
              <p className="ml-[15px] text-[22px] leading-[29px] font-semibold text-[#828282]">What’s happening</p>
            
            </div>
              
            <div className="flex justify-between items-center ml-20">
              <img src={icons} width={200} height={24} alt="icons" />
              <div></div>
              <button className="px-[30px] py-3 rounded-[120px] bg-[#1DA1F2]/40 text-white">Tweet</button>
            </div>
          </li>

          <li className="px-5 py-[16px] border-b-[1px] flex flex-col items-center">
            <div className="flex justify-between mb-[22px]">

              <div className="flex items-start">
                <img src={person2} width={60} height={60} alt="person" />
                <div className="ml-[15px]">
                  <p className="text-4 leading-[27px] font-bold">Designsta <span className="text-[14px] leading-6 text-black/60 font-normal">@inner · 25m</span></p>
                  <p className="text-[14px] leading-6 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique placeat  nulla blanditiis!</p>
                </div>
                
              </div>
              <p className="font-black text-[22px]">...</p>
              
            </div>

            <img src={icons2} width={506} height={22} alt="icons" />

          </li>

          <li className="px-5 py-[16px] border-b-[1px] flex flex-col items-center">
            <div className="flex justify-between mb-[22px]">

              <div className="flex items-start">
                <img src={person3} width={60} height={60} alt="person" />
                <div className="ml-[15px]">
                  <p className="text-4 leading-[27px] font-bold">Jumavoy <span className="text-[14px] leading-6 text-black/60 font-normal">@sherali · 25m</span></p>
                  <p className="text-[14px] leading-6 font-normal">Lorem, ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut repellat neque possimus veritatis excepturi minus nisi ab, numquam explicabo est? adipisicing elit. Similique placeat  nulla blanditiis!</p>
                </div>
                
              </div>
              <p className="font-black text-[22px]">...</p>
              
            </div>

            <img src={icons2} width={506} height={22} alt="icons" />

          </li>

          <li className="px-5 py-[16px] border-b-[1px] flex flex-col items-center">
            <div className="flex justify-between mb-[22px]">

              <div className="flex items-start">
                <img src={person3} width={60} height={60} alt="person" />
                <div className="ml-[15px]">
                  <p className="text-4 leading-[27px] font-bold">Messi <span className="text-[14px] leading-6 text-black/60 font-normal">@Ranaldo · 2m</span></p>
                  <p className="text-[14px] leading-6 font-normal">Lorem, ipsum <br /> dolor sit 
                  </p>
                  <img src={shahlik} width={679} height={453} alt="" />
                </div>
                
              </div>
              <p className="font-black text-[22px]">...</p>
              
            </div>

            <img src={icons2} width={506} height={22} alt="icons" />

          </li>

        </ul>



      </div>
    </section>
  
  </>

}

export default Home