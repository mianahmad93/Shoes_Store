import React from 'react';
import './Slider.css';
import womens from '../assets/Womens_heel.webp';
import formals from '../assets/formals.webp';
import sports from '../assets/sports.webp';

const Sports = () => {
    return (
        <div className='mt-5 sports_div p-5'>
            <div className='text-center text_div'>
                <h4>#SPOTLIGHT</h4>
                <p> <span> We Know What Your Closet Needs!</span></p>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-sm-12 col-lg-4 col-md-6 mt-4">
                        <div class="card color_card" style={{ width: '22rem' }}>
                            <img class="card-img-top" src={womens} alt="Card image cap" />
                            <div class="card-body">
                                <h5 className='card_text'>Womens Heels</h5>
                                <p>
                                    <span>Shop Now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6 mt-4">
                        <div class="card color_card" style={{ width: '22rem' }}>
                            <img class="card-img-top" src={formals} alt="Card image cap" />
                            <div class="card-body">
                                <h5 className='card_text'>MENS FORMALS</h5>
                                <p>
                                    <span>Shop Now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4 col-md-6 mt-4">
                        <div class="card color_card" style={{ width: '22rem' }}>
                            <img class="card-img-top" src={sports} alt="Card image cap" />
                            <div class="card-body">
                                <h5 className='card_text'>SPORTS SHOES & SNEAKERS</h5>
                                <p>
                                    <span>Shop Now</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports