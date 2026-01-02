import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure components are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div id='home'>
      <Hero />
      {/* <Services /> */}
      {/* <Pricing /> */}
      <About />
      <Contact />
    </div>
  );
};

export default Home;
