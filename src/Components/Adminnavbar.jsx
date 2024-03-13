import { Routes, Route } from "react-router-dom";
import Admindetails from "./Admindetails";
import Adminview from "./Adminview";
import Adminproducts from "./Adminproducts";
import Adminedit from "./Adminedit";

const Adminnavbar = () => {
    return ( 
        <div className="navbar">
            <Admindetails />
            <Routes>
                <Route path="/admindetails" element={<Admindetails />} />
                <Route path="/adminview" element={<Adminview />} />
                <Route path="/adminaddproducts" element={<Adminproducts />} />
                <Route path="/admineditproduct/:id" element={<Adminedit />} />
            </Routes>
        </div>
    );
}
 
export default Adminnavbar;
