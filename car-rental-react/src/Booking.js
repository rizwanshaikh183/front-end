import axios from "axios";
import { useState } from "react"
import Upload from "./Upload";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Card from "./Card";
function Booking({  }) {
  const user = JSON.parse(localStorage.getItem("user"))
  const [days, setDays] = useState(1);
  const [mobile, setMobile] = useState(1);
  const[email,setEmail]=useState("");
  // Get car data from navigation state as we navigated here from Card component 
const [searchParams] = useSearchParams();
  const location = useLocation();

  const itemFromState = location.state?.item;
  const id = searchParams.get('id');

  const [item, setItem] = useState(itemFromState ?? null);

  console.log(item);
  console.log(user);

  const handleBook = async () => {
      // Safety checks
    if (!item) {
      alert("Car data is not available!");
      return;
    }
    if (!item) {
      alert("User not logged in!");
      return;
    }
    const bookingData = {
    booking_id: Math.floor(Math.random() * 10000), // Random booking ID
    
      car_id: item.id,
      title: item.title,
      email: email,
      mobile:mobile,
      day: days,
      license_no: user.license_no,
      t_price: item.r_price * days,
      r_price: item.r_price,
        availability:false,
      image: item.image,
    };

    const res = await fetch("http://localhost:4000/car/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    const data = await res.text();
    alert(data);

  };

if(handleBook===true )
{
  return <Navigate to="/card" replace={true} />;

}
else
{
  if (!item) {
    // Navigate("/card");
    return <Navigate to="/card" replace={true} />;

  }
}
  return (
    <div>
     <center>
        <h1>booking form</h1>
          <form>
         <input type="number" placeholder="Enter Id" value={item.id}  readOnly></input><br></br>
         <input type="text" placeholder="Enter Name" value={item.title} readOnly></input><br></br>
         <input type="number" placeholder="Enter rent_Price" value={item.r_price} readOnly></input><br></br>
         {/* <input type="text" placeholder="Enter Category" onChange={(e)=>setCat(e.target.value)}></input><br></br> */}
        <img src={item.image} width="100" height="100" readOnly></img><br></br>
            < input type="text" placeholder="Enter Name" value={user.name} readOnly></input><br></br>
           < input type="text" placeholder="Enter license_no" value={user.license_no} readOnly></input><br></br>
            <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} ></input><br></br>
            <input type="number" placeholder="Enter Days" onChange={(e)=>setDays(e.target.value)} ></input><br></br>
            <input type="number" placeholder="Enter Mobile No" onChange={(e)=>setMobile(e.target.value)} ></input><br></br>
            <h1>Total Price : {item.r_price * days} Rs</h1>
         <button onClick={handleBook}>Book Now</button>
         &nbsp;&nbsp;
         <button onClick={() => window.history.back()}>Go Back</button>
       </form>
     </center>
    </div>
  );
}

export default Booking
