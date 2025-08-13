import { useForm } from "react-hook-form";
import { Navigate, NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../authSlice";
// import { checkAuth } from "../authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SignUpPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
     const { register, handleSubmit, formState: { errors } } = useForm()

     const { isAuthenticated} = useSelector(state => state.auth);

    const submitData = (data) => {
        // console.log(data);
        dispatch(registerUser(data));
        
    }

    useEffect(()=>{
        if(isAuthenticated)
            navigate('/');
    }, [isAuthenticated]);

    return(
        <>
        <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
            <div className="shadow-2xl rounded-2xl p-10 ">
                 <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-5'>
                
                                        {/* username */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label font-semibold'>UserName</label>
                                            <input
                                                type="text"
                                                className='input w-80'
                                                placeholder='bob'
                                                required = {true}
                                                {...register('username', { required: true })} />
                                        </div>

                                        {/* Email */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label font-semibold'>Email</label>
                                            <input
                                                type="email"
                                                className='input w-80'
                                                placeholder='bob@gmail.com'
                                                required = {true}
                                                {...register('email', { required: true })} />
                                        </div>
                
                                        {/* Password */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label font-semibold'>password</label>
                                            <input
                                                type="password"
                                                className='input w-80'
                                                placeholder='********'
                                                required = {true}
                                                {...register('password', { required: true })} />
                                        </div>
                
                                        {/* submit button */}
                                        <button className='btn btn-primary mt-3'>Submit</button>
                                        <p className='text-center'>have account?<NavLink to={'/'} className=" text-blue-400"> signIn</NavLink></p>
                
                                    </form>
            </div>
        </div>
        </>
    )
}

export default SignUpPage;