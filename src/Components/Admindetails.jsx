import '../Styles/Admindetails.css'
import { Link } from 'react-router-dom';
const Admindetails = () => {
    return ( 
        <div className="details">
            <div className="header">
                <span>welcome to shopping application</span>
                <div className="division">
                    <Link to ='/adminnavbar/adminview'>Adminview</Link> 
                    <Link to='/adminnavbar/adminaddproducts'>Adminaddproduct</Link>
                    {/* <Link to='/adminnavbar/admineditproduct'>AdminaEditproduct</Link> */}
                </div>
            </div>
        </div>
     );
}
 
export default Admindetails;