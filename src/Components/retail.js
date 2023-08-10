import React, { useEffect, useState } from "react";
import "../Components/retail.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

let user;
let lemail;
export default function Retail() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const HandleInputs = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const Login = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    fetch("https://aqre-api.onrender.com/retail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.name);
        localStorage.setItem("user", val.data.name);
        user = localStorage.getItem("user");
        localStorage.setItem("lemail", val.data.email);
        console.log(user);
        navigate("/admin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert("invalid credentials");
        navigate("/retail", { replace: true });
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="retail">
        <br />
        <br />
        <div class="box-form">
          <div class="left">
            <span className="name">
              Hey Welcome Back
              <br /> Its Time to run the engines.
            </span>
          </div>

          <div class="right">
            <h2>Login</h2>
            <div class="inputs">
              <div className="input-icons">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email address"
                  name="email"
                  value={data.email}
                  onChange={HandleInputs}
                />
              </div>
              <div className="input-icons">
                <FontAwesomeIcon className="icon" icon={faLock} />
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={HandleInputs}
                />
              </div>
            </div>

            <br />

            <div className="remember">
              <input type="checkbox" className="item" />
              <span class="text-checkbox">Remember me</span>
            </div>
            <br />
            <br />
            <p>
              Don't have an account? <a href="/register">Register</a>
              <br />
              <br />
            </p>
            <br />
            <button className="log" onClick={Login}>
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
