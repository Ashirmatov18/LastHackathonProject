import React, { useState, useEffect, useContext } from 'react'
import { productsContext } from '../../../contexts/ProductsContext'
import { Link } from 'react-router-dom';
import './EditModal.css'

const EditModal = () => {
    const { editProduct, saveNewProduct } = useContext(productsContext)
    console.log(editProduct)
    const [newItem, setItem] = useState(editProduct)
    
    useEffect(() => {
        setItem(editProduct)
    }, [editProduct])
    
    // console.log(newItem)
    function handleEditInput(e) {
        let newProduct = {
            ...newItem,
            [e.target.name]: e.target.value,
        }
        setItem(newProduct)
        console.log(newProduct)
    }
    return (
        <div>
            {newItem ?
                <>
                    <div className='main-modal'>
                        <div className='inner-modal'>
                                <div className='close'>
                                    <span>Изменение данных</span>
                                    <Link to='/admin'>
                                        <button className='btn'>&times;</button>
                                    </Link>
                                </div>
                            <input type='text'
                                name={'name'}
                                value={newItem.name}
                                onChange={handleEditInput}
                                placeholder='Name'
                            />
                            <input type='text'
                                name={'surname'}
                                value={newItem.surname}
                                onChange={handleEditInput}
                                placeholder='Surname'
                            />
                            <input type='text'
                                name={'price'}
                                value={newItem.price}
                                onChange={handleEditInput}
                                placeholder='Price' />
                            <input type='text'
                                name={'image'}
                                value={newItem.image}
                                onChange={handleEditInput}
                                placeholder='Image' />
                            <input type='text'
                                name={'imageDetail'}
                                value={newItem.imageDetail}
                                onChange={handleEditInput}
                                placeholder='New Image' />
                            <input type='text'
                                name={'age'}
                                value={newItem.age}
                                onChange={handleEditInput}
                                placeholder='Age' />
                            <select className="item-category"
                                name="category"
                                value={newItem.category}
                                onChange={handleEditInput}
                            >
                                <option>Выбрать категорию</option>
                                <option value="first">Мужчина</option>
                                <option value="second">Женщина</option>
                            </select>
                            <div>
                                <Link to='/admin'>
                                    <button
                                        onClick={() => saveNewProduct(newItem)}
                                        className='button1'>Save</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
                : <h1>Загрузка</h1>
            }
        </div>
    )
}

export default EditModal