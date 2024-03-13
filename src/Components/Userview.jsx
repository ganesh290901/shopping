import { useState, useEffect } from "react";
import axios from "axios";
import '../Styles/Userview.css'
import { useNavigate } from "react-router-dom";
import '../Styles/Userview.css'

const Userview = () => {
    const [data, setData] = useState([]);
    let [force, setForce] = useState(true);
    const navigate = useNavigate(); 
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [force]);

    const handleStore = async (product) => {
        try {
            const response = await axios.post('http://localhost:3000/cart', product);
            navigate('/userview/cart');
        } catch (error) {
            console.error(error); 
            alert('An error occurred. Please try again later.');
        }
    };

    return ( 
        <div className="user">
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
                        <div className="cart">
                            <button onClick={() => handleStore(x)}>Add to cart</button>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    );
}
 
export default Userview;
