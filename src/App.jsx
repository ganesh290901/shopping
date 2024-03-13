import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Registeracc from './Components/Registeracc.jsx'; 
import Secretcode from './Components/Secretcode.jsx';
import Adminnavbar from './Components/Adminnavbar.jsx';
import Userview from './Components/Userview.jsx';
import Cart from './Components/Cart.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/newaccount' element={< Registeracc/>}></Route>
        <Route path='/adminsecretcode' element={< Secretcode/>}></Route>
        <Route path='/userview' element={< Userview/>}></Route>
        <Route path='/adminnavbar/*' element={< Adminnavbar/>}></Route>
        <Route path='/userview/cart' element={< Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
