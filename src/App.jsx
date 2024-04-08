import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Destination from './components/Destination'
import Search from './components/Search'
import Selects from './components/Selects'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Destination/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default App
