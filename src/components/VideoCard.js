import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {


   
    
  
    const { snippet, statistics ,id} = info|| {};
   const { channelTitle, title, thumbnails } = snippet || {};
   const {viewCount}=statistics || {}; 


  return (
    <Link to={"/watch?v="+id}>
    <div className='p-2 m-4 w-72 shadow-lg ' >
      <img alt="video" src={thumbnails?.medium?.url} className='rounded-lg'></img>
      <ul>
        <li className='font-bold'>{title}</li>
        <li className=' py-2'>{channelTitle}</li>
        <li className=''> {viewCount} views</li>
      </ul>
    </div>
    </Link>
  )
}

export default VideoCard
