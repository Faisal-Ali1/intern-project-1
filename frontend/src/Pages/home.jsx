import Navbar from '../Components/common/navbar'
import HeroSection from '../Components/hero';
import Main from '../Components/main';
import Testimonials from '../Components/testimonials';

function HomePage(){
    return(
        <>
        <div className='px-15'>
           
        <Navbar />
        <HeroSection/>
        <Main/>
      
        </div>
        </>
    )
}

export default HomePage;