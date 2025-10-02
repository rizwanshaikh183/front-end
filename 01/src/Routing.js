import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';

import Item from './Item';
import Upload from './Upload';
import Mobile from './Mobile';
import Register from './Register';
import Login from './Login';
import Card from './Card';
function Routing() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">Navbar</Link>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/electronics">Electronics</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/mobile">Mobile</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/laptop">Laptop</Link>&nbsp;&nbsp;&nbsp;
             <Link to="/shoe">Shoe</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/cloths">Cloths</Link>&nbsp;&nbsp;&nbsp;
               <Link to="/register">Register</Link>&nbsp;&nbsp;&nbsp;
               <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/card">Card</Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
         <Route path='/electronics' Component={Electronics}></Route>
          <Route path='/mobile' Component={Mobile}></Route>
            <Route path='/item' Component={Item}></Route>
            <Route path='/upload' Component={Upload}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/card' Component={Card}></Route>
      </Routes>
    </>
  );
}
export default Routing;