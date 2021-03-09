import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
// import cartDelete from '../../../assets/icons/cart-icons/trash-bin.svg';
import { Link } from 'react-router-dom';
// import backIcon from '../../../assets/icons/details-icons/previous.svg';
import { toast, ToastContainer } from 'react-toastify';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { cartContext } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';


const Cart = () => {
    const { getCount } = useContext(cartContext);
    const history = useHistory();

    let carts = JSON.parse(localStorage.getItem('cartProducts'));
    const [cartsProducts, setcartsProducts] = useState(carts);

    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        let price = totalCount;
        cartsProducts?.map(item => {
            price += +item.price
        })

        setTotalCount(price);
        getCount(cartsProducts);
    }, [cartsProducts])

    const deleteCart = (itemId) => {
        carts = carts.filter(item => item.cartId !== itemId)
        localStorage.setItem('cartProducts', JSON.stringify(carts))
        setcartsProducts(carts);
        setTotalCount(0);
    }
    
    const clearCart = () => {
        localStorage.setItem('cartProducts', JSON.stringify([]))
      history.push("/form-page")

    }



    const deletedFromCart = () => {
        toast.warning(`Deleted`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    return (
        <>
            {cartsProducts?.length !== 0 ?
                <div className='cart'>
                    <h1>Корзина</h1>
                    <div className='total'>
                        <h2>Итого: {totalCount}c.</h2>

                            <button onClick={() => clearCart()} className='zakaz'>Заказать</button>
                
                    </div>
                    {cartsProducts?.map(item=>(
                        <div key={item.id} className='cart-item'>
                            <div style={{
                                background: `url(${item.image}) no-repeat center center`,
                                width: '200px',
                                height: '150px',
                                backgroundSize: 'cover',
                                margin: '10px'     
                            }}></div>
                            <div className='cart-desc'>
                                <h3>{item.dish}</h3>
                                <span>{item.compos}</span>
                                <h2>{item.price}c.</h2>
                            </div>
                            <DeleteSweepIcon onClick={() => {
                                                    deleteCart(item.cartId)
                                                    deletedFromCart()
                                                }}/>

                        </div>
                    ))}
                    <div className='total'>
                        <h2>Итого: {totalCount}c.</h2>

                            <button onClick={() => clearCart()} className='zakaz'>Заказать</button>
                
                    </div>
                </div>
                :
                <Link to="/products">
                    <div className="empty-cart"></div>
                </Link>
            }
            <ToastContainer autoClose={1500} />
        </>
    );
};

export default Cart;