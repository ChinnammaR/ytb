import React, { useEffect, useState } from 'react'
import { APP_MENU_ICON,APP_LOGO,USER_ICON, YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toogleMenuBar } from '../utils/redux-store/appSlice';

const Header = () => {


  const[searchQuery,setSearchQuery]=useState("");
  const[showSuggestions,setShowSuggestions]=useState(false);

  const dispatch=useDispatch();

  const showMenuHandle=()=>{

    dispatch(toogleMenuBar());
  }


// useEffect(()=>{
    
//   const timer = setTimeout(getSearchSugsestions(),200);

//   return()=>
//   {
//     clearTimeout(timer);
//   }
// },[searchQuery]);

const getSearchSugsestions = async () => {
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

  console.log(data)
  const dataJson = await data.json();
  //setSuggestions(json[1]);
  console.log(dataJson[1])


};


  return (
    <div className="grid grid-flow-col shadow-md m-2 p-5">
      <div className="flex col-span-1 ">

        <img alt="menu" src={APP_MENU_ICON} className="h-14 mt-2 cursor-pointer m" onClick={showMenuHandle}/>
        <img alt="logo" src={APP_LOGO} className="h-14 mt-2"/>

      </div>

      <div  className="col-span-10">
        <input type="text"
         className="px-5 w-1/2 border border-gray-400 h-12 mt-2 rounded-l-full" 
         onChange={(e)=>setSearchQuery(e.target.value)}
         onFocus={()=>setShowSuggestions(true)}
         onBlur={()=>setShowSuggestions(false)}
         value={searchQuery}/>    
          <button className="border border-gray-400 px-5 py-2 rounded-r-full h-12 mt-2 bg-gray-100">🔍</button>
       { showSuggestions &&  <div>
       <ul className='px-5 py-3 fixed bg-white w-[37rem] border-gray-50 rounded-lg'>
    <li className='p-1 cursor-pointer'>🔍 Iphone</li>
    <li className='p-1 cursor-pointer'>🔍 Iphone 13</li>
    <li className='p-1 cursor-pointer'>🔍 Iphone 14</li>
    <li className='p-1 cursor-pointer'>🔍 Iphone 14 pro</li>
    <li className='p-1 cursor-pointer'>🔍 Iphone 14 pro max</li>
  </ul>
</div>}   
      </div>

      <div  className="col-span-1">
        <img alt="user" src={USER_ICON} className="h-9"/>
      </div>
    </div>
  )
}

export default Header;
