import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Song from './Song'
const Search = () => {

const [song, setSong] = useState({
    link: '',
    title: '',
    msg: ''
    
})

const getSong = (e) =>{
    e.preventDefault()
    setSong({ msg: 'Loading...'})
    var input = e.target.songUrl.value;
    const url = new URL(`${input}`)
    const parsed = url.searchParams.get('v')
     
    var options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: `${parsed}`},
        headers: {
          'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
          'x-rapidapi-key': 'f59169bdcdmsh7c9d6429cf46c06p11a942jsn9b6550118f03'
        }
      };
      
      axios.request(options).then(function (response) {
          setSong({title: response.data.title, link: response.data.link, msg: 'Success' })
      }).catch(function (error) {
          console.error(error);
      });
   
}

    return (
        <div className='container mt-3 p-4'>
            <div className="jumbotron">
                <h1 className="display-4">Youtube to Mp3</h1>
                <p className="lead">This is a Youtube-mp3 Converter App</p>
                <hr className="my-4" />
                <form className="d-flex" onSubmit={getSong}>
                    <input className="form-control me-sm-2" name='songUrl' type="text" placeholder="Enter Youtube URL  |  EX: https://www.youtube.com/watch?v=EHP7rAsKBdU" />
                        <button className="btn btn-primary  my-sm-0" type="submit">Convert</button>
                </form>
                   
            </div>
                 {
                   song.msg === 'Success'? <Song song={song} /> : <div className='p-2 mt-3'>{song.msg}</div>
                 }
          
        </div>
    )
}

export default Search
