import React from 'react'
import { ReactComponent as Avatar} from '../../assets/Avatar.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import postImg from '../../assets/postImg.jpg'
import { IoHome } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { stats, navigations } from './data'

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf]  flex overflow-hidden'>
        <div className='w-[20%] bg-white flex flex-col'>
            <div className='h-[30%] flex justify-center items-center border-b'>
                <div className='flex flex-col justify-center items-center'>
                    <Avatar width={'45px'} height={'45px'} className='border-4 rounded-fullp-2'/>
                    <div className='my-4 text-center'>
                         <h3 className='text-xl font-semibold'>Lara Jain</h3>
                         <p className='text-xl font-light'>@lara_jain</p>
                    </div>
                    <div className='h-[50px] flex justify-around w-[200px] text-center'>
                        {
                            stats.map(({id, name, stats}) => {
                                return(
                                <div key={id}>
                                  <h4 className='font-bold'>{stats}</h4> 
                                 <p className='font-light text-sm'>{name}</p>
                            </div>
                             )
                          })
                        }    
                    </div>
                </div>
            </div>
            <div className='h-[55%] flex flex-col justify-evenly pl-12 border-b text-gray-400 text-md font-medium'>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><IoHome /></span>Feed</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><MdOutlineTravelExplore /></span>Explore</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaStar /></span>My Favourite</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><IoHome /></span>Direct</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><IoHome /></span>Status</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><IoHome /></span>Settings</div>        
            </div>
            <div className='h-[15%] pt-10 text-gray-400 text-md font-medium'>
                <div className='ml-12 cursor-pointer flex hover:text-[#F00F51]'> <span className='mr-4'><IoHome /></span>Log out</div>
            </div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>       
            <div className='bg-white h-[75px] border-l border-r flex justify-evenly items-center pt-4'>
                 <div className='flex justify-center items-center'>
                    <Input placeholder='Enter your search' className='w-[400px] rounded-full'/>
                    <Button icon={<IoHome />}  className='mb-4 ml-4 bg-[#F00F51] hover:bg-[#de0d4c] '/>
                 </div>
                 <Button icon={<IoHome />} label='Create new post'  className='rounded-lg bg-red-400 hover:bg-red-500 mb-4'/>
            </div>
            <div className='bg-white w-[60%]  mx-auto mt-32 p-8'>
                <div className='border-b flex item-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                   <div className='ml-4'>
                   <h3>Lara Jain</h3>
                    <p>@Lara_jain</p>
                   </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src={postImg} width={'500px'}/>
                </div>
                <div className='flex justify-evenly mt-4'>
                    <div>10.5 Likes</div>
                    <div>12.k Comments</div>
                    <div>500 Shares</div>
                </div>
            </div>
            <div className='bg-white w-[60%]  mx-auto mt-32 p-8'>
                <div className='border-b flex item-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                   <div className='ml-4'>
                   <h3>Lara Jain</h3>
                    <p>@Lara_jain</p>
                   </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src={postImg} width={'500px'}/>
                </div>
                <div className='flex justify-evenly mt-4'>
                    <div>10.5 Likes</div>
                    <div>12.k Comments</div>
                    <div>500 Shares</div>
                </div>
            </div>
        </div>
        
        <div className='w-[20%] bg-[#F2F5F8]'>
           
            </div>  
    </div>
  )
}

export default Home
