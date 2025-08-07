import { useForm } from 'react-hook-form'

function LoginPage(){

    const { register , handleSubmit , formState:{ errors}} = useForm()

    const handleSubmitData = (data) => {
        console.log(data);
    }
    


    return(
        <>
        <div className="bg-amber-100 h-[100vh]">
            <div className="border ">
                
        
            </div>
        </div>
        </>
    )
}

export default LoginPage;