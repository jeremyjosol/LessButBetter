import React from 'react';
import dots from '../img/Dots.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Home.css';

const Home = () => {
  const scrollToAbout = () => {
    scroll.scrollTo('about', {
      duration: 50,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  return (
    <div className="home-container" id="home">
      <div className="hero-layout">
        <div className="text-container">
          <h2 className='project-title'>Less, But Better.</h2>
          <p>
            Welcome to our exploration. This application was designed with the intention of observing <strong className='strength'>Smoothed Particle Hydrodynamics</strong> and interacting with it via <em>Unity</em>.
          </p>
          <p>
            SPH simulations are widely used in various fields, including fluid dynamics, astrophysics, and computer graphics, modeling complex fluid behaviors.
          </p>
          <ScrollLink
            className="btn btn-primary learn-more"
            to="about"
            spy={true}
            smooth={true}
            duration={50}
            onClick={scrollToAbout}
          >
            LEARN MORE
          </ScrollLink>
        </div>
        <div className="image-container">
          <img src={dots} alt="Dots" />
        </div>
      </div>
    </div>
  );
};

export default Home;