import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import React from 'react';
import SMStats from '../components/SocialMedia';
import EventAdvantages from '../components/EventAdvantages';
import PartnersPrev from "../components/PartnersPrev";
import AboutBEST from '../components/AboutBEST';
import Contacts from '../components/Contacts';
import Conclusion from "../components/Conclusion";
import Packagea from "../components/Packagea"; 
import Footer from '../components/Footer';
import PostText from '../components/PostText';
import '../globals.css';

export default function Home() {   
  return (
    <>
      <Head>
        <title>ІЯК 2025 Бартерне Партнерство</title>
      </Head>
      <Header />   
      <HeroSection />
      <AboutSection />
      <EventAdvantages />
      <SMStats />
      <Packagea />
      <PostText />
      <PartnersPrev />
      <AboutBEST />
      <Contacts />
      <Conclusion />
      <Footer />
    </>
  );
}