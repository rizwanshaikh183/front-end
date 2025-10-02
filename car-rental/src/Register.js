import axios from "axios";
import { useState } from "react"
function Register()
{
    const [name,setName]=useState();
    const [pass,setPass]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();
    function submitForm(e)
    {
        e.preventDefault()
       // console.log(id,name,price,desc,cat)
       var url="http://localhost:4000/user/register"
       var formdata=new FormData();
       formdata.append("name",name);
       formdata.append("pass",pass);
       formdata.append("email",email);
       formdata.append("mobile",mobile);
       axios.post(url,formdata).then((result)=>{
           //console.log(result.data)
           alert("Registraion Sucessfully")

       })
    }
   return(
    <div>
     <center>
        <h1>Register User</h1>
<form>
    
<input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}></input><br></br>
         <button onClick={submitForm}>Register</button>
       </form>
     </center>
    </div>
   )
}
export default Register
