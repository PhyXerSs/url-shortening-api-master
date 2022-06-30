import React from 'react'

function BoostLinkToday() {
  return (
    <div className="flex flex-col w-full h-[280px] justify-center items-center gap-7 bg-[#3a3053] relative">
      <div className="w-full h-full absolute top-0 flex md:hidden" style={{backgroundImage:'url(/images/bg-boost-mobile.svg)' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' , backgroundPosition:'center'}}></div>
        <div className="w-full h-full absolute top-0 hidden md:flex" style={{backgroundImage:'url(/images/bg-boost-desktop.svg)' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' , backgroundPosition:'center'}}></div>
        <p className="text-white text-[36px] text-center md:text-[45px] font-[700] z-10 px-2">Boost your links tody</p>
        <button className="w-[220px] py-3 text-white font-[700] text-[24px] flex justify-center items-center rounded-full bg-[#24d0cf] hover:bg-[#99e3e4] cursor-pointer ease-linear duration-200 z-10">
            Get started
        </button>
    </div>
  )
}

export default BoostLinkToday