import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainConatiner from './MainConatiner'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div >
     
      <div className='flex'>
        <Sidebar/>
        <Outlet/></div>
        
    </div>
  )
}

export default Body
