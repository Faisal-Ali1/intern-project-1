import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router';

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitData = (data) => {
        console.log(data);
    }



    return (
        <>
            <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
                <div className="shadow-2xl rounded-2xl p-10 ">
                    <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-5'>

                        {/* Email */}
                        <div className='flex flex-col gap-1'>
                            <label className='label'>Email</label>
                            <input
                                type="email"
                                className='input w-80'
                                placeholder='Enter email'
                                required = {true}
                                {...register('email', { required: true })} />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1'>
                            <label className='label'>password</label>
                            <input
                                type="password"
                                className='input w-80'
                                placeholder='Enter password'
                                required = {true}
                                {...register('Password', { required: true })} />
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