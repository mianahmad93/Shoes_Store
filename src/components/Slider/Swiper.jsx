import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.css";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import shoe1 from '../assets/shoe1.avif';
import shoe2 from '../assets/shoe2.avif';
import shoe3 from '../assets/shoe3.avif';
import shoe4 from '../assets/shoe4.avif';
import shoe5 from '../assets/shoe5.avif';
import shoe6 from '../assets/shoe6.avif';
import Sports from './Sports';


const SwiperPage = () => {
    // const data = [
    //     { src: shoe1, text: "Ndure", para: "Mens Sporty Sneaker", Price: 4999 },
    //     { src: shoe2, text: "Ndure", para: "Mens Athletic Sneakers", Price: 5999 },
    //     { src: shoe3, text: "Ndure", para: "Mens Sport lace-up trainers", Price: 7999 },
    //     { src: shoe4, text: "Ndure", para: "Mens premium leather  formats ", Price: 4999 },
    //     { src: shoe5, text: "Ndure", para: "Mens Everyday Boots", Price: 5999 },
    //     { src: shoe6, text: "Ndure", para: "Mens Basic loafers", Price: 4999 },
    // ]

    const data = useSelector((state) => {
        return state.ShoeDetails
    })
    return (
        <>
            <div className='Swiper_section mb-5'>
                <Swiper
                    breakpoints={{
                        360: {
                            width: 360,
                            slidesPerView: 1,
                        },
                        576: {
                            width: 576,
                            slidesPerView: 2,
                        },
                        412: {
                            width: 412,
                            slidesPerView: 1
                        },
                        750: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}
                    slidesPerView={4}
                    spaceBetween={10}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        data.map((item) => {
                            return <>
                                <SwiperSlide>
                                    <div class="card" style={{ width: '17rem', height: "fit-content", border: "none" }}>
                                        <img class="card-img-top" src={item.src} alt="Card image cap" />
                                        <div class="card-body">
                                            <p class="card-text">{item.text}</p>
                                            <p>{item.para}</p>
                                            <p>Rs.{item.Price}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </>
                        })
                    }

                </Swiper>
            </div>
            <Sports />
        </>
    )
}

export default SwiperPage;