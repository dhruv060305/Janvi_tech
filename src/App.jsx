import './App.css'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Services from './Components/Services'
import Partners from './Components/Partners'
import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={
          <>
          <Main></Main>
          <Services></Services>
          <Partners></Partners>
          </>}>
          </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  )
}

export default App
