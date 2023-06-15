import React, { useState } from 'react'
import "./Navbar.css"
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Navbar() {

    const [image, setImage] = useState("")
    const [result, setResult] = useState([])
    const ACCES_KEY = "1v0o3ycJgKIjJGfkx3elsAMQH1eehQofy1T2m7qKcmo"

    const getValue = (event) => {
        setImage(event.target.value)
    };
    const getImages = () => {
        const urlAPI = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + ACCES_KEY;
        axios.get(urlAPI).then((response) => {
            setResult(response.data.results)
            console.log(response);
        })
    }

    return (
        <div className='main'>
            <h1 className='title'>Search Images Shohruhmirzo</h1>
            <div className="form">
                <input className='form__input' type="text" name='image' placeholder='search images ...'  onChange={getValue}/>
                <button className='form__search' onClick={getImages} type="submit">Search</button>
            </div>

            <div className="result">
                {result.map((image, id) => (
                    <div className="card" key={image.id}>
                        <a>
                            <LazyLoadImage
                             className='resultImage' 
                             src={image.urls.full} 
                             effect="blur" delayTime="300"/>
                             <h3 className='username'>Photo by {image.user.name}</h3>

                           
                        </a>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar