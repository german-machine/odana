import React from 'react'
import Header from '../components/Header'
import WhyFraud from '../components/WhyFraud'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
    return (
        <div className="w-full h-full relative -top-[2px]">
            <Header />
            <WhyFraud />
            <HowItWorks />
        </div>
    )
}

export default Home