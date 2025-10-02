// components/Navbar/index.js
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Suv';

import Item from './Item';
import Upload from './Upload';

import Register from './Register';
import Login from './Login';
import logo from "./logo.svg"

import Sedan from './Sedan';
import Suv from './Suv';
import Sports from './Sports';
import Luxury from './Luxury';
import Vintage from './Vintage';

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
    const navigate = useNavigate()
    function logout() {
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
                    <NavLink to="/suv" activeStyle>
                        SUV
                    </NavLink>
                    <NavLink to="/sedan" activeStyle>
                        SEDAN
                    </NavLink>
                    <NavLink to="/sports" activeStyle>
                        SPORTS
                    </NavLink>
                    <NavLink to="/luxury" activeStyle>
                        LUXURY
                    </NavLink>
                    <NavLink to="/vintage" activeStyle>
                        VINTAGE
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    {
                        !localStorage.getItem("user") ?
                            <div>
                                <NavBtnLink to="login">
                                    Login
                                </NavBtnLink>
                                <NavBtnLink to="/register">
                                    Register
                                </NavBtnLink>
                            </div> :

                            <NavBtnLink to="/logout" onClick={() => logout()}>
                                Logout
                            </NavBtnLink>

                    }
                    <NavBtnLink to="/card">
                        Cart
                    </NavBtnLink>
                    {
                        localStorage.getItem("user") === "admin" ? (
                            <NavBtnLink to="/upload">Upload</NavBtnLink>
                        ) : null
                    }



                </NavBtn>
                <img src={logo} style={{ width: "50px", height: "50px" }}></img>
                <label>{localStorage.getItem("user")}</label>
            </Nav>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/suv' Component={Suv}></Route>
                <Route path='/sedan' Component={Sedan}></Route>
                <Route path='/sports' Component={Sports}></Route>
                 <Route path='/luxury' Component={Luxury}></Route>
                  <Route path='/vintage' Component={Vintage}></Route>

                <Route path='/item' Component={Item}></Route>
                <Route path='/upload' Component={Upload}></Route>
                <Route path='/register' Component={Register}></Route>
                <Route path='login' Component={Login}></Route>
                <Route path='/card' Component={Card}></Route>
                <Route path='/logout' Component={Home}></Route>
                <Route path='/upload' Component={Upload}></Route>
                
            </Routes>
        </>
    );
};

export default Navbar;