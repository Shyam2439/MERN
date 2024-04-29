import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        role: "" // New role field
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
        const { name, email, password, reEnterPassword, role } = user;
        if (name && email && password && (password === reEnterPassword) && role) {
            axios.post("http://localhost:3001/signup", user)
                .then(res => {
                    alert(res.data.message);
                    navigate("/login");
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <center>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                {/* Role Selection */}
                <select name="role" value={user.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="farmer">Farmer</option>
                    <option value="customer">Customer</option>
                </select>
                {/* End of Role Selection */}
                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button" onClick={() => navigate("/login")}>Login</div>
            </div>
        </center>
    );
};

export default SignIn;
