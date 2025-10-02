import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Login()
{
    const [name,setName]=useState();
    const [pass,setPass]=useState();
    const navigate=useNavigate()
    function submitForm(e)
    {
        e.preventDefault()
       // console.log(id,name,price,desc,cat)
       var url="http://localhost:4000/user/login"
       var data={name:name,pass:pass}
    //    var formdata=new FormData();
    //    formdata.append("name",name);
    //    formdata.append("pass",pass);
       axios.post(url,data).then((result)=>{
          localStorage.setItem("user",name)
          if(result.data=="User Login Sucessfully")
          {
             navigate("/upload")
          }
          else{
                 alert(result.data)
          }
           //
        //    alert("Registraion Sucessfully")

       })
    }
   return(
    <div>
     <center>
        <h1>Login</h1>
<form>
    
<input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input><br></br>
         <button onClick={submitForm}>Login</button>
       </form>
     </center>
    </div>
   )
}
export default Login
