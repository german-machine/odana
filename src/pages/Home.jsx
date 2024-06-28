import React from 'react'
import Header from '../components/Header'
import WhyFraud from '../components/WhyFraud'
import HowItWorks from '../components/HowItWorks'
import ToTop from '../components/ToTop'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { useLoading } from '../components/LoadingContext'

const Home = () => {
    const { loading, setLoading, isInitialLoad } = useLoading();

    useEffect(() => {
        if (isInitialLoad.current) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
                isInitialLoad.current = false;
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [setLoading, isInitialLoad]);

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