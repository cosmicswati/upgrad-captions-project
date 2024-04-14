import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Form = () => {
  return (
    <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'>
      <div className='h-[400px] w-[700px] bg-white flex justify-center items-center'>
      <div className='h-full w-full flex flex-col justify-center items-center'>
         <div>WELCOME BACK</div>
         <div>PLEASE LOGIN TO CONTINUE</div>
         <form>
            <Input label='Email' type='email' placeholder='Enter your email' />
            <Input label='Password' type='password' placeholder='Enter your password' />
            <Button label='Sign in' />
         </form>
      </div>
      <div className='h-full w-full bg-gray-400'>

      </div>
    </div>
    </div>
  );
};

export default Form;
