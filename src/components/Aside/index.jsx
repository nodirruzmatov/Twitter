import "./index.scss"
import settings from "../../assets/images/settings.png"
import person2 from "../../assets/images/person2.png"
import person3 from "../../assets/images/person3.png"

const Aside = () =>{

  return<>
  
    <aside className="search">
      <div className="search__container container border-l-[1px] border-[#E5E5E5]">

        <input className="search__inp max-w-[373px] w-full my-5 py-[12px] px-[22px] rounded-[31px] bg-[#EFF3F4] text-[18px] leading-[24px] font-normal" type="text" name="search" placeholder="Search Twitter" />

        <ul className=" list-none rounded-[10px] bg-[#F7F9F9] px-4 pt-5 pb-[30px]">

          <li className="flex justify-between mb-5">
            <p className="text-[24px] leading-[32px] font-bold font-[Noto Sans]">Trends for you</p>
            <img src={settings} width={24} height={24} alt="settings" />
          </li>

          <li className="flex justify-between items-center">
           <div>
            <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">Trending in Germany</p>
            <p className=" mt-[2px] mb-[3px] text-[20px] leading-[27px] font-semibold font-[Noto Sans]">Revolution</p>
            <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">50.4K Tweets</p>
           </div>
           <p className="font-black text-[22px]">...</p>
          </li>

          <li className="flex justify-between items-center mt-[15px]">
            <div>
              <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">Trending in Germany</p>
              <p className=" mt-[2px] mb-[3px] text-[20px] leading-[27px] font-semibold font-[Noto Sans]">Revolution</p>
              <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">50.4K Tweets</p>
            </div>
           <p className="font-black text-[22px]">...</p>
          </li>

          <li className="flex justify-between items-center mt-[15px]">
            <div>
              <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">Trending in Germany</p>
              <p className=" mt-[2px] mb-[3px] text-[20px] leading-[27px] font-semibold font-[Noto Sans]">Revolution</p>
              <p className="text-[16px] leading-[21px] font-normal font-[Noto Sans] text-[#393B41]/60">50.4K Tweets</p>
            </div>
           <p className="font-black text-[22px]">...</p>
          </li>

          <li>
            <p className="mt-[30px] text-[18px] leading-[100%] font-normal font-[Noto Sans] text-[#1DA1F2]">show more</p>
          </li>

        </ul>

        <ul className="list-none mt-5 mb-[30px] rounded-[10px] bg-[#F7F9F9] px-4 pt-5 pb-[30px]">

          <li className="mb-[25px] text-[24px] leading-[32px] font-bold">You might like</li>
          
          <li className="flex items-center mb-[25px]">
            <img src={person2} width={60} height={60} alt="person" />
            <div className="ml-[10px] mr-[42px]">
              <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans]">Mushtari</p>
              <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans] text-black/60">@1235asda</p>
            </div>
            <button className="py-[10px] px-[18px] rounded-[50px] bg-black text-white text-[18px] leading-[100%] font-bold">Follow</button>

          </li>

          <li className="flex items-center mb-[30px]">
            <img src={person3} width={60} height={60} alt="person" />
            <div className="ml-[10px] mr-[42px]">
              <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans]">Shuhrat</p>
              <p className="font-semibold text-[16px] leading-[21px] font-[Noto Sans] text-black/60">@asdasd6263</p>
            </div>
            <button className="py-[10px] px-[18px] rounded-[50px] bg-black text-white text-[18px] leading-[100%] font-bold">Follow</button>
          </li>

          <li>
            <p className=" text-[18px] leading-[100%] font-normal font-[Noto Sans] text-[#1DA1F2]">show more</p>
          </li>

        </ul>

        <p className="whitespace-pre-wrap max-w-[374px]">
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">Terms of Service</span>
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">Privacy Policy</span>
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">Imprint</span>
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">Cookie Policy</span>
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">Ads Info</span>
          <span className="pr-[15px] text-[16px] leading-[21px] font-normal text-[#536471]">More ···</span>
          <span className=" text-[16px] leading-[21px] font-normal text-[#536471]">© 2021 Twitter, Inc.</span>
        </p>


      </div>
    </aside>
  
  </>

}

export default Aside