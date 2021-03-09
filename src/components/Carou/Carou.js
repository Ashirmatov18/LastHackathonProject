import React from 'react';
import {Carousel} from "react-bootstrap";
import first from "../../assets/images/a5df95a7e44581d63b96e6e6ab630fca.jpg";
import second from "../../assets/images/China-economy.jpg";
import third from "../../assets/images/city-skyscrapers-night-new-york.jpg";

const Carou = () => {
    return (
        <div>
            <Carousel style={{marginTop: '-7px'}}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cheap</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Best ski shop</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={third}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Good quality</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carou;