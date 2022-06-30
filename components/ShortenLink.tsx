import React, { useRef, useState } from 'react'
import { getShortenLink, shortLinkResult } from '../pages/api/shortenApi';
import CircularProgress from '@mui/material/CircularProgress';
export interface Propstype{
    shortenLinkResult:shortLinkResult[];
    setShortenLinkResult:React.Dispatch<React.SetStateAction<shortLinkResult[]>>;
}

function ShortenLink({shortenLinkResult,setShortenLinkResult}:Propstype) {
    const [showInvalidText , setShowInValidText ] = useState<boolean>(false);
    const shortenLinkRef = useRef<HTMLInputElement>(null);
    const [ isLoading , setIsLoading ] = useState<boolean>(false)
    return (
        <div className="absolute flex flex-col items-center -top-[90px] w-full max-w-[1440px] px-6 md:px-24">
            <form autoComplete="off" className="flex flex-col md:flex-row w-full bg-[#3a3053] py-8 md:py-14 px-8 md:px-[72px] items-center justify-center gap-10 md:gap-8 rounded-lg relative"
                onSubmit={async(e:any)=>{
                    e.preventDefault();
                    if(!isLoading && shortenLinkRef && shortenLinkRef.current.value !== ''){
                        setShowInValidText(false);
                        setIsLoading(true);
                        try{
                        let link =  await getShortenLink(shortenLinkRef.current.value) as shortLinkResult;
                        setShortenLinkResult([...shortenLinkResult , link])
                        setIsLoading(false);
                        }catch(err){
                            console.log(err);
                            setIsLoading(false);
                        }
                    }
                }}
            >
                <div className="absolute w-[240px] h-[217px] -top-[0px] right-0 rounded-r-lg z-10 flex md:hidden" style={{backgroundImage:'url(/images/bg-shorten-mobile.svg)', backgroundRepeat:'no-repeat' , backgroundSize:'contain' , backgroundPosition:'top'}}></div>
                <div className="absolute w-full h-full top-0 rounded-lg z-10 hidden md:flex" style={{backgroundImage:'url(/images/bg-shorten-desktop.svg)', backgroundRepeat:'no-repeat' , backgroundSize:'cover' , backgroundPosition:'top center'}}></div>
                <input type="text" id="link-input" required ref={shortenLinkRef} className={` w-full md:w-4/5 bg-white outline-none px-4 md:px-8 py-3 md:py-4 rounded-lg z-10 text-[20px] md:text-[22px] ${showInvalidText && 'border-2 border-[#e6686b] placeholder:text-[#e6686b]' }`} placeholder='Shorten a link here...'
                    onInvalid={(e:any)=>{
                        e.preventDefault();
                        setShowInValidText(true)
                    }}
                />
                <button type="submit" className=" w-full md:w-1/5 rounded-lg h-[55px] md:h-[65px] flex justify-center items-center bg-[#24d0cf] hover:bg-[#99e3e4] cursor-pointer ease-linear duration-200 text-white text-[20px] md:text-[22px] font-[700] z-10">
                    {isLoading ? <CircularProgress size={32} style={{color:'white'}}/> :'Shorten it!'}
                </button>
                {showInvalidText && <i className="text-[#e6686b] absolute bottom-5 top-[90px] left-[35px] md:top-auto md:left-[72px] z-[10]">Please add a link</i>}
            </form>
        </div>
    )
}

export default ShortenLink