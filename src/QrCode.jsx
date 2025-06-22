import React from 'react'
import { useState } from 'react';


export const QrCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setqrData] = useState("Babu");
    const [qrSize, setqrSize] = useState("150")
    async function generateQrCode()
    {
        setLoading(true);
        try
        {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}/`;
            setImg(url)
        }
        catch(error)
        {
            console.log(error)
        }
        finally
        {
            setLoading(false)
        }
    }
    const downloadQrCode = () =>
    {
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'qrcode.png';
            link.click();
        })
    }
    return (
    <div className='app-container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait..</p>}
        {img &&<img src={img} className='qr-code-image'/>}
        <div>
            <label 
                htmlFor="dataInput" 
                className='input-label'>
                Data for Qr code:
            </label>
            <input 
                type="text" 
                name="" id="dataInput" 
                placeholder='Enter data for QR code'
                value={qrData}
                onChange={(e) => setqrData(e.target.value)}     
            />

            <label 
                htmlFor="sizeInput" 
                className='input-label'>
                Image size (e.g., 150): 
            </label>
            <input 
                type="text" 
                name="" 
                id="sizeInput" 
                placeholder='Enter image size'
                value={qrSize}
                onChange={(e) => setqrSize(e.target.value)}
            />
            <button 
                className='generate-button' 
                onClick={generateQrCode}
                disabled={loading}>
                Generate Qr Code
            </button>
            <button 
                className='download-button'
                onClick={downloadQrCode}>
                Download Qr Code
            </button>
        </div>
        <p className='footer'>Designed by 
            <a href="http://localhost:5173/?fname=&sname=&state=&District=&pincode="> Babu
            </a>
        </p>
    </div>
  )
}
