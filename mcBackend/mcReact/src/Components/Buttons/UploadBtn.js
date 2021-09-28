import React, { useState } from 'react'

const UploadBtn = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const submitForm = () => {
        const data = new FormData();
        data.append('file', selectedFile);

        fetch("http://localhost:3001/home",
            {
                body: data,
                method: "POST"
            })
        .then((res) => {
            console.log(res.status);
        })
    }

    return (
        <div>
           <input type="file" id="myFile" name="file" onChange={(e) => setSelectedFile(e.target.files[0])}/>
           <button onClick={submitForm}>Submit</button>
        </div>
    )
}

export default UploadBtn