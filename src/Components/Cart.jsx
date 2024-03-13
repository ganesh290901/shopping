import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [data, setData] = useState([]);
    let [force, setForce] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:3000/cart')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [force]);

    let remove = (id, name) => {
        axios.delete(`http://localhost:3000/cart/${id}`)
            .then((res) => {
                alert(name + " removed successfully");
                setForce(!force); 
            })
            .catch((error) => {
                alert('An error occurred while removing the product.');
                console.error(error);
            });
    }
    
    return ( 
        <div className="cart">
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
                        <button onClick={() => remove(x.id, x.productName)}>Remove</button>
                    </div>
                ))}  
            </div>
        </div>
     );
}
 
export default Cart;
