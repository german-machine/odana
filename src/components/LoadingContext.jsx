// LoadingContext.js
import React, { createContext, useContext, useState, useRef } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const isInitialLoad = useRef(true);

    return (
        <LoadingContext.Provider value={{ loading, setLoading, isInitialLoad }}>
            {children}
        </LoadingContext.Provider>
    );
};
