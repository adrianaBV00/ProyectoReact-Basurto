import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarBS from './components/NavbarBS'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import Loading from './components/Loading'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { CartProvider } from './context/CartContext'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavbarBS/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:type' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
