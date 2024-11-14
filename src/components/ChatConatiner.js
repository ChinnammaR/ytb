import React, { useEffect, useState } from 'react';
import LiveChat from './LiveChat';
import { generateRandomName, generateRandomText } from '../utils/redux-store/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/redux-store/chatSlice';

const ChatConatiner = () => {


    
    const [chatMessage,setChatMessage]=useState("");
    const dispatch=useDispatch();
    const commentData=useSelector((store)=>store?.chat?.messages);
     console.log(commentData);



    useEffect(()=>{

        const interval=setInterval(()=>{

            dispatch(addMessage({
                name:generateRandomName(),
                text:generateRandomText(15)
            }));
            
        },2000);


        return ()=>{
            clearInterval(interval);
        }

    },[]);



   // if(commentData.length===0) return null;
    

  return (
    <>
    <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
      {commentData.map((comenter)=><LiveChat name={comenter.name} comment={comenter.text}/>) }
      </div>
     
    </div>
    <form className="w-full p-2 ml-2 border border-black rounded-lg" 
    onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"chinnamma VR",
            text:generateRandomText(15)
        }))
        setChatMessage("")
    }
}>
  <input type="text" value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)}/>
  <button className='p-2 mx-8 bg-green-800 rounded-lg '
  onClick={(e)=>{
    e.preventDefault()
    dispatch(addMessage({
        name:"chinnamma VR",
        text:generateRandomText(15)
    }))
    setChatMessage("")
}
}>Send</button>
</form>
    </>
  )
}

export default ChatConatiner
