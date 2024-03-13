import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Secretcode.css'

const Secretcode = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate(); 

    async function login(e) {
        e.preventDefault();
        try {
            const data = await fetch('http://localhost:3000/seretcode');
            const final = await data.json();
            let codeMatched = false;
            for (let a of final) {
                if (code === a.password) {
                    alert('Login successful');
                    navigate('/adminnavbar'); 
                    codeMatched = true;
                    break;
                }
            }
            if (!codeMatched) {
                alert('Invalid secret code');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div className="secretcode">
            <form onSubmit={login}>
                <input 
                    type="text" 
                    id="secretcode" 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)} 
                    placeholder="Enter the secret code"/> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default Secretcode;
