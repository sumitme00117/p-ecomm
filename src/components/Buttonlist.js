import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Trailers", "Google", "Movies", "Computers", 'Netflix']

const ButtonList = () => {
  return (
    <div className='flex'>
        {
            list.map((item, i) => (
                <Button key={i} name={item}/>
            ))
        }
      
    </div>
  )
}

export default ButtonList