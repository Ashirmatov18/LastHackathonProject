import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FormPage.css';


const FormPage = () => {
    return (
        <div className="form-section">
            <h2 style={{textAlign: 'center'}}>Форма оплаты заказа</h2>
            <Container>
        
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Ваше ФИО</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Адрес доставки</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Город</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Категория продукта</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
            
                            <option>Выбрать категорию</option>
                            <option value="first">Первые блюда(закуски, салаты, супы)</option>
                            <option value="second">Вторые блюда</option>
                            <option value="deserts">Десерты</option>
                            <option value="water">Напитки и кофе</option>


                            </Form.Control>
                        </Form.Group>
                      
                    </Form.Row>


                    <Link to="/pay-form"><Button variant="primary" style={{width: '150px', height: '40px',borderRadius: '0'}} type="text">
                        Submit
                    </Button>
                    </Link>
                </Form>
            </Container>
        </div>
    );
};
export default FormPage;