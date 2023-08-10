import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useNavigate, Outlet } from "react-router-dom";

export default function Custreg() {
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
      const res = await fetch("https://aqre-api.onrender.com/custreg", {
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
        navigate("/custlog", { replace: true });
      }
    } else {
      alert("passwords are not matching");
    }
  };
  return (
    <>
      <div className="register">
        <br />
        <br />
        <br />
        <div className="form">
          <h2>User Registration</h2>
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
                type="text"
                id="firstName"
                name="name"
                vaue={data.name}
                placeholder="Name"
                onChange={HandleInputs}
              />
              <input
                type="email"
                id="email"
                className="form_input"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={HandleInputs}
              />
              <input
                className="form_input"
                type="text"
                id="lastName"
                name="mobile"
                value={data.mobile}
                placeholder="Phone Number"
                onChange={HandleInputs}
              />
              <textarea
                className="form_input"
                id="lastName"
                name="address"
                value={data.address}
                placeholder="Address"
                onChange={HandleInputs}
              />
              <input
                className="form_input"
                type="password"
                id="password"
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={HandleInputs}
              />
              <input
                className="form_input"
                type="password"
                id="confirmPassword"
                value={data.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={HandleInputs}
              />
            </div>
          </div>
          <button type="submit" className="reg" onClick={Store}>
            Register
          </button>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
