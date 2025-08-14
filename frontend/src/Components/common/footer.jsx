import { useSelector } from "react-redux";

function Footer() {

    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <>


            <div className="h-100 bg-black text-white flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">Created with ❤️️ by Faisal Ali</p>
                <p>All rights are reserved &copy;</p>
            </div>


        </>
    )
}

export default Footer;