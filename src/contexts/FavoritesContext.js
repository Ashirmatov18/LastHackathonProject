import React, { useContext, useEffect } from 'react';
import { productsContext } from './ProductsContext';

export const favoritesContext = React.createContext();


const FavoritesContextProvider = ({ children }) => {
    const { favoriteProducts } = useContext(productsContext);

    useEffect(() => {
        if (!localStorage.getItem('favoriteProducts')) {
            localStorage.setItem('favoriteProducts', '[]');
        }
        if (favoriteProducts) {
            const cart = JSON.parse(localStorage.getItem('favoriteProducts'));
            cart.push({
                ...favoriteProducts,
                cartId:Date.now()})
            localStorage.setItem('favoriteProducts', JSON.stringify(cart))
        }
    }, [favoriteProducts])
    
    return (
        <favoritesContext.Provider value={{

        }}>
            {children}
        </favoritesContext.Provider>
    )
}

export default FavoritesContextProvider;