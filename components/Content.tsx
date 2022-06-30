import React, { useEffect, useState } from 'react'
import { shortLinkResult } from '../pages/api/shortenApi'
import ShortenLink from './ShortenLink'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Benefit from './Benefit';

function Content() {
  const [ shortenLinkResult , setShortenLinkResult ] = useState<shortLinkResult[]>([]);
  const [ isCopyClick , setIsCopyClick ] = useState<number>(-1);
  useEffect(()=>{
    if(shortenLinkResult.length > 3){
      let newShortenLink = [...shortenLinkResult];
      setShortenLinkResult(newShortenLink.splice(1));
    }
    else{
      setIsCopyClick((prev:any) => prev !== -1 ? prev + 1 : prev);
    }
  },[shortenLinkResult])
  
  useEffect(()=>{
    if(isCopyClick > 2){
      setIsCopyClick(-1);
    }
  },[isCopyClick])

  return (
    <div className="w-full flex justify-center min-h-[500px] bg-[#f0f1f6] relative pt-[150px] md:py-28">
        <ShortenLink shortenLinkResult={shortenLinkResult} setShortenLinkResult={setShortenLinkResult}/>
        <div className="w-full max-w-[1440px] flex flex-col items-center px-6 md:px-24 gap-20 md:gap-28">
          <div className="w-full flex flex-col items-center mt-0 gap-4">
            {[...shortenLinkResult].reverse().map((link , index)=>(
              <div key={`link${index}`} className="flex flex-col md:flex-row w-full justify-between items-center md:py-4 md:pl-8 md:pr-6 bg-white rounded-lg gap-0 divide-y-[1px] md:divide-y-0 divide-gray-100">
                <p className="text-[#333237] text-[20px] md:text-[24px] font-[500] break-all w-full max-w-[700px] p-4 md:p-0">{link?.original_link}</p>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full justify-start md:justify-end p-4 md:p-0">
                  <p className="text-[#24d0cf] text-[20px] md:text-[24px] font-[500] break-all w-full md:w-fit">{link?.full_short_link}</p>
                  <CopyToClipboard text={link?.full_short_link} 
                    onCopy={()=>{
                      setIsCopyClick(index);
                    }}
                  >
                    <button className={` w-full md:w-[120px] py-2 rounded-lg flex justify-center items-center font-[700] text-[18px] text-white ${isCopyClick === index ? 'bg-[#3b2f54]' :'bg-[#24d0cf] hover:bg-[#99e3e4]'}  cursor-pointer ease-linear duration-200`}>
                      {isCopyClick === index ? 'Copied!' : 'Copy'}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <p className='text-[#333237] text-[36px] md:text-[48px] font-[700]'>Advanced Statistics</p>
            <div className="flex w-full max-w-[600px] justify-center items-center">
              <p className="text-[20px] md:text-[22px] text-[#9c9ba3] w-full font-[500] text-center">
                Track how your links are performing across the web with our advanced statistics dashboard.
              </p>
            </div>
            <Benefit/>
          </div>
        </div>
    </div>
  )
}

export default Content