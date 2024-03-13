import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Adminedit = () => {
    const { id } = useParams(); 
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0); 
    const [rating, setRating] = useState(0); 
    const [specifications, setSpecifications] = useState("");

    const edititem = (e) => {
        e.preventDefault();
        const formData = {
            imageUrl,
            category,
            productName,
            price,
            rating,
            specifications
        };

        axios.put(`http://localhost:3000/products/${id}`, formData)
            .then((res) => {
                alert('Updated successfully');
            })
            .catch((err) => {
                alert('Error in updating');
            });
    };

    const getData = () => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                const product = res.data;
                setImageUrl(product.imageUrl);
                setCategory(product.category);
                setProductName(product.productName);
                setPrice(product.price);
                setRating(product.rating);
                setSpecifications(product.specifications);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return ( 
        <div className="all">
            <div className="product">
                <table>
                    <tbody> 
                        <tr>
                            <th>
                                <form onSubmit={edititem}>
                                    <div className="image">
                                        <label>
                                            Image URL:
                                            <input
                                                type="text"
                                                value={imageUrl}
                                                onChange={(e) => setImageUrl(e.target.value)}
                                                placeholder="Enter the image URL"
                                            />
                                        </label>
                                    </div>
                                    <div className="category">
                                        <label>
                                            Category:
                                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                                <option>Mobile</option>
                                                <option>Laptop</option>
                                                <option>Television</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="name">
                                        <label>
                                            Product Name:
                                            <input
                                                type="text"
                                                value={productName}
                                                onChange={(e) => setProductName(e.target.value)}
                                                placeholder="Enter the product name"
                                            />
                                        </label>
                                    </div>
                                    <div className="price">
                                        <label>
                                            Price:
                                            <input
                                                type="number"
                                                value={price}
                                                onChange={(e) => setPrice(Number(e.target.value))} 
                                                placeholder="Enter the price"
                                            />
                                        </label>
                                    </div>
                                    <div className="rating">
                                        <label>
                                            Rating:
                                            <input
                                                type="number"
                                                value={rating}
                                                onChange={(e) => setRating(Number(e.target.value))} 
                                                placeholder="Enter the rating"
                                            />
                                        </label>
                                    </div>
                                    <div className="spec">
                                        <label>
                                            Specifications:
                                            <input
                                                type="text"
                                                value={specifications}
                                                onChange={(e) => setSpecifications(e.target.value)}
                                                placeholder="Enter the specifications"
                                            />
                                        </label>
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Adminedit;
