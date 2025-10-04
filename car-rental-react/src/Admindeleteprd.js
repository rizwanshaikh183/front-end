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


function Admindeleteprd() {
  const [apidata, setData] = useState([])
    const [count, setcount] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:4000/").then((result) => {//

      result.json().then((data) => {
        setData(data)
      })
    })
  }, [])

 function deleteCard(car_id) {
    const url = "http://localhost:4000/" + car_id;//
    axios.delete(url).then((result) => {
      //again call the api and get the data to auto refresh after delete and remove item from
      fetch("http://localhost:4000/").then((result) => {//

        result.json().then((data) => {

          setData(data)
          setcount(data.length)

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
                    style={{ width: "400px", height: "200px",backgroundImage:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"
                      , borderRadius: "5px",aspectRatio:"4/3",imagwRendering:"pixelated",backgroundClip:"content-box",backgroundSize:"cover"
                     }}
                  />
                </center>
                <MDBCardBody>
                  <MDBCardTitle style={{ color: "red" }}>{item.title}</MDBCardTitle>
                  <MDBCardTitle style={{ color: "green" }}>{item.r_price} Rs</MDBCardTitle>
                  <MDBCardTitle style={{ color: "blue" }}>{item.category}</MDBCardTitle>
                  <MDBCardTitle style={{ color: "blue" }}>{item.availability}</MDBCardTitle>
                  <MDBCardText>
                    {item.description.substring(0, 100)}
                  </MDBCardText>
                  {/* <Singleprd
                  pid={item.id}
                 ></Singleprd> */}
                  
                  <MDBBtn  onClick={() => deleteCard(item.id)}>Remove </MDBBtn>

                   
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
export default Admindeleteprd;