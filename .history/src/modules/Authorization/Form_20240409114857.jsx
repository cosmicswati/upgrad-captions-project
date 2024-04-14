import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ReactComponent as Loginsvg } from '../../assets/Loginsvg.svg';

const Form = ({ isSignInPage: propIsSignInPage = false }) => {
    const [isSignInPage, setIsSignInPage] = useState(propIsSignInPage);
    
    return (
        <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'>
            <div className='h-[510px] w-[750px] bg-white flex justify-center items-center'>
                <div className={`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}>
                    <div className='text-3xl'>WELCOME {isSignInPage && 'BACK'}</div>
                    <div className='mb-[50px]'>PLEASE {isSignInPage ? 'LOGIN' : 'REGISTER'} LOGIN TO CONTINUE</div>
                    <form>
                        {!isSignInPage && <Input label='Username' type='text' placeholder='Enter your username' />}
                        <Input label='Email' type='email' placeholder='Enter your email' />
                        <Input label='Password' type='password' placeholder='Enter your password' />
                        <Button label={isSignInPage ? 'Sign in' : 'Register'} />
                    </form>
                    <div className='cursor-pointer' onClick={() => setIsSignInPage(!isSignInPage)}>
                        {isSignInPage ? 'create a new account' : 'Sign in'}
                    </div>
                </div>
                <div className={`h-full w-full bg-gray-400 ${!isSignInPage && 'order-1'}`}></div>
            </div>
            {isSignInPage && <Loginsvg width={'300px'} height={'300px'} />}
        </div>
    );
};

export default Form;
