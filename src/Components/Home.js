import React from 'react'
import Bg from '../assets img/bg.jpg'

function Home() {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src={Bg} class="card-img" alt="background" height={"550px"} />
                <div class="card-img-overlay">
                    <div className="container d-flex flex-column justify-content-center">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SESSION ARRIVALS</h5>
                    <p class="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>
                    </div>
                    
                    
                </div>
            </div>


        </div>
    )
}

export default Home
