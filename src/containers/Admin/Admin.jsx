import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import { API } from '../../helpers/constants';
import "./Admin.css"
import { Link } from 'react-router-dom';


const Admin = () => {
    const { products, getProducts, setProducts, deleteProduct, editProductData } = useContext(productsContext)
    const [item, setItem] = useState({
        name: '',
        surname: '',
        price: '',
        image: '',
        imageDetail: '',
        age: '',
        stage: '',
        category: '',
    });

    useEffect(() => {
        getProducts(`${API}`)
    }, [])

    const getInpValue = (e) => {
        const newProduct = {
            ...item,
            [e.target.name]: e.target.value
        }
        setItem(newProduct);
    }
    function addProduct() {
        setProducts(item);
        setItem({
            name: '',
            surname: '',
            price: '',
            image: '',
            imageDetail: '',
            age: '',
            stage: '',
            category: '',
        });
    }

    return (
        <div className="container">
            <div className="product">
                <h3>Добавление товара</h3>
                <div className="item-plus">
                    <input type="text"
                        value={item.name}
                        placeholder="Name"
                        name="name"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        placeholder="Surname"
                        value={item.surname}
                        name="surname"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        value={item.price}
                        placeholder="Price"
                        name="price"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        value={item.image}
                        placeholder="Изображение"
                        name="image"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        value={item.imageDetail}
                        placeholder="Изображение для details"
                        name="imageDetail"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        value={item.age}
                        placeholder="Age"
                        name="age"
                        onChange={getInpValue}
                    />
                    <input type="text"
                        value={item.stage}
                        placeholder="Stage"
                        name="stage"
                        onChange={getInpValue}
                    />
                    <select className="item-category"
                        name="category"
                        value={item.category}
                        onChange={getInpValue}
                    >
                        <option>Category</option>
                        <option value="first">Chinese</option>
                        <option value="second">English</option>
                    </select>
                    <button className="add-product__btn" onClick={addProduct}>Добавить</button>
                </div>

            </div>
            <h5>Таблица всех продуктов</h5>
            <table border='1' style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Цена</th>
                        <th>Категория</th>
                        <th>Изобh.</th>
                        <th>Редактирование</th>
                    </tr>
                </thead>
                {products.map(item => (
                    <tbody key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.age}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td><img style={{ width: '70px', height: '70px' }} src={item.image} /></td>
                            <td>    
                                <Link to='/edit'>
                                    <button onClick={() => editProductData(item.id)}>Edit</button>
                                </Link>
                                <button onClick={() => deleteProduct(item.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Admin