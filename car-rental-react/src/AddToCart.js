import React from "react";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";

function AddToCard(id, title, description, r_price, image) {
     const handleAddToCart = () => {
    var url = "http://localhost:4000/prd/card"//

    var formdata = new FormData();

    formdata.append("id", id);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("r_price", r_price);
    formdata.append("image", image);
    axios.post(url, formdata).then((result) => {
      console.log(result.data)
      alert("Add to cart hogya")

    })
  }
  return (
    <MDBBtn style={{ width: "130px", height: "36px" }} onClick={handleAddToCart}>Add to Cart</MDBBtn>
  )
};
  export default AddToCard;