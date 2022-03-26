import React from 'react'
import './CSS/HealingComp.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HealingComp = () => {
  return (
    <div className="healingDiv">
        <div className="healingDivSec">
            <h1><b>Healing</b> Begins Here</h1>
            <h2>Choose the subject your seeking to improve</h2>
            <div className="healingDivSectionCarousel" id='healingDivSectionCarouselDesktop'>
                <Carousel infiniteLoop={true} showThumbs={false} transitionTime={1000} showIndicators={false} showStatus={false}>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-3.png" alt="img" />
                                <h3>Depression</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-2_4.png" alt="img" />
                                <h3>Alcohol Addiction</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-1_3.png" alt="img" />
                                <h3>Anxiety</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-3.png" alt="img" />
                                <h3>Depression</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-2_4.png" alt="img" />
                                <h3>Alcohol Addiction</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-1_3.png" alt="img" />
                                <h3>Anxiety</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-3.png" alt="img" />
                                <h3>Depression</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-2_4.png" alt="img" />
                                <h3>Alcohol Addiction</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-1_3.png" alt="img" />
                                <h3>Anxiety</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="healingDivSectionCarousel" id='healingDivSectionCarouselMobile'>
                <Carousel infiniteLoop={true} showThumbs={false} transitionTime={1000} showIndicators={false} showStatus={false}>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-3.png" alt="img" />
                                <h3>Depression</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-2_4.png" alt="img" />
                                <h3>Alcohol Addiction</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="healingDivSecMain">
                            <div>  
                                <img src="https://www.linkpicture.com/q/user-1_3.png" alt="img" />
                                <h3>Anxiety</h3>
                                <p>Uplift your mood and step out of depressive thought with positive habits</p>
                                <button>Discover more</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default HealingComp