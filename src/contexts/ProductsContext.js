import React, { useReducer } from 'react';
import axios from 'axios';
import { API } from '../helpers/constants';

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    editProduct: null,
    productDetails: [],
    cartProducts: null,
    favoriteProducts: [],
    count: 0
}

const reducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case "GET_PRODUCTS": return{
            ...state,
            products: action.payload,
        }
        case "EDIT_PRODUCT": return{
            ...state, 
            editProduct: action.payload
        }
        case "GET_PRODUCT_DETAILS": return{
            ...state,
            productDetails: action.payload
        }
        case "GET_PRODUCTS_COUNT": return{
            ...state,
            count: action.payload
        }
        case "GET_PRODUCT_FOR_CART": return{
            ...state,
            cartProducts: action.payload
        }
        case "GET_PRODUCT_FOR_FAVORITES": return{
            ...state,
            favoriteProducts: action.payload
        }
        default: return state;
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getProducts = async (url) => {
        const { data, headers }  = await axios(url);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
        dispatch({
            type: "GET_PRODUCTS_COUNT",
            payload: parseInt(headers["x-total-count"])
        })
    }
    // console.log(data)
    
    const setProducts = async (newProduct) => {
        await axios.post(`${API}`, newProduct)
        getProducts(`${API}`);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`);
        getProducts(`${API}`);
    }

    const editProductData = async (id) =>{
        let { data } = await axios(`${API}/${id}`)
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    const saveNewProduct = async(editProduct)=>{
        await axios.patch(`${API}/${editProduct.id}`, editProduct)
        getProducts(`${API}`)
    }

    const getDetails = async (id) => {
        const { data } = await axios(`${API}/${id}`);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data
        })
    }

    const getProductForCart = async (id) => {
        const { data } = await axios(`${API}/${id}`);
        dispatch({
            type: "GET_PRODUCT_FOR_CART",
            payload: data
        })
        console.log(data)
    }
    const getProductForFavorites = async (id) => {
        const { data } = await axios(`${API}/${id}`);
        dispatch({
            type: "GET_PRODUCT_FOR_FAVORITES",
            payload: data
        })
    }

    const getproductsDataRating = async (id) => {

        let { data, headers } = await axios(`http://localhost:8000/teacher/${id}`);
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })
    }

    async function ratingProduct(id, rating) {
        console.log('THIS IS ID', id)
        console.log('THIS IS RATING', rating)
        await axios.patch(`http://localhost:8000/teacher/${id}`, { rating: rating })
        // getproductsDataRating(id)
        getDetails(id)
    }

    return (
        <productsContext.Provider value={{
            products: state.products,
            editProduct: state.editProduct,
            productDetails: state.productDetails,
            cartProducts: state.cartProducts,
            count: state.count,
            favoriteProducts: state.favoriteProducts,
            getProductForCart,
            setProducts,
            getProducts,
            deleteProduct,
            editProductData,
            saveNewProduct,
            getDetails,
            getProductForFavorites,
            ratingProduct
        }}> 
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextProvider;
