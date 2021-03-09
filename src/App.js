import Routes from './Routes'
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext'
import AuthContextProvider from './contexts/AuthContext';
import CommentsContextProvider from './contexts/CommentsContext';
import FavoritesContextProvider from '../src/contexts/FavoritesContext'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <AuthContextProvider>
        <CommentsContextProvider>
          <ProductsContextProvider>
            <FavoritesContextProvider>
              <CartContextProvider>
                <Routes />
              </CartContextProvider>
            </FavoritesContextProvider>
          </ProductsContextProvider>
        </CommentsContextProvider>
      </AuthContextProvider>
    </ParallaxProvider>
  );
}

export default App;
