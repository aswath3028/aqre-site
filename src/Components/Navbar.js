import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/Logo.png";
import { useNavigate } from "react-router-dom";
import YourOrder from "./yourorder";

function Navbar() {
  const navigate = useNavigate();

  const [luser, setLuser] = useState("null");
  const [cluser, setCuser] = useState("null");
  const [cartInc,setcartInc] = useState(0);
  let user;
  let cuser;
  let cemail;
  useEffect(() => {
    user = localStorage.getItem("lemail");
    cuser = localStorage.getItem("cuser");
    cemail = localStorage.getItem('cemail');
    console.log(luser);
    console.log(cuser);
    setLuser(user);
    setCuser(cuser);
    cemail = localStorage.getItem('cemail');
        fetch('https://aqre-api.onrender.com/getCartProduct',{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              cemail
            })
          }).then(result=>result.json())
          .then(val=>{
              console.log(val.data.length);
              
              setcartInc(val.data.length);
            
          }).catch(err=>{
            console.log(err);
            
    
          })
  });
  const Logout = (e) => {
    e.preventDefault();
    localStorage.setItem("lemail", null);
    localStorage.setItem("cuser", null);
    localStorage.setItem("cemail",null);
    navigate("/", { replace: true });
  };
  const CartPage = (e)=>{
    e.preventDefault();
    if(cemail == "null"){
      alert("please do customer login");
      navigate("/", { replace: true });
    }
    else{
      navigate("/cart", { replace: true });
    }
  }
  return (
    <>
      <div className="Navbar">
        <Link className="left-header" to="/home">
          <img className="img-logo" src={Logo} alt="Logo" />
        </Link>
        <div className="search">
          <input className="searchInput" type={"text"} />
          <FontAwesomeIcon
            className="searchIcon"
            icon={faSearch}
            size="25px"
            color="white"
          />
        </div>
        <ul className="nav_menu">
          <li>
            <Link className="nav_item" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav_item" to="/contact-us">
              Contact Us
            </Link>
          </li>
          {cuser !== "null" ? (
            <li>
              <Link className="nav_item" to="/yourorder" onClick={YourOrder}>
               YourOrder
            </Link>
            </li>
          ) : null}

          {luser !== "null" || cluser !== "null" ? (
            <Link className="nav_item" to="/retail" onClick={Logout}>
              Logout
            </Link>
          ) : (
            <li>
              <div class="dropdown nav_item">
                Login
                <div class="dropdown-content">
                  <Link className="dropnav_item " to="/retail">
                    Retail Login
                  </Link>
                  <Link className="dropnav_item" to="/custlog">
                    Customer Login
                  </Link>
                </div>
              </div>
            </li>
          )}
          {luser !== "null" ? (
            <li>
              <Link className="nav_item" to="/admin">
                Admin
              </Link>
            </li>
          ) : null}

          <li>
            <Link className="nav_item cart" to="/cart" onClick={CartPage}>
              <span>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="nav_item"
                  size="lg"
                  style={{ alignItems: "center", marginTop: "10px" }}
                />
              </span>
              <span>{cartInc}</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
