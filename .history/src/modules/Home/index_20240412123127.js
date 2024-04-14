import React from 'react'
import { ReactComponent as Avatar} from '../../assets/Avatar.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import postImg from '../../assets/postImg.jpg'
import { IoHome } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaLocationArrow  } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoSettings , IoLogOut} from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
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
                {
                    navigations.map(({id, name, icon}) => {
                        return(
                            <div key={id} className='flex cursor-pointer hover:text-[#F00F51]'><span 
                            className='mr-4'>{icon}</span>{name}</div>

                        )
                    })
                }
                 
            </div>
            <div className='h-[15%] pt-10 text-gray-400 text-md font-medium'>
                <div className='ml-12 cursor-pointer flex hover:text-[#F00F51]'> <span className='mr-4'><IoLogOut /></span>Log out</div>
            </div>
        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>       
            <div className='bg-white h-[75px] border-l border-r flex justify-evenly items-center pt-4 sticky top-0 shadow-lg'>
                 <div className='flex justify-center items-center'>
                    <Input placeholder='Enter your search' className='w-[400px] rounded-full'/>
                    <Button icon={<LuSearch />}  className='mb-4 ml-6  h-[30px]  bg-red-400 hover:bg-red-500 rounded-full '/>
                 </div>
                 <Button icon={<FaRegPlusSquare />} label='Create new post'  className='rounded-full bg-red-400 hover:bg-red-500 mb-4'/>
            </div>
            {
                [1,2,3,4,5,6].map(() => {
                    return(
                        <div className='bg-white w-[80%]  mx-auto mt-32 p-8'>
                        <div className='border-b flex item-center pb-4 mb-4'>
                            <Avatar width={'50px'} height={'50px'} />
                           <div className='ml-4'>
                           <h3>Lara Jain</h3>
                            <p>@Lara_jain</p>
                           </div>
                        </div>
                        <div className='border-b pb-4 mb-4'>
                            <img src={postImg} className='rounded-xl' />
                            <p className='my-4 text-sm font-normal'>
        "Where every leaf whispers a story and every sunset paints a masterpiece.
         🌅✨ #NatureLover #ExploreMore"</p>
                        </div>
                        <div className='flex justify-evenly text-black text-sm font-medium'>
                        <div className='flex cursor-pointer item-center hover:text-[#F00F51]'><span className='mr-2'><BiSolidLike /></span>10.5 Likes</div>
                        <div className='flex cursor-pointer item-center hover:text-[#F00F51]'><span className='mr-2'><FaComment /></span>10.5 Comments</div>
                        <div className='flex cursor-pointer item-center  hover:text-[#F00F51]'><span className='mr-2'><FaShareNodes /></span>10.5 Share</div>
                        <div className='flex cursor-pointer item-center hover:text-[#F00F51]'><span className='mr-2'><FaBookmark /></span>10.5 Saved</div>
                            
                        </div>
                    </div>

                    )
                })
            }
            <div className='bg-white w-[60%]  mx-auto mt-32 p-8'>
                <div className='border-b flex item-center pb-4 mb-4'>
                    <Avatar width={'50px'} height={'50px'} />
                   <div className='ml-4'>
                   <h3>Lara Jain</h3>
                    <p>@Lara_jain</p>
                   </div>
                </div>
                <div className='border-b pb-4 mb-4'>
                    <img src={postImg} width={'600px'}/>
                    <p>
"Where every leaf whispers a story and every sunset paints a masterpiece. 🌅✨ #NatureLover #ExploreMore"</p>
                </div>
                <div className='flex justify-evenly mt-4'>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><BiSolidLike /></span>10.5 Likes</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaComment /></span>10.5 Comments</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaShareNodes /></span>10.5 Share</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaBookmark /></span>10.5 Saved</div>
                    
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
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><BiSolidLike /></span>10.5 Likes</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaComment /></span>10.5 Comments</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaShareNodes /></span>10.5 Share</div>
                <div className='flex cursor-pointer hover:text-[#F00F51]'><span className='mr-4'><FaBookmark /></span>10.5 Saved</div>
                    
                </div>
            </div>
        </div>
        
        <div className='w-[20%] bg-[#F2F5F8]'>
           
            </div>  
    </div>
  )
}

export default Home
