import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel(props) {
    
        return(
            


            <Swiper
                
                slidesPerView={2}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{clickable: true}}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >

                
                
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image2.jpg')} alt="image2"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image4.jpg')} alt="image4"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image5.jpg')} alt="image5"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image6.jpg')} alt="image6"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image7.jpg')} alt="image7"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image8.jpg')} alt="image8"/></SwiperSlide>
                <SwiperSlide><img src={require('../Assets/HeaderCarousel/Image10.jpg')} alt="image9"/></SwiperSlide>

               

            </Swiper>
                
                
        );
    
}

export default Carousel