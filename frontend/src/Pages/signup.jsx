import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axiosClient from "../Utils/axiosClient";

function SignUpPage() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { isAuthenticated } = useSelector(state => state.auth);

    const submitData = async (datas) => {
        try {
            console.log(datas);

            const { data } = await axiosClient.post('/user/register', datas);
            console.log(data);

            alert(data);
            navigate('/login');
        }
        catch (err) {
            alert(err?.response?.data);
        }

    }

    useEffect(() => {
        if (isAuthenticated)
            navigate('/');
    }, [isAuthenticated]);

    return (
        <>
            <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
                <div className="shadow-2xl rounded-2xl p-10 ">
                    <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-1'>

                        {/* username */}
                        <div className='flex flex-col gap-1 h-22'>
                            <label className='label font-semibold'>UserName</label>
                            <input
                                type="text"
                                className='input w-80'
                                placeholder='bob'
                                required={true}
                                {...register('username', {
                                    required: true,
                                    minLength: { value: 3, message: 'minimum atleast 3 character' },
                                    maxLength: { value: 30, message: 'maximum  30 character' }
                                })} />
                            {errors?.username && <span className="text-red-500 text-sm">{errors?.username?.message}</span>}
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-1 h-23'>
                            <label className='label font-semibold'>Email</label>
                            <input
                                type="email"
                                className='input w-80'
                                placeholder='bob@gmail.com'
                                required={true}
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value:  /^[^\s@]+@[^\s@]+\.com$/i,
                                        message: 'Email must include .com'
                                    }
                                })} />
                            {errors.email && <span className="text-red-500 text-sm">{errors?.email?.message}</span>}
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1 h-29'>
                            <label className='label font-semibold'>password</label>
                            <input
                                type="password"
                                className='input w-80'
                                placeholder='********'
                                required={true}
                                {...register('password', { required: true, minLength: 5, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })} />
                            {errors?.password && <span className="text-red-500 text-sm w-80">weak password(Password must have 1 uppercase, 1 lowercase, 1 number, and 1 special character)</span>}
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