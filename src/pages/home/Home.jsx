import React from 'react'
import styles from "./styles/Home.module.css";
import HeroSection from './HeroSection';
import MainContainer from '../../components/containers/mainContainer/MainContainer';

function Home() {
    return (
        <div>
            <HeroSection />
            <MainContainer heading={"Run Your Entire Business from One Platform"} subHeading1={"Stop juggling between spreadsheets, accounting software, CRMs, inventory tools, and HR systems."} subHeading2={"Our ERP lets you manage everything from one place — faster, smarter, and with"} textInRed={" 90% less manual work."} >  </MainContainer>
        </div>
    )
}

export default Home
