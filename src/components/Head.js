import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { addQueryStr, cacheResults } from '../utils/searchSlice'
import VideoContainer from './VideoContainer'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    useEffect(()=>{
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggestions()
            }
        },200)

        return () => {
            clearTimeout(timer)
        }
    },[searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json()
        setSuggestions(json[1])

        // update Cache
        dispatch(cacheResults({[searchQuery]: json[1]}))
    }
  return (
    <>
    <div className='grid grid-flow-col m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className="h-20 cursor-pointer scale-75" alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
        <a href="/"><img className="h-20 mx-2" alt="youtube-logo" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"/></a>
      </div>
      <div className='col-span-10 px-10 mt-4'>
        <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery} onChange={(e) => {
            
            setSearchQuery(e.target.value)
            dispatch(addQueryStr(e.target.value))
        }} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        {showSuggestions && <div className='fixed bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
            {
                suggestions.map(s => <li key={s} className='py-2 px-3 hover:bg-gray-100'>🔍 {s}</li>)
            }
            
        </ul>
        </div>
        }
      </div>
      <div className='col-span-1 mt-4'>
        <img className="h-10" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
    </>
  )
}

export default Head