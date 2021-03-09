import React, { useContext, useEffect, useState } from 'react';
import './ProductDetail.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import { productsContext } from '../../contexts/ProductsContext';
import { commentsContext } from '../../contexts/CommentsContext';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { SignalCellularNullOutlined } from '@material-ui/icons';



function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };


const ProductDetail = (props) => {
    const { productDetails, getDetails,ratingProduct } = useContext(productsContext);
    const { getComments } = useContext(commentsContext);

    const [data, setData] = useState(null)



    useEffect(() => {
        getDetails(props.match.params.id);
        getComments(props.match.params.id);
    }, []);

    useEffect(() => {
        if (productDetails) {
            console.log('THIS IS DATA', productDetails)
            setData(productDetails)
        }
    }, [productDetails])

    const [rating, setRating] = useState(0)

    function handleRating(id, e) {

        console.log(e)
        ratingProduct(id, e)
      }

    return (
        <>  
            <div className='details-head'>
                <h2>Подробнее</h2>
            </div>

            <div className='details'>
                <div style={{border: '2px black solid'}}>
                    <div className='details-image'
                        style={{
                            background: `url(${productDetails.image}) no-repeat center center`,
                            backgroundSize: 'cover',
                            width: '370px',
                            height: '310px', 
                            margin: '10px'
                        }}>
                    </div>
                </div>
                <div className='details-desc'>
                    <h3>Имя :{productDetails.name}</h3>
                    <span>Фамилия: {productDetails.surname}</span>
                    <span>Стаж: {productDetails.stage}</span>
                    <span>Возраст: {productDetails.age}</span>
                    <h3>Цена в час: {productDetails.price} c.</h3>

                </div>
                {data && data.rating && (
                     <Box component="fieldset" mb={3} borderColor="transparent">
                     <Rating
                       name="customized-empty"
                       defaultValue={data.rating}
                      //  defaultValue={'2'}
                       onChange={(e) => {
                           console.log(productDetails)
                           handleRating(productDetails?.id, e.target.value)}}
                       precision={0.5}
                       emptyIcon={<StarBorderIcon fontSize="inherit" />}
                     />
                     <h4>Оцените качество продукции</h4>
                   </Box>
                )}
               

            </div>
            <CommentsSection id={props.match.params.id} />

        </>
    );
};

export default ProductDetail;