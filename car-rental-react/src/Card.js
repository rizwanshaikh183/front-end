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
import Booking from "./Booking";

function Card() {
  const navigate = useNavigate()
  const [apidata, setData] = useState([])
  const [count, setcount] = useState([])
 
  const [cartItems, setCartItems] = useState([]);
  const [card, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/prd/card").then((result) => {//

      result.json().then((data) => {

        setData(data)
        setcount(data.length)
    //    const c_d_b=fetch("http://localhost:4000/car/booking").then((result) => {//

    //     result.json().then((data1) => {

    //       setCars(data1)
    //       console.log(data1)
          
    //       if(data1.car_id===data.id){
    //         const url = "http://localhost:4000/prd/card/" + data.id;//
             
    // axios.delete(url).then((result) => {

    //   //again call the api and get the data to auto refresh after delete and remove item from
    //   fetch("http://localhost:4000/prd/card").then((result) => {//

    //     result.json().then((data) => {

    //       setData(data)
    //       setcount(data.length)

    //     })
    //   })
    // })
    //         console.log("car not available");
           
            
    //       }
        
        
    //     })

    //   })

  
      })
    })
  }, [])




  const goBooking = (item) => {
    // Navigate to Booking page and pass car object in state
    navigate("./Booking", { state: { item } });
  };

  function deleteCard(id) {
    const url = "http://localhost:4000/prd/card/" + id;//
    axios.delete(url).then((result) => {
      //again call the api and get the data to auto refresh after delete and remove item from
      fetch("http://localhost:4000/prd/card").then((result) => {//

        result.json().then((data) => {

          setData(data)
          setcount(data.length)

        })
      })

      //  navigate("/card")
      // alert(result.data)

    })
  }

  return (
    <div>
      <br></br>
      <center>
        {
          apidata.map((item) =>
         
            <MDBCard style={{ maxWidth: '540px', margin: "10px" }}>
              <MDBRow className='g-0' style={{ padding: "10px" }}>
                <MDBCol md='4'>
                  <MDBCardImage src={item.image} alt='...' fluid style={{ width: "200px", height: "200px" }} />
                </MDBCol>
                <MDBCol md='8'>
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardTitle>{item.r_price} Rs</MDBCardTitle>
                                        <MDBCardTitle>{item.category} </MDBCardTitle>
                    <MDBBtn style={{backgroundColor:" #d46422ff;"}} onClick={ ()=>goBooking(item) }>Book now</MDBBtn>&nbsp;&nbsp;
                  
                    <MDBBtn  onClick={() => deleteCard(item.id)}>Remove Card</MDBBtn>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>

          )
        }
      </center>
      <center>
        <h1>Total Item : {count}</h1>
       
      </center>
    </div>
  )
}

export default Card