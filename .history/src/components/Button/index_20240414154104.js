import React from 'react'

const Button = ({
   icon = null,
    label ='',
    className =''
    
}) => {
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>
      {label}
      {icon}
  </button>
  )
}

export default Button
