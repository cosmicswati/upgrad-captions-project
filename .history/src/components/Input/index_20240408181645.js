import React from 'react'

const Input = ({
    name = '',
    label ='Usernme',
}) => {
  return (
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            UserName
        </label>
        <input class="shadow apperance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id="username" type="text" placeholder="username"/>
      
    </div>
  )
}

export default Input
