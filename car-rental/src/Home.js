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

function Home()
{
    const [apidata,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
       fetch("http://localhost:4000/").then((result)=>{
        
           result.json().then((data)=>{
                setData(data)
           })
       })
    },[])
     function singleData(pid)
    {
        navigate("/item",{state:pid})
    }
    function addtocard(id,title,price,image)
    {
            var url="http://localhost:4000/prd/card"
       var formdata=new FormData();
       formdata.append("id",id);
       formdata.append("title",title);
       formdata.append("price",price);
       formdata.append("image",image);
       axios.post(url,formdata).then((result)=>{
           //console.log(result.data)
           alert("Add to card Sucessfully")

       })
    }
  return(
    <div>
       <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"10px"} }>
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
             <MDBCardTitle style={{color:"green"}}>{item.price} Rs</MDBCardTitle>
              <MDBCardTitle style={{color:"blue"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
              {item.description.substring(0,100)}
            </MDBCardText>
            <MDBBtn style={{width:"130px",height:"36px"}} onClick={()=>singleData(item.id)}>View Details</MDBBtn>&nbsp;&nbsp;
            <MDBBtn style={{width:"130px",height:"36px"}} onClick={()=>addtocard(item.id,item.title,item.price,item.image)}>AddtoCart</MDBBtn>
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
export default Home