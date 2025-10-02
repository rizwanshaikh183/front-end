import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
function Item()
{
  var location=useLocation()
  
    const [apidata,setData]=useState([])
    useEffect(()=>{
     // console.log(location.state)
         fetch("http://localhost:4000/"+location.state).then((result)=>{
             result.json().then((data)=>{
                console.log(data)
                  setData(data)
             })
         })
      },[])
   return(
    <div>
        <center>
            <br></br>
              {
                apidata.map((item)=>
                 <MDBCard style={{margin:"100px"}} >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={item.image} fluid alt='...'  style={{width:"200px",height:"200px",marginTop:"10px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle style={{fontSize:"40px",color:"red"}}>{item.title}</MDBCardTitle>
        <MDBCardTitle style={{fontSize:"25px",color:"blue"}}>{item.price*85} Rs</MDBCardTitle>
        <MDBCardTitle style={{fontSize:"25",color:"green"}}>{item.category}</MDBCardTitle>
          <MDBCardText>
          {item.description}
        </MDBCardText>
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                )
              }
        </center>
    </div>
   )
}
export default Item