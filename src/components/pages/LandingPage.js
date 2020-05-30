import React from 'react';
import HeaderNav from '<molecules>/HeaderNav/HeaderNav';
import Hero from '<organisms>/Hero/Hero';
import Footer from '<organisms>/Footer/Footer';
import DefaultLayout from '<templates>/default';

const LandingPage = () => (
  <DefaultLayout>
    <HeaderNav />
    <Hero />
    <Footer />
  </DefaultLayout>
);

export default LandingPage;
