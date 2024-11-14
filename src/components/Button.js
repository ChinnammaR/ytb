import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
      <button className='p-2 m-2 bg-gray-200 rounded-lg cursor-pointer'>{name}</button>
    </div>
  )
}

export default Button
