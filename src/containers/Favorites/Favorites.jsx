import React, { useState, useEffect } from 'react'
import './Favorites.css'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const FavoritesList = () => {

    let favoritesList = JSON.parse(localStorage.getItem('favoriteProducts'));
    const [favoriteProducts, setfavoritesProducts] = useState(favoritesList);

    useEffect(() => {
    }, [favoriteProducts])

    const deleteFromList = (itemId) => {
        favoritesList = favoritesList.filter(item => item.cartId !== itemId)
        localStorage.setItem('favoriteProducts', JSON.stringify(favoritesList))
        setfavoritesProducts(favoritesList);
    }

    const addToCart = (itemId) => {
        const cart = JSON.parse(localStorage.getItem('cartProducts'))
        const product = favoriteProducts.find(item => item.cartId === itemId);
        localStorage.setItem('cartProducts', JSON.stringify([...cart, product]));
        deleteFromList(itemId);
    }
    const productAddedToCart = () => {
        toast.success(`Added To Cart`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const deletedFromfavorites = () => {
        toast.warning(`Deleted`, {
            position: toast.POSITION.TOP_CENTER
        })
    }


    
    return (
        <>
            {favoritesList.length !== 0 ?
                <>
                    <h1 className='favorite'>YOUR FAVORITES</h1>
                    <div className='wish-main'>
                        {favoriteProducts?.map(item => (
                            <div key={item.cartId} className='wish-card'>
                                <div className='title'>
                                    <h5>{item.title}</h5>
                                </div>

                                <div className='wish-img'>
                                    <img src={item.image} />
                                </div>
                                <div className='wish-desc'>
                                    <span>YEAR: {item.year} </span>
                                    <span>PRICE: {item.price} €</span>
                                </div>
                                <div className='buttons'>
                                    <button
                                        onClick={() => {
                                            deleteFromList(item.cartId)
                                            deletedFromfavorites()
                                        }}
                                    >Delete</button>
                                    <button
                                        onClick={() => {
                                            addToCart(item.cartId)
                                            productAddedToCart()
                                        }}
                                    >To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                :
                <Link className="footer-link__buy" to="/products"><div className="empty-wishlist"></div></Link>}
                <ToastContainer autoClose={1500} />
        </>

    )
}

export default FavoritesList