import React, {useEffect} from 'react'
import Slider from './components/slider/Slider'
import Content1 from './components/content1/Content1'
import Content2 from './components/content2/Content2'
import Content3 from './components/content3/Content3'
import Content4 from './components/content4/Content4'
import Content5 from './components/content5/Content5'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'


const Home = () => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
    
        // Function to toggle the 'scrolled' class based on scroll position
        const handleScroll = () => {
          if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll); // Remove the event listener when the component unmounts
        };
      }, []);
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Content1/>
            <Content2/>
            <Content3/>
            <Content4/>
            <Content5/>
            <Footer/>
        </div>
    )
}

export default Home