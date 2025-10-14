import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import About from './components/About.jsx'
import Hobbies from './components/Hobbies.jsx'
import Home from './components/Home.jsx'
import NoMatch from './components/NoMatch.jsx'

function App() {
  return (
    <>
      <Navbar bg = "light" fixed = "top" className = "container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand as = {Link} to = "/" className = "fw-bold ms-3">
          ReactRouterHobbies
        </Navbar.Brand>
        <Nav variant="underline" className = "me-auto ms-4">
          <Nav.Item>
            <Nav.Link as = {Link} to = "/" className = "text-dark">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as = {Link} to = "/hobbies" className = "text-dark">Hobbies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as = {Link} to = "/about" className = "text-dark">About</Nav.Link>
          </Nav.Item>
        </Nav>  
      </Navbar>

      <Routes>
        <Route path = "/" element = {<Home/>}>
        </Route>
        <Route path = "/about" element = {<About/>}>
        </Route>
        <Route path = "/hobbies" element = {<Hobbies/>}>
        </Route>
        <Route path = "*" element = {<NoMatch/>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
