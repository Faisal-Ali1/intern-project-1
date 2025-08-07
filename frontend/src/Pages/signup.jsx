import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

function SignUpPage(){

     const { register, handleSubmit, formState: { errors } } = useForm()

    const submitData = (data) => {
        console.log(data);
    }

    return(
        <>
        <div className="bg-amber-100 h-[100vh] flex justify-center items-center">
            <div className="shadow-2xl rounded-2xl p-10 ">
                 <form onSubmit={handleSubmit(submitData)} className='flex flex-col gap-5'>
                
                                        {/* username */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label'>UserName</label>
                                            <input
                                                type="text"
                                                className='input w-80'
                                                placeholder='bob'
                                                required = {true}
                                                {...register('username', { required: true })} />
                                        </div>

                                        {/* Email */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label'>Email</label>
                                            <input
                                                type="email"
                                                className='input w-80'
                                                placeholder='bob@gmail.com'
                                                required = {true}
                                                {...register('email', { required: true })} />
                                        </div>
                
                                        {/* Password */}
                                        <div className='flex flex-col gap-1'>
                                            <label className='label'>password</label>
                                            <input
                                                type="password"
                                                className='input w-80'
                                                placeholder='***'
                                                required = {true}
                                                {...register('Password', { required: true })} />
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