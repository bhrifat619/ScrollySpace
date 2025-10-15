import React from 'react'
import { RotateLoader } from 'react-spinners'

function Loader() {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <RotateLoader
                size={20} color='rgb(67 56 202 / var(--tw-text-opacity, 1))'
            />
        </div>
    )
}

export default Loader