import { Link, useNavigate } from "react-router-dom";
import Userview from "./Userview";
import '../Styles/Login.css'
import axios from "axios";
import { useState } from "react";

const Login = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        try {
            let response = await axios.get('http://localhost:3000/newaccount');
            let final = response.data;
            for (let a of final) {
                if (username === a.username && password === a.password) {
                    alert('login success');
                    navigate(`/userview`);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="user">
            <div className="admin" id="login1">
                <Link to="/adminsecretcode">
                    <h2>AdminLogin</h2>
                </Link>
            </div>
            <div className="userlogin">
                <h2>UserLogin</h2>
                <form onSubmit={login}>
                    <div className="input1" id="login2">
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  />
                    </div>
                    <div className="input2" id="login3">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </div>
                    <button type="submit">Login</button><br></br>
                    <Link to="/newaccount">
                        <span>Create New Account</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
