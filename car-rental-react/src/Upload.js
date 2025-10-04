import axios from "axios";
import { useState } from "react"
function Upload()
{
   //  const [id,setId]=useState();
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [cat,setCat]=useState("SEDAN");
    const [desc,setDesc]=useState();
    const [image,setImage]=useState();
    const[avail,setAvailability]=useState();
    function submitForm(e)
    {
        e.preventDefault()
       // console.log(id,name,price,desc,cat)
       var url="http://localhost:4000/"//
       var formdata=new FormData();
      //  formdata.append("id",id);
       formdata.append("title",name);
       formdata.append("r_price",price);
       formdata.append("category",cat);
       formdata.append("description",desc);
       formdata.append("image",image);
       formdata.append("availability",avail);
       axios.post(url,formdata).then((result)=>{
           //console.log(result.data)
           alert("Data Upload Sucessfully")

       })
    }
   return(
    <div>
     <center>
        <h1>Upload Products</h1>
          <form>
         {/* <input type="number" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)}></input><br></br> */}
         <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
         <input type="number" placeholder="Enter rent_Price" onChange={(e)=>setPrice(e.target.value)}></input><br></br>
         {/* <input type="text" placeholder="Enter Category" onChange={(e)=>setCat(e.target.value)}></input><br></br> */}
         <select onChange={(e)=>setCat(e.target.value)}>
            <option>SEDAN</option>
            <option>SUV</option>
            <option>LUXURY</option>
            <option>SPORTS</option>
            <option>VINTAGE</option>
         </select><br></br>
         <textarea type="text" placeholder="Enter Description" onChange={(e)=>setDesc(e.target.value)}></textarea><br></br>
         <input type="file" onChange={(e)=>setImage(e.target.files[0])}></input><br></br>
         <button onClick={submitForm}>Upload</button>
       </form>
     </center>
    </div>
   )
}
export default Upload
