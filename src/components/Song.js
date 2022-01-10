import React from 'react'

const Song = ({ song }) => {
   
    return (
        <div className='container mt-3 p-4'>
            <h6 className='text-center p-2 mb-3'>Mp3 Generated</h6>
            <div className='row justify-content-center text-center '>
            <div className='col-md-6 '>
            
                <p className='mt-3'>{song.title}.mp3 </p>
            </div>
            <div className='col-md-6'>
               <a href={song.link} className='btn btn-success mt-3' >Download</a>
            </div>
            </div>
        </div>
    )
    
   
   
}

export default Song
