import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hotel from "./components/Hotel";
import SignIn from "./components/SignIn";
import ForgetPass from "./ForgetPass";
import Payment from "./components/Payment";
import Food from "./components/Fruits";
import Rooms from "./components/Rooms";
import Seafood from "./components/seafood";
import CartApp from "./components/CartApp";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Farmer from "./components/farmer";
import NavBar from "./components/Navbar";
import Customer from './components/customer';

import Navbar1 from './components/Navbar1';
import AdminPage from "./components/admin";



function App() {
  return (
    <div className="App">
      { /* <Navbar /> */ }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Fruits" element={<Food />} />
        <Route path="/SeaFood" element={<Seafood />} />
        <Route path="/CartApp" element={<CartApp />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/NavBar1" element={<Navbar1 />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<AdminPage />} />
      
      </Routes>
    </div>
  );
}

export default App;
