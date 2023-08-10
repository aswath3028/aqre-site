import React, { useState } from "react";
import "./register.css";
// import { Outlet } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Footer from "./footer";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const HandleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const Store = async (e) => {
    e.preventDefault();
    const { name, email, mobile, address, password } = data;
    if (password == data.confirmPassword) {
      const res = await fetch("https://aqre-api.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          address,
          password,
        }),
      });
      if (res.status === 400) {
        alert("user exist");
      } else {
        navigate("/retail", { replace: true });
      }
    } else {
      alert("passwords are not matching");
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="register">
        <br />
        <br />
        <br />
        <div className="form">
          <h2>Retail Registration Form</h2>
          <br />
          <br />
          <div className="form-body">
            <div className="column">
              <label className="form_label" for="firstName">
                Name{" "}
              </label>
              <label className="form_label" for="email">
                Email{" "}
              </label>
              <label className="form_label" for="lastName">
                Phone Number
              </label>
              <label className="form_label" for="lastName">
                Address{" "}
              </label>
              <label className="form_label" for="password">
                Password{" "}
              </label>
              <label className="form_label" for="confirmPassword">
                Confirm Password{" "}
              </label>
            </div>
            <div className="column col-2">
              <input
                className="form_input"
                required
                type="text"
                id="firstName"
                name="name"
                value={data.name}
                onChange={HandleInputs}
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                required
                className="form_input"
                name="email"
                value={data.email}
                onChange={HandleInputs}
                placeholder="Email"
              />
              <input
                className="form_input"
                required
                type="text"
                id="lastName"
                name="mobile"
                value={data.mobile}
                onChange={HandleInputs}
                placeholder="Phone Number"
              />
              <textarea
                className="form_input"
                required
                id="lastName"
                name="address"
                value={data.address}
                onChange={HandleInputs}
                placeholder="Address"
              />
              <input
                className="form_input"
                required
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={HandleInputs}
                placeholder="Password"
              />
              <input
                className="form_input"
                required
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={HandleInputs}
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button type="submit" onClick={Store} className="reg">
            Register
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
