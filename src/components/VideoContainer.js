import React, { useEffect, useState } from 'react'

import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_URL } from '../utils/constants';

const VideoContainer = () => {

  
const[videos,setVideos]=useState([]);

const getYoutubeVideos=async()=>{
     
  const response=await fetch(YOUTUBE_VIDEO_URL);
  const json=await response.json();

  setVideos(json.items);

}

useEffect(()=>{
  
  getYoutubeVideos();
  
  
},[]);



  return (
    <div className='flex flex-wrap'>
     
      {videos.map((video)=><VideoCard key={video.id} info={video}/>)}
    
    </div>
  )
}

export const AddConatiner=({info})=>{

  return <div>
    <p>Add</p>
    
 <VideoCard  info={info}/>
  </div>

}
export default VideoContainer;
