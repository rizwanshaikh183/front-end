import { useEffect, useState } from "react"
import React from 'react';
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import Singleprd from "./Singleprd";

function Allbookings() {
  const [apidata, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:4000/car/booking").then((result) => {//

      result.json().then((data) => {
        setData(data)
      })
    })
  }, [])

  // FOR CANCELL BOOKING
    function cancelbooking(b_id) {
        const url = "http://localhost:4000/car/booking/" + b_id;//
        axios.delete(url).then((result) => {
          //again call the api and get the data to auto refresh after delete and remove item from
          fetch("http://localhost:4000/car/booking").then((result) => {//
            result.json().then((data) => {
                setData(data)
            })
          })
        })
      }
 
  return (
    <div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ padding: "10px" }}>
        {
          apidata.map((item, i) =>
            <MDBCol key={i}>
              <MDBCard className='h-100' style={{ padding: "10px" }}>
                <center>
                  <MDBCardImage
                    src={item.image}
                    alt='...'
                    position='top'
                    style={{ width: "100px", height: "100px" }}
                  />
                </center>
                <MDBCardBody>
                  <MDBCardTitle style={{ color: "red" }}>{item.title}</MDBCardTitle>
                  <MDBCardTitle style={{ color: "green" }}>Rent price :   {item.r_price} Rs</MDBCardTitle>
                  {/* <MDBCardTitle style={{ color: "" }}>{item.category}</MDBCardTitle> */}
                    <MDBCardTitle style={{ color: "orange" }}> Status :  {item.status}</MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>Email :  {item.email}</MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>Booker name :  {item.name}</MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>Mobile No. :  {item.mobile}</MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>License no.  :  {item.license_no}</MDBCardTitle>
                    {/* <MDBCardTitle style={{ color: "black" }}>Rent price :{item.r_price}</MDBCardTitle> */}
                    <MDBCardTitle  style={{ color: "black" }}> Total Price : {item.t_price}  </MDBCardTitle>
                      <MDBBtn style={{background:"red",font:"-moz-initial", fontWeight:"bolder" ,border:"1px solid red",}} onClick={ ()=>cancelbooking(item.b_id) }>Cancel Booking now</MDBBtn>&nbsp;&nbsp;
                    


                
                    
                  <MDBCardText>
                  </MDBCardText>
              
                 
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
export default Allbookings