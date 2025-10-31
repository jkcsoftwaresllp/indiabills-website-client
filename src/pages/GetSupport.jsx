import React from 'react'
import HeroSection2 from '../components/containers/HeroSection2'
import ScrollingTextCTA from './home/homeSections/CTASection'
import SupportOptions from '../components/Support/getSupport/SupportOptions'
import FAQSection from '../components/pricingSections/FAQSection'
import Para1 from '../components/paragraphs/Para1'
import ContactFormSection from '../components/Company/ContactFormSection'

function GetSupport() {
     const faqs = [
  {
    question: "How can I contact IndiaBills support?",
    answer: "You can reach our support team through Live Chat, Email (support@indiabills.in), or Call Support during working hours (Mon–Sat, 10 AM–6 PM)."
  },
  {
    question: "What should I do if I'm unable to log in?",
    answer: "Ensure your internet connection is stable and check your credentials. If the problem persists, click ‘Forgot Password’ or contact our support team for help."
  },
  {
    question: "Can I use IndiaBills on multiple devices?",
    answer: "Yes! IndiaBills is cloud-based, so you can access your account from multiple devices using the same login credentials."
  },
  {
    question: "How do I reset my password?",
    answer: "Go to the login page and click ‘Forgot Password’. Follow the link sent to your registered email to reset your password securely."
  },
  {
    question: "Is my data safe on IndiaBills?",
    answer: "Absolutely! We use advanced encryption and secure servers to protect your business and financial data at all times."
  },
  {
    question: "How can I get product training?",
    answer: "You can access our step-by-step tutorials and training videos in the ‘Product Training’ section or schedule a session with our support team."
  },
  {
    question: "How do I report a technical issue or bug?",
    answer: "Please describe the issue in detail and share screenshots if possible via Live Chat or Email (support@indiabills.in). Our technical team will review it promptly."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can manage your subscription plan anytime from the ‘Billing & Subscription’ settings in your IndiaBills dashboard."
  },
  {
    question: "Do you offer remote support?",
    answer: "Yes, our support team can provide remote assistance through secure screen-sharing tools if required."
  },
  {
    question: "Where can I learn about new updates or features?",
    answer: "Stay tuned to our ‘Community’ page or follow our update announcements directly inside the IndiaBills dashboard."
  }
];

    return (
        <div>
            <HeroSection2 title='We’re Here to Help' subtitle='Need a hand? Our support team is ready to guide you every step of the way.' />
            <SupportOptions />
            <Para1 Title1="Master IndiaBills with" Title2="Expert-Led Product Training" p1="Empower your team with in-depth knowledge of IndiaBills. Our product training sessions are designed to help you understand every feature" p1_2="— through practical, step-by-step guidance." span1=" — from billing and inventory to CRM and analytics " p2="Whether you’re just getting started or looking to unlock advanced capabilities, our expert tutorials and video walkthroughs make it easy to learn at your own pace." p2_2="program today and streamline the way your business operates." span2=" Join our IndiaBills Product Training " />
            <FAQSection faqs={faqs} />
            <ContactFormSection />
            <ScrollingTextCTA />
        </div>
    )
}

export default GetSupport
