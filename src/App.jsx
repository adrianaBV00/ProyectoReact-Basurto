import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarBS from './components/NavbarBS'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <>
      <NavbarBS/>
      <ItemListContainer titulo="Bienvenido a la tienda de Los Simpsons" subtitulo="Aqui encontraras todos los personajes, capitulos y lugares de la serie"/>
      
    </>
  )
}

export default App
