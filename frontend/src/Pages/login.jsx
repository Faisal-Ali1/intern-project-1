import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser} from '../authSlice';


function LoginPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, error } = useSelector(state => state.auth);
    const { register, handleSubmit, formState: { errors } } = useForm();


    // handling user data
    const submitData = (data) => {
        dispatch(loginUser(data));
        
    }
    
console.log(isAuthenticated);

    useEffect(() => {
        if (isAuthenticated)
            navigate('/');
    }, [isAuthenticated]);


    return (
        <>
            <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
                <div className="shadow-2xl rounded-2xl p-10 ">
                    
                        <div className='p-1'>
                            {
                                error? ( <p className='font-semibold text-red-500'>{error?.response?.data}</p> ): ''
                            }
                        </div>
                    
                    
                    <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-5'>

                        {/* Email */}
                        <div className='flex flex-col gap-1'>
                            <label className='label font-semibold'>Email</label>
                            <input
                                type="email"
                                className='input w-80'
                                placeholder='Enter email'
                                required={true}
                                {...register('email', { required: true })} />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1'>
                            <label className='label font-semibold'>password</label>
                            <input
                                type="password"
                                className='input w-80'
                                placeholder='Enter password'
                                required={true}
                                {...register('password', { required: true })} />
                        </div>

                        {/* submit button */}
                        <button className='btn btn-primary mt-3'>Submit</button>

                        <p className='text-center'>don't have account?<NavLink to={'/signup'} className=" text-blue-400"> signUp</NavLink></p>

                    </form>

                </div>
            </div>
        </>
    )
}

export default LoginPage;