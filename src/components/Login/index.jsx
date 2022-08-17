import React,{ useState } from "react";
import twitter from "../../assets/images/twitter.svg"

const index = ({auth}) => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const userParam= {
    userNmae: userName,
    password: password
  }


  return (
    <>


      <div className="login pt-10">

        <img className="mb-9" src={twitter} width={50} height={41} alt="logo" />


        <h2 className=" mb-9 text-[42px] leading-[49px] font-black">Login in to Twitter</h2>

        <div className="mb-[25px]">

          <input className=' max-w-[450px] w-full py-[23px] px-5 border-[1px] border-black/20 rounded-[6px] text-[18px] leading-6 placeholder:text-[18px] placeholder:leading-6 placeholder:text-black/60 outline-none' type="text" name="user" placeholder='Phone number, email address'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          />

        </div>

        <div className="mb-[25px]">

          <input className=' max-w-[450px] w-full py-[23px] px-5 border-[1px] border-black/20 rounded-[6px] text-[18px] leading-6 placeholder:text-[18px] placeholder:leading-6 placeholder:text-black/60 outline-none' type="password" name="user" placeholder='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        <button className=' max-w-[450px] w-full mb-12 py-[18px] text-[18px] leading-[24px] font-bold text-center text-white bg-[#1DA1F2] rounded-[76px]' onClick={()=>auth(userParam)}>Log in</button>

      </div>
      
    </>
  );
};

export default index;