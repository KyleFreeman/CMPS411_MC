import React from 'react'
import UploadBtn from '../Buttons/UploadBtn'
import './Body.css'

const Body = () => {
    return (
        <div className="Body">
            <h3 className="uploadLabel">Upload Micro-Organism</h3>
            <UploadBtn />
        </div>
    )
}

export default Body