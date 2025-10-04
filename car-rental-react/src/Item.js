// import { useLocation } from "react-router-dom"
// import { useEffect, useState } from "react"
// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';
// import Booking from "./Booking";
// import { useNavigate } from "react-router-dom";

// function Item()
// {
//   const navigate=useNavigate()
//   var location=useLocation()
  
//     const [apidata,setData]=useState([])
//     useEffect(()=>{
//      // console.log(location.state)
//          fetch("http://localhost:4000/"+location.state).then((result)=>{//
//              result.json().then((data)=>{
//                 console.log(data)
//                   setData(data)
//              })
//          })
//       },[])
//   // const goBooking = (item) => {
//   //   // Navigate to Booking page and pass car object in state
//   //   <Booking car={item} />
//   //   navigate("/card/Booking", { state: item });
//   // };
//    return(
//     <div>
//         <center>
//             <br></br>
//               {
//                 apidata.map((item)=>
//                  <MDBCard style={{margin:"100px"}} >
//       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//         <MDBCardImage src={item.image} fluid alt='...'  style={{width:"200px",height:"200px",marginTop:"10px"}}/>
//         <a>
//           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//         </a>
//       </MDBRipple>
//       <MDBCardBody>
//         <MDBCardTitle style={{fontSize:"40px",color:"red"}}>{item.title}</MDBCardTitle>
//         <MDBCardTitle style={{fontSize:"25px",color:"blue"}}>{item.r_price} Rs</MDBCardTitle>
//         <MDBCardTitle style={{fontSize:"25",color:"green"}}>{item.category}</MDBCardTitle>
//           <MDBCardTitle style={{fontSize:"25",color:"green"}}>{item.availability}</MDBCardTitle>
//           <MDBCardText>
//           {item.description}
//         </MDBCardText>
//         {/* <MDBBtn onClick={()=>goBooking}>Book Now</MDBBtn> */}
//         {/* <Booking></Booking> */}

//       </MDBCardBody>
//     </MDBCard>
//                 )
//               }
//         </center>
//     </div>
//    )
// }
// export default Item

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
import { useLocation } from "react-router-dom";
function Item() {
   const navigate=useNavigate()
  var location=useLocation()
  
    const [apidata,setData]=useState([])
    useEffect(()=>{
     // console.log(location.state)
         fetch("http://localhost:4000/"+location.state).then((result)=>{//
             result.json().then((data)=>{
                console.log(data)
                  setData(data)
             })
         })
      },[])
  function singleData(pid) {
    navigate("/item", { state: pid })
  }
  function addtocard(id, title, description, r_price, image,category) {
    var url = "http://localhost:4000/prd/card"//

    var formdata = new FormData();

    formdata.append("id", Number(id));
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("r_price", Number(r_price));
    formdata.append("image", image);
     formdata.append("category", category);
    axios.post(url, formdata).then((result) => {
      console.log(result.data)
      alert("Add to card Sucessfully")

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
                  <MDBCardTitle style={{ color: "green" }}>{item.r_price} Rs</MDBCardTitle>
                  <MDBCardTitle style={{ color: "blue" }}>{item.category}</MDBCardTitle>
                     <MDBCardTitle style={{ color: "blue" }}>{item.availability}</MDBCardTitle>
                  <MDBCardText>
                    {item.description.substring(0, 100)}
                  </MDBCardText>
                {/* <Singleprd
                  pid={item.id}
                 ></Singleprd> */}
                  {/* <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => singleData(item.id)}>View Details</MDBBtn>&nbsp;&nbsp; */}
                  <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => addtocard(
                    
                    Number(item.id),          // ensure id is a number
                    item.title,
                    item.description,
                   
                    Number(item.r_price),     // ensure r_price is a number
                    item.image,
                     item.category,
                    )
                    }>

                      AddtoCart
                    
                    </MDBBtn>
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
export default Item