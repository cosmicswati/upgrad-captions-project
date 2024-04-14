import Input from '../../components/Input'; // Importing Input component
import Button from '../../components/Button'; // Importing Button component
import { ReactComponent as Loginsvg } from '../../assets/Loginsvg.svg'; // Importing Login SVG
import { ReactComponent as Registersvg } from '../../assets/Registersvg.svg'; // Importing Register SVG
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom

// Form component
const Form = ({ 
    isSignInPage = false // Default prop isSignInPage set to false
}) => {
    const navigate = useNavigate(); // Initializing useNavigate hook
    
    return (
        <div className='bg-[#d2cfdf] h-screen w-full flex justify-center items-center'> {/* Container div */}
            <div className='h-[510px] w-[750px] bg-white flex justify-center items-center'> {/* Inner div */}
                <div className={`h-full w-full flex flex-col justify-center items-center ${!isSignInPage && 'order-2'}`}> {/* Form div */}
                    <div className='text-3xl'>WELCOME {isSignInPage ? 'BACK' : 'TO REGISTER'}</div> {/* Welcome text */}
                    <div className='mb-[50px]'>PLEASE {isSignInPage ? 'LOGIN' : 'REGISTER'} LOGIN TO CONTINUE</div> {/* Instruction text */}
                    <form> {/* Form */}
                        {!isSignInPage && <Input label='Username' type='text' placeholder='Enter your username' />} {/* Username input if it's not a sign-in page */}
                        <Input label='Email' type='email' placeholder='Enter your email' /> {/* Email input */}
                        <Input label='Password' type='password' placeholder='Enter your password' /> {/* Password input */}
                        <Button label={isSignInPage ? 'Sign in' : 'Register'} /> {/* Sign in/Register button */}
                    </form>
                    {/* Link to switch between sign-in and register pages */}
                    <div className='cursor-pointer' onClick={() => navigate(`${isSignInPage ? '/account/signup' : '/account/signin'}`)}>
                        {isSignInPage ? 'create a new account' : 'Sign in'}
                    </div>
                </div>
                {/* SVG or image section */}
                <div className={`h-full w-full bg-gray-400 ${!isSignInPage && 'order-1'}`}>
                    {isSignInPage ? <Loginsvg width={'300px'} height={'500px'} /> : <img src={Registersvg}  alt="Register" className="w-3/5" />} {/* Showing login SVG if it's a sign-in page, otherwise showing register image */}
                </div>
            </div>
        </div>
    );
};

export default Form; // Exporting Form component
