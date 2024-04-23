import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_QUEERY_API} from '../utils/constants'

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const [info, setInfo] = useState("")
    const [subscribe, setSubscribe] = useState(false)
    const dispatch = useDispatch()
    const query = useSelector(store => store.search.queryStr)
    const final_query = query.replace(/ /g, '+')

    useEffect(() => {
        dispatch(closeMenu())
        getVideos()
    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_QUEERY_API+final_query)
        const json = await data.json()
        const arr = json.items
        console.log(arr)
        const filteredobj = arr.filter((item) => item.id.videoId === searchParams.get("v"))[0]
        console.log(filteredobj)
        setInfo(filteredobj.snippet.title)
    }
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex'>
        <div className=''>
        <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='flex justify-between'>
        <span className='p-2 m-2 font-bold'>{info}</span>
        <button onClick={()=> setSubscribe(!subscribe)} className='mr-6 mt-3 px-2 w-[12%] bg-[#f00] text-white rounded-[20px]'>{subscribe ? "Subscribed" : "Subscribe"}</button> 
        </div>
        </div>
        
        <div className='w-full'>
            <LiveChat/>
        </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage