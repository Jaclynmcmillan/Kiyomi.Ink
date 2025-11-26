import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BookMe from '../components/BookMe';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <BookMe />
    </>
  );
};

export default Home;