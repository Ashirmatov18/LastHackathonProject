import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';
import { productsContext } from '../../../contexts/ProductsContext';
import { API } from '../../../helpers/constants';
import ProductsPagination from '../../../components/ProductsPagination/ProductsPagination'
import { TextField } from '@material-ui/core';
import './CoffeeList.css'
import BookmarkIcon from '@material-ui/icons/Bookmark';



// import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    media: {
        height: 180,
        backgroundSize: 'contain'
    },
});

export default function CoffeeList({ data }) {
    const classes = useStyles();
    const { products, getProducts, count, getProductForCart } = useContext(productsContext)
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (filter) {
            getProducts(`${API}?place=coffee-house&_limit=6&_page=${page}&q=${searchValue}&category=${filter}`)
        } else {
            getProducts(`${API}?place=coffee-house&_limit=6&_page=${page}&q=${searchValue}`)
        }
    }, [page, searchValue, filter])

    const onPaginationChange = (e, value) => {
        setPage(value)
    }
    return (
        <>
            <div className="search-input">
                <TextField
                    fullWidth={true}
                    variant={'outlined'}
                    style={{
                        maxWidth: '50%',
                        marginTop: '30px', display: 'block',
                        backgroundColor: 'white',
                        border: '0',
                        borderRadius: '0'
                    }}
                    placeholder="Найти"
                    value={searchValue}
                    onChange={(e) => {
                        e.preventDefault();
                        setSearchValue(e.target.value)
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {products.map(item => (
                    <Card className={classes.root} key={item.id} style={{ margin: '20px' }}>
                        <CardActionArea>
                            {/* <CardMedia
                            className={classes.media}
                            image={item.image}
                        /> */}
                            <img src={item.image} alt="" style={{ width: '100%', height: '300px', justifyContent: 'center', display: 'flex' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                                {item.surname}
                                <Typography variant="body2" color="textSecondary" component="p">

                                    <Truncate lines={3} ellipsis={<span>...</span>}>
                                        {item.stage}
                                    </Truncate>
                                    <div className="item-details"><Link to={`details/${item.id}`}>Подробнее</Link></div>

                                </Typography>
                                <h4>{item.price} c.</h4>
                                
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                    <button className='btn-1' onClick={() => {
                                        getProductForCart(item.id)
                                        // productAddedToCart()
                                    }}>Оплатить</button>
                            </Button>
                                    <BookmarkIcon />
                        </CardActions>
                    </Card>
                ))}
            </div>
            <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />
        </>
    );
}