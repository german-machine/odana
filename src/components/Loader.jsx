import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({ loading }) => {
    return (
        <div className="w-full flex items-center justify-center h-screen place-items-center bg-white g-[#38B148]">
            <SyncLoader
                color="#38B148"
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader