import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/redux-store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsConatiner from './CommentsConatiner';
import ChatConatiner from './ChatConatiner';

const WatchPage = () => {


    const [searchParams] = useSearchParams();

    const VideoId=searchParams.get("v");
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeSideBar());

    },[]);



  return (
    <div className="flex flex-col w-full">
     <div className='px-5 flex w-full' >
     <div >
      <iframe width="1050" height="550" 
      border-radius= "20px"
      border="20px"
      src={"https://www.youtube.com/embed/"+VideoId +"?autoplay=1"}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
        >
            
        </iframe>
      </div>
        <div className='w-full'>
  <ChatConatiner />

</div>

</div> 

       < CommentsConatiner/>
    </div>
  )
}

export default WatchPage;
