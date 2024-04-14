import React from 'react'

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] flex overflow-hidden'>
        <div className='w-[20%] bg-white'></div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'></div>
        <div className='w-[20%] bg-slate-500'></div>  
    </div>
  )
}

export default Home
