import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../Styles/Adminview.css'
import { useNavigate } from "react-router-dom";

const Adminview = () => {
    const [data, setData] = useState([]);
    let [force, setForce] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [force]);

    let remove = (id, name) => {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then((res) => {
                alert(name + " removed successfully");
                // Update data state after successful deletion
                setData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch((rej) => {
                alert('Product not found');
            })
    }
    
    const navigate = useNavigate();
    function EditProduct(id) {
        navigate(`/adminnavbar/admineditproduct/${id}`);
    }
    

    return ( 
        <div className="view">
            {data.map((x) => (
                <div className="element" key={x.id}>
                    <div className="one">
                        <img src={x.imageUrl} alt="Product" />
                    </div>
                    <div className="toto">
                        <div className="two">
                            <span>{x.category}</span>
                        </div>
                        <div className="three">
                            <span>{x.productName}</span>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="four">
                            <span>{x.price}</span>
                        </div>
                        <div className="five">
                            <span>{x.rating}</span>
                        </div>
                    </div>
                    <div className="six">
                        <span>{x.specifications}</span>
                    </div>
                    <div className="action">
                        <button onClick={() => EditProduct(x.id)}>edit</button>
                        <button onClick={() => remove(x.id, x.productName)}>delete</button>
                    </div>
                </div>
            ))}  
        </div>
    );
}
 
export default Adminview;
