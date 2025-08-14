import { useForm } from 'react-hook-form'
import { useNavigate, NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from '../authSlice';


function LoginPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, error } = useSelector(state => state.auth);
    const { register, handleSubmit, formState: { errors } } = useForm();


    // handling user data
    const submitData = (data) => {
        dispatch(loginUser(data));

    }

    useEffect(()=>{
        window.scrollTo(0 , 0)
    } , [])


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
                            error ? (<p className='font-semibold text-red-500'>{error?.response?.data}</p>) : ''
                        }
                    </div>


                    <form onSubmit={handleSubmit(submitData)} className='flex flex-col'>

                        {/* Email */}
                        <div className='flex flex-col gap-1 h-24'>
                            <label className='label font-semibold'>Email</label>
                            <input
                                type="email"
                                className='input w-80 font-semibold'
                                placeholder='Enter email'
                                required={true}
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.com$/i,
                                        message: 'Email must include .com'
                                    }
                                })} />
                            {errors?.email && <span className='text-red-500 text-xm'>{errors?.email?.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1 h-24'>
                            <label className='label font-semibold'>password</label>
                            <input
                                type="password"
                                className='input w-80 font-semibold'
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