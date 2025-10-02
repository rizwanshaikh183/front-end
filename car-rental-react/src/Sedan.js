import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Footer from "./Footer";
function Sedan()
{
    const [apidata,setData]=useState([])
    useEffect(()=>{
       fetch("http://localhost:4000/category/SEDAN").then((result)=>{//
           result.json().then((data)=>{
                setData(data)
           })
       })
    },[])
  return(
    <div>
       <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"10px"}}>
       {
        apidata.map((item,i)=>
       <MDBCol key={i}>
        <MDBCard className='h-100' style={{padding:"10px"}}>
         <center>
             <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
            style={{width:"100px",height:"100px"}}
          />
         </center>
          <MDBCardBody>
            <MDBCardTitle style={{color:"red"}}>{item.title}</MDBCardTitle>
             <MDBCardTitle style={{color:"green"}}>{item.r_price*85} Rs</MDBCardTitle>
              <MDBCardTitle style={{color:"blue"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
              {item.description.substring(0,100)}
            </MDBCardText>
            <MDBBtn style={{width:"130px",height:"36px"}}>View Details</MDBBtn>&nbsp;&nbsp;
            <MDBBtn style={{width:"130px",height:"36px"}}>AddtoCart</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )
       }
    </MDBRow>
    <Footer></Footer>
    </div>
  )
}
export default Sedan