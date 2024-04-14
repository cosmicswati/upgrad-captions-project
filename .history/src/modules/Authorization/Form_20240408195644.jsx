import React, { useState, useSyncExternalStore } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAsyncValue } from 'react-router-dom';

const Form = ({
    isSignInPage = false
}) => {
   
  return (
    <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'>
      <div className='h-[450px] w-[750px] bg-white flex justify-center items-center'>
      <div className={`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'} `}>
         <div className='text-3xl'>WELCOME {isSignInPage && 'BACK'}</div>
         <div className='mb-[50px]'>PLEASE {isSignInPage ? 'LOGIN' : 'REGISTER'} LOGIN TO CONTINUE</div>
         <form>
            {
                !isSignInPage &&
                <Input label='Username' type='text' placeholder='Enter your username' /> 
            } 
            <Input label='Email' type='email' placeholder='Enter your email' />
            <Input label='Password' type='password' placeholder='Enter your password' />
            <Button label={ isSignInPage ? 'Sign in' : 'Register'} />
         </form>
      </div>
      <div className={`h-full w-full bg-gray-400 ${!isSignInPage && 'order-1'}`}> </div>
    </div>
 </div>
  );
};

export default Form;
