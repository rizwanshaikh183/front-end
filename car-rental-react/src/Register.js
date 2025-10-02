import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
function Register()
{
     const  navigate= useNavigate();
    const [name,setName]=useState();
    const [pass,setPass]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();
    const [license_no,setLicense_no]=useState();
    function submitForm(e)
    {
        e.preventDefault()
       // console.log(id,name,price,desc,cat)
         // Trim to remove accidental spaces
  if (!name?.trim() || !pass?.trim() || !email?.trim() || !mobile?.trim()) {
    alert("Please fill all fields before submitting!");
    return; // stop the function here
  }
       var url="http://localhost:4000/user/register"//
       var formdata=new FormData();
       formdata.append("name",name);
       formdata.append("pass",pass);
       formdata.append("license_no",license_no);
       formdata.append("email",email);
       formdata.append("mobile",mobile);
       axios.post(url,formdata).then((result)=>{
   
    
           if(result.data=="Register ho gaya")
           {
            alert("Registraion successful")
            navigate('/login');
           }
           else
           {
            alert("Registraion Failed")
           }

       })
    }
   return(
    <div>
     <center>
        <h1>Register User</h1>
<form>
    
<input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} required></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)} required></input><br></br>
<input type="text" placeholder="Enter license_no" onChange={(e)=>setLicense_no(e.target.value)} required></input><br></br>
<input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} required></input><br></br>
<input type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)} required></input><br></br>
         <button onClick={submitForm}>Register</button>
       </form>
     </center>
    </div>
   )
}
export default Register
