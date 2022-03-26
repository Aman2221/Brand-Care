import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CSS/HomePage.css'

const HomePage = () => {
  return (
    <div className="homePage">
        <div className="homePageComp">
            <Carousel infiniteLoop={true} showThumbs={false} transitionTime={1000} showIndicators={false} showStatus={false}>
                <div id="carouselInnerDi1" className="carouselInnerDiv">
                    <div className="carouselInnerIn">
                        <div className="carouselInnerInLeft">
                            <h1>Feel <b>Batter.</b></h1>
                            <h1>Get <b>Batter.</b></h1>
                            <h1>Stay <b>Batter.</b></h1>
                            <button>Begin Now</button>
                        </div>
                        <div className="carouselInnerInRight">
                            <img src="https://www.linkpicture.com/q/manImg.png" alt="img" />
                        </div>  
                    </div>
                </div>
                <div id="carouselInnerDi2" className="carouselInnerDiv">
                    <div className="carouselInnerIn">
                        <div className="carouselInnerInLeft">
                            <h1>Feel <b>Batter.</b></h1>
                            <h1>Get <b>Batter.</b></h1>
                            <h1>Stay <b>Batter.</b></h1>
                            <button>Begin Now</button>
                        </div>
                        <div className="carouselInnerInRight">
                            <img src="https://www.linkpicture.com/q/manImg.png" alt="img" />
                        </div>  
                    </div>
                </div>
                <div id="carouselInnerDi3" className="carouselInnerDiv">
                    <div className="carouselInnerIn">
                        <div className="carouselInnerInLeft">
                            <h1>Feel <b>Batter.</b></h1>
                            <h1>Get <b>Batter.</b></h1>
                            <h1>Stay <b>Batter.</b></h1>
                            <button>Begin Now</button>
                        </div>
                        <div className="carouselInnerInRight">
                            <img src="https://www.linkpicture.com/q/manImg.png" alt="img" />
                        </div>  
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default HomePage