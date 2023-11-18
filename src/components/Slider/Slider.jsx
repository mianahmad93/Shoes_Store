import React from 'react';
import './Slider.css';
import image1 from '../assets/one.jpg';
import image3 from '../assets/three.jpg';
import image4 from '../assets/four.jpg';
import card1 from '../assets/Men.webp';
import card2 from '../assets/Women.webp';
import card3 from '../assets/kid.webp';
import SwiperPage from './Swiper';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
      <div className='Slider_div'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={image1} class="d-block w-100" alt="..." />
            </div>

            <div class="carousel-item">
              <img src={image3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={image4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div class="container mt-5 mb-5 p-3">
        <div class="row">
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Link to={'mens'}>
              <div class="card mycards" style={{ width: "23rem" }}>
                <img class="card-img-top" src={card1} alt="Card image cap" />
              </div>
            </Link>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Link to={'womens'}>
              <div class="card mycards" style={{ width: "23rem" }}>
                <img class="card-img-top" src={card2} alt="Card image cap" />
              </div>
            </Link>
          </div>
          <div class="col-sm-12 col-lg-4 col-md-6">
            <Link to={'kids'}>
              <div class="card mycards" style={{ width: "23rem" }}>
                <img class="card-img-top" src={card3} alt="Card image cap" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <SwiperPage />
    </>
  )
}

export default Slider