import React from 'react'
import ChinaList from '../containers/ProductsLists/ChinaList/ChinaList'
import CoffeeList from '../containers/ProductsLists/CoffeeList/CoffeeList'

const ProductsPage = ()=>{
    return (
        <div>
            <ChinaList/>
            <CoffeeList/>
        </div>
    )
}

export default ProductsPage