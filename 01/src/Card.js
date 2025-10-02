import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card()
{
    const navigate=useNavigate()
    const [apidata,setData]=useState([])
    const [count,setcount]=useState([])
    const [totalp,setTotal]=useState([])
    useEffect(()=>{
       fetch("http://localhost:4000/prd/card").then((result)=>{
           
           result.json().then((data)=>{
            
                setData(data)
                setcount(data.length)
               
           })
       })
    },[])
   function deleteCard(id)
   {
         const url="http://localhost:4000/prd/card/"+id;
           axios.delete(url).then((result)=>{
             navigate("/card")
            alert(result.data)
           
         })
   }
  return(
    <div>
        <br></br>
      <center>
         {
            apidata.map((item)=>
                 
                <MDBCard style={{ maxWidth: '540px', margin:"10px"}}>
      <MDBRow className='g-0'  style={{padding:"10px"}}>
        <MDBCol md='4'>
          <MDBCardImage src={item.image} alt='...' fluid style={{width:"200px",height:"200px"}} />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.price} Rs</MDBCardTitle>
            <MDBBtn>Buy now</MDBBtn>&nbsp;&nbsp;
            <MDBBtn onClick={()=>deleteCard(item.id)}>Remove Card</MDBBtn>
           
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
           
            )
         }
      </center>
           <center>
            <h1>Total Item : {count}</h1>
            <h1>Total Price : {apidata.reduce((acc,row)=> acc+row.price,0)} Rs</h1> 
            </center> 
    </div>
  )
}
export default Card