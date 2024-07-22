import './App.css'
import NavBar from './Components/NavBar.jsx'
import Header from './Components/Header.jsx'
import Section from './Components/Section.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Header />
        <Section />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
