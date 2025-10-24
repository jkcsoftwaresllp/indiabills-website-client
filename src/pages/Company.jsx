import React from 'react'
import HeroSection2 from '../components/containers/HeroSection2'
import ScrollingTextCTA from './home/homeSections/CTASection'
import CompanyInfoSection from '../components/Company/CompanyInfoSection'
import ContactFormSection from '../components/Company/ContactFormSection'

function Company() {
    return (
        <div>
            <HeroSection2 title={"Let’s Connect With IndiaBills"} subtitle={"We’re here to help your business grow — reach out anytime."} />
            <CompanyInfoSection />
            <ContactFormSection />
            <ScrollingTextCTA />
        </div>
    )
}

export default Company
