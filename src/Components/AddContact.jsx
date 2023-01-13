import axios from "axios";
import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {

    const [input, setInput] = useState({
        name: "",
        mobile_number: "",
        country: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
       setInput((oldData)=>(
         { ...oldData, [e.target.name]: e.target.value}))
       }
       
        const handleClick = async (e) => {
            e.preventDefault()
            try {
                await axios.post("http://localhost:4000/insert", input)
                navigate("/");
            } catch (err) {
             console.log(err);   
            }
        }    
    
    return(
        <div className="main_div">
      <div className="center_div">
        <h1> Add Contact</h1>
        <input type="text" placeholder="Name" onChange={handleChange} name="name"/>
        <input type="number" placeholder="Mobile_No." onChange={handleChange} name="mobile_number" />
        <input type="text" placeholder="Country" onChange={handleChange} name="country" />
      <button className="button" onClick={handleClick}>Add Contact</button>
      <button className="button"><Link to="/">Back</Link></button>
      </div>
    </div>
    )
}
export default AddContact;