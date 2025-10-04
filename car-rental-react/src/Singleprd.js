import { Button  } from "bootstrap";
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom";
import props from "prop-types";



function Singleprd() {
        const { pid } = props;
    const navigate = useNavigate();
     const [apidata, setData] = useState([])
     useEffect(() => {
        fetch("http://localhost:4000/").then((result) => {//    
            result.json().then((data) => {  
                setData(data)
            })
        })
    }, [])
    function singleData(pid) {
        navigate("/item", { state: pid })

    }
    return (

        <div>

            <Button style={{ width: "130px", height: "36px" }} onClick={() => singleData(pid)}>View Details</Button>&nbsp;&nbsp;
                
</div>
    )
}
export default Singleprd;

