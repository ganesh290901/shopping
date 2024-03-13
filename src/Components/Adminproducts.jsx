import axios from 'axios';
import { useState } from 'react';
import '../Styles/Adminproducts.css'
const Adminproducts = () => {
  
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0); 
  const [rating, setRating] = useState(0); 
  const [specifications, setSpecifications] = useState("");

  
  const data = {
    imageUrl,
    category,
    productName,
    price,
    rating,
    specifications,
  };

  const handleStore = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/products', data);
      alert('Product added successfully!');
    } catch (error) {
      console.error(error); 
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="all">
      <div className="product">
        <table>
          <tbody> 
            <tr>
              <th>
                <form onSubmit={handleStore}>
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
                      Category:<select value={category} onChange={(e) => {setCategory(e.target.value)}}>
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
};

export default Adminproducts;
