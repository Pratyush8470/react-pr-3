import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import About from './components/About/About'
import Why from './components/Why/Why'
import Service from './components/Service/Service'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

function App () {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header />
      <Home />
      <About />
      <Service />
      <Why />
      <Team />
      <Footer />
    </>
  )
}

export default App
