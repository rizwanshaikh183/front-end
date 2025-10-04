import { useEffect, useState } from "react"
import React from 'react';
 import { useNavigate } from "react-router-dom";
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
function Sedan()
{
    const [apidata,setData]=useState([])
const navigate=useNavigate()
    useEffect(()=>{
       fetch("http://localhost:4000/category/SEDAN").then((result)=>{//
           result.json().then((data)=>{
                setData(data)
           })
       })
    },[])
 function singleData(pid) {
    navigate("/item", { state: pid })
  }
  function addtocard(id, title, description, r_price, image) {
    var url = "http://localhost:4000/prd/card"//

    var formdata = new FormData();

    formdata.append("id", Number(id));
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("r_price", Number(r_price));
    formdata.append("image", image);
    axios.post(url, formdata).then((result) => {
      console.log(result.data)
      alert("Add to card Sucessfully")

    })
  }
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
             <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => singleData(item.id)}>View Details</MDBBtn>&nbsp;&nbsp;
                  <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => addtocard(
                    
                    Number(item.id),          // ensure id is a number
                    item.title,
                    item.description,
                    Number(item.r_price),     // ensure r_price is a number
                    item.image
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
export default Sedan


// import { useEffect, useState } from "react"
// import React from 'react';
// import axios from "axios";
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import Footer from "./Footer";
// import { useNavigate } from "react-router-dom";


// function Sedan() {
//   const [apidata, setData] = useState([])
//   const navigate = useNavigate()
//   useEffect(() => {
//     fetch("http://localhost:4000/SEDAN").then((result) => {//

//       result.json().then((data) => {
//         setData(data)
//       })
//     })
//   }, [])
//   function singleData(pid) {
//     navigate("/item", { state: pid })
//   }
//   function addtocard(id, title, description, r_price, image) {
//     var url = "http://localhost:4000/prd/card"//

//     var formdata = new FormData();

//     formdata.append("id", Number(id));
//     formdata.append("title", title);
//     formdata.append("description", description);
//     formdata.append("r_price", Number(r_price));
//     formdata.append("image", image);
//     axios.post(url, formdata).then((result) => {
//       console.log(result.data)
//       alert("Add to card Sucessfully")

//     })
//   }
//   return (
//     <div>
//       <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{ padding: "10px" }}>
//         {
//           apidata.map((item, i) =>
//             <MDBCol key={i}>
//               <MDBCard className='h-100' style={{ padding: "10px" }}>
//                 <center>
//                   <MDBCardImage
//                     src={item.image}
//                     alt='...'
//                     position='top'
//                     style={{ width: "100px", height: "100px" }}
//                   />
//                 </center>
//                 <MDBCardBody>
//                   <MDBCardTitle style={{ color: "red" }}>{item.title}</MDBCardTitle>
//                   <MDBCardTitle style={{ color: "green" }}>{item.r_price} Rs</MDBCardTitle>
//                   <MDBCardTitle style={{ color: "blue" }}>{item.category}</MDBCardTitle>
//                   <MDBCardText>
//                     {item.description.substring(0, 100)}
//                   </MDBCardText>
//                 {/* <Singleprd
//                   pid={item.id}
//                  ></Singleprd> */}
//                   <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => singleData(item.id)}>View Details</MDBBtn>&nbsp;&nbsp;
//                   <MDBBtn style={{ width: "130px", height: "36px" }} onClick={() => addtocard(
                    
//                     Number(item.id),          // ensure id is a number
//                     item.title,
//                     item.description,
//                     Number(item.r_price),     // ensure r_price is a number
//                     item.image
//                     )
//                     }>

//                       AddtoCart
                    
//                     </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           )
//         }
//       </MDBRow>
//       <Footer></Footer>
//     </div>
//   )
// }
// export default Sedan