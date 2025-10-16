import React from 'react'
// import styles from "./styles/Home.module.css";
import HeroSection from '../components/home/HeroSection';
import MainContainer from '../components/containers/mainContainer/MainContainer';
import FeaturesOverview from './home/homeSections/FeaturesOverview';
import WhyChooseIndiaBills from './home/homeSections/WhyChooseIndiaBills';
import CTASection from './home/homeSections/CTASection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import billingAnimation from '../assets/lottie/billing-3d.json'

function Home() {
    return (
        <div>
            <HeroSection />
            <FeaturesOverview />
            <WhyChooseIndiaBills />
            <TestimonialsSection />
            <CTASection />
        </div>
    )
}

export default Home
