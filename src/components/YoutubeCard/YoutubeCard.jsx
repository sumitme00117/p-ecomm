import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteYoutube } from '../../actions/user'
import "./YoutubeCard.css"
import { Button, Typography } from '@mui/material'
import { FaTrash } from 'react-icons/fa'
import { getUser } from '../../actions/user'
const YoutubeCard = ({url="https://www.youtube.com", title="Title Here", image, isAdmin=false, id}) => {

  const dispatch = useDispatch()
  const deleteHandler = async (id) =>{
    await dispatch(deleteYoutube(id))
    dispatch(getUser())
  }
  return (
    <div className='youtubeCard'>
      <a href={url} target="blank">
        <img src={image} alt="video" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && 
      <Button style={{margin: "auto",
                      display: "block",
                      color: "rgba(40,40,40,0.7)"
                    
                    }} onClick={()=>deleteHandler(id)}
                    
                    >
        <FaTrash/>
        </Button>}
    </div>
  )
}

export default YoutubeCard