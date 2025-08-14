import { useEffect } from 'react';
import HeroSection from '../Components/hero';
import Main from '../Components/main';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function HomePage() {

    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(()=>{
        window.scrollTo(0 , 0);
    }, [])

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