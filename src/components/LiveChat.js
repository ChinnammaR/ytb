import React from 'react'
import { USER_ICON } from '../utils/constants';

const LiveChat = ({name,comment}) => {
  return (
    <div className='flex bg-gray-50'>
      <img alt="user" src={USER_ICON} className="h-8"/>
      <span className='p-2 font-bold'>{name}</span>
      <span className='p-2'> {comment}</span>
    </div>
  )
}

export default LiveChat;
