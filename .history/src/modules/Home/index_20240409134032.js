import React from 'react'
import { ReactComponent as Avatar} from '../../assets/Avatar.svg'

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] my-2 flex overflow-hidden'>
        <div className='w-[20%] flex flex-col'>
            <div className='h-[30%] bg-blue-100 flex justify-center item-center'>
                <div>
                    <Avatar width={'45px'} height={'45px'}/>
                    <p className='my-1'>Lara Jain</p>
                </div>
            </div>
            <div className='h-[55%] bg-blue-200'></div>
            <div className='h-[15%] bg-blue-300'></div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>
            <div className='h-[1500px]'>Hello its a Scrollbar try it.</div>
        </div>
        <div className='w-[20%] bg-slate-500'></div>  
    </div>
  )
}

export default Home
