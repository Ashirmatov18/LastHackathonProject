import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import carousel1 from '../../assets/images/a5df95a7e44581d63b96e6e6ab630fca.jpg';
import carousel2 from '../../assets/images/China-economy.jpg';
import './Carousel.css'

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000} className='carousel1' style={{transition: '3s', height: '400px', objectFit:'contain'}}>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Лучшие Преподаватели</h2>
                    <p>Обучат Вас за короткие сроки</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} className='carousel1' style={{transition: '3s', height: '400px', }}>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 style={{color: 'white', textDecorationColor: 'black'}}>Будущее зависит от Вас!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel1' style={{transition: '3s', height: '400px', }}>
                <img
                    className="d-block w-100"
                    src={'https://images.wallpaperscraft.ru/image/kitay_zdaniya_fonariki_mnozhestvo_ukrashenie_58624_1280x720.jpg'}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>По Самым Доступным ценам</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome