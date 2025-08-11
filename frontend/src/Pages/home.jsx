import HeroSection from '../Components/hero';
import Main from '../Components/main';
import Footer from '../Components/common/footer';


function HomePage() {
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