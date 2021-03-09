import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo{
        background: url('https://www.dailymaverick.co.za/wp-content/uploads/Thamm-CTMafia2Bail.jpg') no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2
    }
    .overlay{
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1
    }
`


const Jumbotron = ()=>(
    <Styles>
    <Jumbo fluid className='jumbo'>
        <div className ='overlay'></div>
        <Container>
            <h1>Sala vsem</h1>
            <p>Мы созданы, чтобы служить надежным 
            проводником в мир иностранных языков,
             новых знакомств и достижений.
            </p>
        </Container>
    
    </Jumbo>
    </Styles>
)

export default Jumbotron