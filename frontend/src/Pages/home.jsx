import { useEffect } from 'react';
import HeroSection from '../Components/hero';
import Main from '../Components/main';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function HomePage() {

    const navigate = useNavigate();
    const { isAuthenticated} = useSelector(state => state.auth);

    useEffect(()=>{
        if(!isAuthenticated)
            navigate('/login')
    
    } , [])

    return (
        <>
            <div className='px-15'>

                <HeroSection />
                <Main />
            </div>

        </>
    )
}

export default HomePage;