import React from 'react'

const Input = ({
    name = '',
    label ='',
    type ='text',
    placeholder =''
}) => {
  return (
    <div class="mb-4">
        {
          label &&  
          <label class="block text-gray-700 text-sm font-bold mb-2" for={name}>
             {label}
          </label>
        }
        
        <input class="shadow apperance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id={name} type={text} placeholder={placeholder} />
      
    </div>
  )
}

export default Input
