import React from 'react'
import { ReactComponent as Avatar} from '../../assets/Avatar.svg'

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf]  flex overflow-hidden'>
        <div className='w-[20%] bg-white flex flex-col'>
            <div className='h-[30%] flex justify-center items-center border-b'>
                <div className='flex flex-col justify-center items-center'>
                    <Avatar width={'45px'} height={'45px'}/>
                    <p className='my-4'>Lara Jain</p>
                    <div className='h-[30px] flex justify-around w-[200px] text-center'>
                        <div className='flex flex-col justify-around items-center'>
                            <h4>800</h4> 
                            <p>Post</p>
                        </div>
                        <div>
                            <h4>19.5k</h4> 
                            <p>followers</p>
                        </div>
                        <div>
                            <h4>60</h4> 
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[55%] flex flex-col justify-evenly pl-12 border-b'>
                    <div>Home</div>
                    <div>Message</div>
                    <div>Trending</div>
                    <div>Profile</div>
                    <div>setting</div>    
            </div>
            <div className='h-[15%] pt-10'>
                <div className='ml-12 cursor-pointer'>Log out</div>
            </div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>
            <div className='h-[1500px]'>Hello its a Scrollbar try it.</div>
        </div>
        <div className='w-[20%] bg-slate-500'></div>  
    </div>
  )
}

export default Home
