import { useState } from 'react';
import '../Styles/Registeracc.css'
import axios from 'axios'
const Registeracc = () => {
    
    let[username,setUsername]=useState("");
    let[password,setPassword]=useState("");
    let[email,setEmail]=useState("");
    let[mobileno,setMobileno]=useState("");
    let[gender,setGender]=useState("");
  

    let register = (e) =>{
    e.preventDefault();
    const data={username : username,
                password:password,
                email:email,
                mobile:mobileno,
                gender:gender}
    axios.post("http://localhost:3000/newaccount",data)
    .then((res) =>{
        alert("sucesss")
    })
    .catch((err) =>{
        alert("error")
    })
}

    return ( 
        <div className="container">
            <div className="title">Register  a new Account</div>
            <form onSubmit={register}>
                <div className="mainuser">
                    <div className="userinput" id="inputt">
                        <label for="username">Username:</label>
                        <input type="text" value={username}  onChange={(e) =>{setUsername(e.target.value)}} name="username" id="username"  placeholder="enter the username"/>
                    </div>
                    <div className="userinput">
                        <label for="password">Password:</label>
                        <input type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} name="password" id="password"  placeholder="enter the password"/>
                    </div>
                    <div className="userinput">
                        <label for="email">E-mail:</label>
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} name="email" id="email"  placeholder="enter the email"/>
                    </div>
                    <div className="userinput">
                        <label for="mobileno">MobileNo:</label>
                        <input type="number" value={mobileno} onChange={(e) => {setMobileno(e.target.value)}} name="mobileno" id="mobileno"  placeholder="enter the mobileno"/>
                    </div>
                    


                    <div className="last">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
     );

}
 
export default Registeracc;