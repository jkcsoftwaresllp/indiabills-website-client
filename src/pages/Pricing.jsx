import React from 'react'
import PricingHeroSection from '../components/pricingSections/PricingCardsSection'
import HeroSection from '../components/home/HeroSection'
import pricingList from '../assets/lottie/Pricing.json'
import ScrollingTextCTA from './home/homeSections/CTASection'

function Pricing() {
    return (
        <div>
            <HeroSection title={"Simple Pricing, Transparent Plans"} desc={"Choose the perfect IndiaBills plan for your business. No hidden fees, no surprises. Start with our free trial and upgrade when you're ready to scale. India Bills offers affordable pricing for all business types."} lottie={pricingList} typeWriterText1={"Fast Businesses"} typeWriterText2={"Reliable Teams"} typeWriterText3={"Rising Brands"} />
            <PricingHeroSection />
            <ScrollingTextCTA />
        </div>
    )
}

export default Pricing
