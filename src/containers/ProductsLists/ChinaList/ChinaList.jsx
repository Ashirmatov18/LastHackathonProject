import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../../../contexts/ProductsContext'
import { API } from '../../../helpers/constants'
import './ChinaList.css'
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import ProductsPagination from '../../../components/ProductsPagination/ProductsPagination'
import Likes from '../../Header/Likes/Likes';

const ChinaList = ()=>{
    const { products, getProducts, count, getProductForCart,getProductForFavorites } = useContext(productsContext)
    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(()=>{
            getProducts(`${API}?category=first&_limit=6&_page=${page}&q=${searchValue}`)
    },[page, searchValue])

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
                        placeholder="Поиск"
                        value={searchValue}
                        onChange={(e) => {
                            e.preventDefault();
                            setSearchValue(e.target.value)
                        }}
                    />
                </div>
        <div className='china-list'>
            {products.map(item => (
                <div className='china-card' key={item.id}>
                    <div className='china-image' style={{background: `url(${item.image}) no-repeat center center`,backgroundSize:'cover'}}>
                    </div>
                    <div className='qwe'>
                        <div className='china-desc'>
                            <h4 className='name-dish'>{item.name} {item.surname}</h4>
                            <span className='compos'>{item.stage}</span>
                            <h5 className='price'>Цена: {item.price}c.</h5>
                            <div className="item-details"><Link to={`details/${item.id}`}>Подробнее</Link></div>
                        </div>
                        <div className='china-btns'>
                            <button className='btn-1'  onClick={() => {
                                            getProductForCart(item.id)
                                            // productAddedToCart()
                                        }}>В корзину</button>
                            <button className='btn-2' onClick={() => {
                                            getProductForFavorites(item.id)
                                            // productAddedToWish()
                                        }}>В избранное</button>
                                        <Likes/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange}/>
        </>
    )
}

export default ChinaList