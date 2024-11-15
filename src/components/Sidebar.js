import React from 'react'
import { HOME_ICON, SHORT_ICON, SUBSCRIBE_IOCN } from '../utils/constants'
import { useSelector } from 'react-redux';

import appSlice from '../utils/redux-store/appSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const showSideBard=useSelector((store)=>store.app.showMenu);

  if(!showSideBard )  return null;

 return (
<div className="p-5 shadow-lg w-48">
      <ul>
        <li>
      <Link>Home</Link>   
        </li>
        <li>
          Demo
        </li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  )

};

export default Sidebar
