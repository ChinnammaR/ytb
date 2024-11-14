import { useEffect } from "react";
import { YOUTUBE_VIDEO_URL } from "../constants";


const useGetVideos=()=>{



    const getYoutubeVideos=async()=>{
     
        const response=await fetch(YOUTUBE_VIDEO_URL);
        const json=await response.json();
        return json.items;
    }

    useEffect(()=>{
        getYoutubeVideos();
    },[]);


}

export default  useGetVideos;