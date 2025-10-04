// components/Navbar/index.js
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Suv';

import Item from './Item';
import Upload from './Upload';

import Register from './Register';
import Login from './Login';
import logo from "./logo.png"

import Sedan from './Sedan';
import Suv from './Suv';
import Sports from './Sports';
import Luxury from './Luxury';
import Vintage from './Vintage';
import Allbooking from './Allbookings';

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
import Booking from './Booking';
import { NavDropdown, NavItem } from 'react-bootstrap';
import Mybooking from './Mybooking';
import { FlexboxGrid } from 'rsuite';
import p from './p.png'
import carlogo from './carlogo1.png'
import Admindeleteprd from './Admindeleteprd';
const user = JSON.parse(localStorage.getItem("user")); // get and parse once
const Navbar = () => {
    const navigate = useNavigate()
    function logout() {
        // localStorage.clear();
        localStorage.removeItem("user");
        navigate("/")
        console.log("logout");
        window.location.reload();
    }
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu

                >
                    <NavItem>
                        {/* <img src={carlogo} style={{ width: "80px", height: "80px", marginRight: "20px" }}></img> */}
                        <label style={{
                            color: "white", fontSize: "25px",
                            fontWeight: "bolder", marginLeft: "30px", marginRight: "20px", fontFamily: "cursive"
                        }} >
                            Car hai "क्या"
                        </label>
                    </NavItem>


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

                            <div>
                                <NavBtnLink to="/logout" onClick={() => logout()}>
                                    Logout
                                </NavBtnLink>


                            </div>


                    }

                    {
                        user?.name === "admin" || !user ? null :
                            <div>
                                <NavBtnLink to="/card" >
                                    Cart
                                </NavBtnLink>
                                <NavBtnLink to="/Mybooking" >
                                    Mybooking
                                </NavBtnLink>
                            </div>

                    }
                    {user?.name === "admin" && (
                        <NavDropdown title="Admin controls" id="basic-nav-dropdown" style={{
                            color: "white", marginRight:
                                "20px", margin: "10px ", fontSize: "20px", fontWeight: "bold", cursor: "pointer", padding: "10px"
                        }}>


                           
                            <NavBtnLink to="/delete">remove car</NavBtnLink><br></br><br></br>
                            <NavBtnLink to="/allbooking">All bookings</NavBtnLink><br></br><br></br>
                            
                             <NavBtnLink to="/upload">Upload</NavBtnLink>
                        </NavDropdown>
                    )}




                </NavBtn>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "-5px", alignContent: "right", alignSelf: "right" }}>
                    <img src={p} style={{ width: "50px", height: "50px" }}></img>

                    <label style={{ color: "white", fontSize: "20px", fontWeight: "bold", }} >
                        {user ? user.name : "user not found"

                        }
                    </label>
                </div>

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
                <Route path='/card/Booking' Component={Booking}></Route>
                <Route path='/Mybooking' Component={Mybooking}></Route>
                <Route path='/delete' Component={Admindeleteprd}></Route>
                 <Route path='/allbooking' Component={Allbooking}></Route>

            </Routes>
        </>
    );
};

export default Navbar;