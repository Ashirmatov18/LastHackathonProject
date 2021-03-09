import React from 'react'
// import CarouselHome from '../../pages/ChinaPage/CarouselHome'
import './Home.css'
import Places from '../Places/Places'
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import CarouselHome from '../../pages/ChinaPage/CarouselHome'
import Jumbotron from '../../components/JumboTron';
import { Container, Row ,Col} from 'react-bootstrap';
import China from '../../assets/images/China-economy.jpg'
import Carou from '../../components/Carou/Carou';
import SimpleMap from '../../components/Map/SimpleMap';


const Home = () => {

    return (
        <>
            <div>
                <div className='main-block'>
                    <span className='span'>Future</span>
                    <Link to='/places' style={{ textDecoration: 'none' }}>
                        <button className="btn1 fourth">Courses</button>
                    </Link>

                </div>
                {/* <Places />
                {/* <CarouselHome/> */}
            </div>
            <Carou/>
            <Jumbotron />

            {/* <Container>
                <Row>
                    <Col md={7} >
                        <img src={China} height={400} />
                    </Col>
                    <Col className ='column' md={4}>
                        <p>
                            Школа английского языка Language Link была основана в Лондоне в 1975 году.
                            Начиная с открытия школы в центральной части Лондона, компания Language Link
                            ставила целью повышение уровня обучения иностранным языкам, развитие сотрудничества
                            в сфере образования и улучшение взаимопонимания между жителями различных стран.
                        </p>
                    </Col>
                </Row>
            </Container> */}
            <SimpleMap/>
            {/* <CarouselHome /> */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
            </div>

        </>
    )
}

export default Home