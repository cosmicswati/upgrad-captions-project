import React from 'react';
import { ReactComponent as Avatar } from '../../assets/Avatar.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import postImg from '../../assets/postImg.jpg';

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] flex overflow-hidden'>
      <div className='w-[20%] bg-white flex flex-col'>
        {/* Left Sidebar Content */}
      </div>
      <div className='w-[60%] overflow-y-scroll scrollbar-hide'>
        {/* Middle Content */}
        <div className='bg-white h-[75px] border-l flex justify-evenly items-center pt-4'>
          <div className='flex justify-center items-center'>
            <Input placeholder='Enter your search' />
            <Button label='search' className='mb-4 ml-4' />
          </div>
          <Button label='Create new post' className='rounded-lg bg-red-400 hover:bg-red-500 mb-4' />
        </div>
        <div className='bg-white w-[60%] mx-auto mt-32 p-8'>
          <div className='border-b flex item-center pb-4 mb-4'>
            <Avatar width={'50px'} height={'50px'} />
            <div className='ml-4'>
              <h3>Lara Jain</h3>
              <p>@Lara_jain</p>
            </div>
          </div>
          <div className='border-b pb-4 mb-4'>
            <img src={postImg} alt='Post' width={'500px'} />
          </div>
          {/* Additional content to demonstrate scrolling */}
          <div className='flex flex-col justify-center items-center mt-4'>
            {[...Array(20)].map((_, index) => (
              <div key={index} className='border-b py-2'>
                Scrollable Content {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-[20%] bg-[#F2F5F8]'></div>
    </div>
  );
};

export default Home;
