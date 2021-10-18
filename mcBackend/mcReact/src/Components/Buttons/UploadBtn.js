import React, { useState } from 'react'
import './UploadBtn.css'

const UploadBtn = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const submitForm = () => {
        const data = new FormData();
        data.append('file', selectedFile);

        fetch("http://localhost:3001/upload",
            {
                body: data,
                method: "POST"
            })
        .then((res) => res.text())
        .then((data) => {
            let classify = data;
            let output = document.getElementById("classify");
            console.log(classify);
            output.innerHTML = classify;
            output.style.display = "block";
        })
    }

    return (
        <div className="uploadBtn">
           <input type="file" id="myFile" name="file" onChange={(e) => setSelectedFile(e.target.files[0])} multiple accept=".jpg,.jpeg,.png"/>
           <button onClick={submitForm}>Submit</button>
           <p className="classify" id="classify"></p>
        </div>
    )
}

export default UploadBtn