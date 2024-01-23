import React from 'react'
import beardShave from '../../../assets/beard_shave.jpg'
import hair_cut from '../../../assets/hair_cut.jpg'
import pic3 from '../../../assets/pic3.jpg'
import logo from '../../../assets/logo.png'
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";



import './Services.css'

const Services = () => {
    return (
        <div className='services' id='what-we-do'>

            <div className='services-container'>

                <div className='services-info'>
                    <img src={logo} alt=''></img>
                    <h1>What We Do?</h1>
                    <p className='mr-bottom services-para'>Unleash Your Inner Swagger</p>
                    <p className='mr-bottom services-para'>Crafting Confidence, One Cut at a Time</p>
                </div>

                <div className='services-grid'>
                    <div className='services-box'>
                        <img src={hair_cut} alt=''></img>
                        <h2>Haircut Styles</h2>
                        <p className='mr-bottom services-para'>Where Style Meets Tradition</p>
                        <p className='mr-bottom services-para'>Precision Cuts, Timeless Style</p>
                    </div>
                    <div className='services-box'>
                        <img src={beardShave} alt=''></img>
                        <h2>Beard Trim</h2>
                        <p className='mr-bottom services-para'>Beyond Haircuts – It's a Lifestyle</p>
                        <p className='mr-bottom services-para'>Barbered to Perfection, Styled for Life</p>
                    </div>
                  
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Hot Shave</h2>
                        <p className='mr-bottom services-para'>Elevate Your Look, Sharpen Your Style</p>
                        <p className='mr-bottom services-para'>Experience the Artistry of A Perfect Cut</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
