import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
// function Login()
// {
//     const [name,setName]=useState();
//     const [pass,setPass]=useState();
//     const navigate=useNavigate()
//     function submitForm(e)
//     {
//         e.preventDefault()
//        // console.log(id,name,price,desc,cat)
//        var url="http://localhost:4000/user/login"//http://localhost:4000/user/login
//       //  var data={name:name,pass:pass}
//        var formdata=new FormData();
//        formdata.append("name",name);
//        formdata.append("pass",pass);
//        axios.post(url,formdata).then((result)=>{
//           localStorage.setItem("user",name)
//           if(result.data=="User Login Sucessfully")
//           {
//              navigate("/upload")
//           }
//           else{
//                  alert(result.data)
//           }
//            //
//         //    alert("Registraion Sucessfully")

//        })
//     }
function Login()
 {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [license_no,setLicense_no]=useState("");
    const [email,setEmail]=useState("");
  const navigate = useNavigate();
function submitForm(e) {
  e.preventDefault();

  axios.post("http://localhost:4000/user/login", { name, pass ,license_no})
    .then(result => {
      // This runs only if status is 200
      localStorage.setItem("user",JSON.stringify({name,license_no,pass}));
      alert(result.data.message);
         //  Allow only "admin" to go to /upload
        if (name === "admin") {
          navigate("/upload");
           window.location.reload();
        } else {
          navigate("/"); // or maybe navigate to home/dashboard
          window.location.reload();
        }
    })
    .catch(err => {
      if (err.response) {
        // The request was made and server responded with a status code >= 400
        alert(err.response.data.error || "Login failed");
      } else if (err.request) {
        // The request was made but no response received
        alert("No response from server");
      } else {
        // Something else went wrong
        alert("Error: " + err.message);
      }
    });
}

   return(
    <div>
     <center>
        <h1>Login</h1>
<form>
    
<input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter license_no" onChange={(e)=>setLicense_no(e.target.value)}></input><br></br>
         <button onClick={submitForm}>Login</button>
       </form>
     </center>
    </div>
   )
}
export default Login
