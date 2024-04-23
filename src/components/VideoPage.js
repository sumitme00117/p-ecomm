import React, { useEffect, useState } from 'react'
import { YOUTUBE_QUEERY_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const VideoContainer = () => {

    const query = useSelector(store => store.search.queryStr)
    const final_query = query.replace(/ /g, '+')

    const [videos, setVideos] = useState([])

    useEffect(() => {
        
        const id = setTimeout(() => {
            getVideos()
        }, 2000)

        return () => clearTimeout(id)
        
    }, [query])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_QUEERY_API+final_query)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)
    }
  return (
    <div className='flex flex-wrap'>
        {
            videos?.map(video => <Link key={video.id} to={"/watch?v="+video.id.videoId}><VideoCard info={video}/></Link>) 
        }
      
    </div>
  )
}

export default VideoContainer