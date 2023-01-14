import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
const Home = () => {
    const [lead, setLead] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/");
                setLead(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
        
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:4000/delete/"+ id);
            window.location.reload()
        }catch(err){
            console.log(err);
        }      
        alert("successfully deleted")
    }

    return (
        <div>
            <h1 className="heading">All contact number</h1>
            <div className='contact'>

                {lead.map(items => (
                    <div className='contacts' key={items.id}>
                        <h2>{items.name}</h2>
                        <span>{items.mobile_number}</span>
                        <p>{items.country}</p>
                        <button className='button' onClick={()=>handleDelete(items.id)}>Delete</button>
                        <button className='button' >Update</button>
                    </div>
                ))}<br />
            </div>
            <Link to="/AddContact">Add More Contact</Link>
        </div>
    )
}
export default Home;