// components/Navbar/index.js
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';

import Item from './Item';
import Upload from './Upload';
import Mobile from './Mobile';
import Register from './Register';
import Login from './Login';
import logo from "./logo.svg"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import Card from './Card';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
     const navigate=useNavigate()
    function logout()
    {
        localStorage.clear();
        navigate("/")
    }
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/electronics" activeStyle>
                        Electronics
                    </NavLink>
                    <NavLink to="/mobile" activeStyle>
                        Mobile
                    </NavLink>
                    <NavLink to="/laptop" activeStyle>
                        Laptop
                    </NavLink>
                    <NavLink to="/shoe" activeStyle>
                        Shoe
                    </NavLink>
                      <NavLink to="/cloths" activeStyle>
                        Cloths
                    </NavLink>
                   
                </NavMenu>
                <NavBtn>
                    {
                        !localStorage.getItem("user")?
                         <div>
                            <NavBtnLink to="/login">
                       Login
                    </NavBtnLink>
                    <NavBtnLink to="/register">
                       Register
                    </NavBtnLink>
                         </div>:
                   
                    <NavBtnLink to="/logout" onClick={()=>logout()}>
                       Logout
                    </NavBtnLink>
                        
                    }
                    <NavBtnLink to="/card">
                       Card
                    </NavBtnLink>
                   
                </NavBtn>
                <img src={logo} style={{width:"50px",height:"50px"}}></img>
                <label>{ localStorage.getItem("user")}</label>
            </Nav>
            <Routes>
        <Route path='/' Component={Home}></Route>
         <Route path='/electronics' Component={Electronics}></Route>
          <Route path='/mobile' Component={Mobile}></Route>
            <Route path='/item' Component={Item}></Route>
            <Route path='/upload' Component={Upload}></Route>
            <Route path='/register' Component={Register}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/card' Component={Card}></Route>
            <Route path='/logout' Component={Home}></Route>
      </Routes>
        </>
    );
};

export default Navbar;