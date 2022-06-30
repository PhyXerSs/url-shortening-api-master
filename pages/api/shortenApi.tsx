import axios from 'axios'

export interface shortLinkResult{
    full_short_link:string;
    original_link:string;
}

export async function getShortenLink(url:string){
    let { data } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    return { full_short_link:data?.result?.full_short_link , original_link:data?.result?.original_link } as shortLinkResult;
}