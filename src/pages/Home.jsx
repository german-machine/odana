import React from 'react'
import Header from '../components/Header'
import WhyFraud from '../components/WhyFraud'
import HowItWorks from '../components/HowItWorks'
import ToTop from '../components/ToTop'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const Home = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <>
            {
                loading ?
                    <Loader loading={loading} /> :
                    <div className="w-full h-full relative -top-[2px]">
                        <Header />
                        <WhyFraud />
                        <HowItWorks />
                        <ToTop />
                    </div>
            }
        </>
    )
}

export default Home