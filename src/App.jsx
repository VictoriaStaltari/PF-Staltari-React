import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer'
import Header from './Components/Header.jsx'
import Section from './Components/Section.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Header />
      <Section />
      <ItemListContainer greeting="Productos" />
    </BrowserRouter>
  )
}

export default App
