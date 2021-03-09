import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Admin from "./containers/Admin/Admin";
import EditModal from "./containers/Admin/EditModal/EditModal";
import Cart from "./containers/Cart/Cart";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Places from "./containers/Places/Places";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import Register from "./pages/Auth/Register/Register";
import China from "./pages/ChinaPage/China";
import Login from './pages/Auth/Login/Login'
import Coffee from './pages/CoffeePage/Coffee'
import DropDown from "./containers/Header/DropDown";
import PaymentForm from "./containers/PaymentForm/PaymentForm";
import FormPage from "./containers/FormOf/FormPage";
import ProductsPage from '../src/pages/ProductsPage'
import FavoritesList from "./containers/Favorites/Favorites";
import Muse from "./containers/Muse/Muse";
import EnglishMainTest from "./containers/Test/EnglishMainTest";
import ChinaMainTest from "./containers/Test/ChinaMainTest";
import MainList from './containers/Test/MainList'
// import CoffeeList from "./containers/ProductsLists/CoffeeList/CoffeeList";

const Routes = ()=>{
    return( 
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/pay-form' component={PaymentForm}/>
                <Route exact path='/form-page' component={FormPage}/>
                <Route exact path='/drop' component={DropDown}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/places' component={Places}/>
                <Route exact path="/admin" component={Admin} />
                <Route exact path='/china' component={China}/>
                <Route exact path='/coffee' component={Coffee}/>
                <Route exact path='/edit' component={EditModal}/>
                <Route exact path="/details/:id" component={ProductDetail} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/menu' component={ProductsPage}/>
                <Route exact path='/favor' component={FavoritesList}/>
                <Route exact path ='/music' component ={Muse}/>
                <Route exact path = '/engtest' component ={EnglishMainTest}/>
                <Route exact path = '/cntest' component ={ChinaMainTest}/>
                <Route exact path ='/test' component ={MainList}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routes