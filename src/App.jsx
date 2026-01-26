import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarBS from './components/NavbarBS'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavbarBS/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:type' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
