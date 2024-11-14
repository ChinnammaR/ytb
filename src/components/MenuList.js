import React from 'react'
import Button from './Button'

const MenuList = () => {

  const menu=["All","Shorts","News","Live","Sports","Cooking","Tredning","Songs","Movies"];
  return (
    <div className='flex'>
    {menu.map((menu)=>( <Button  key={menu }name={menu}/>))}
    </div>
  )
}

export default MenuList
