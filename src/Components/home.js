import React, { useEffect, useState } from "react";
import Card from "./Card";
import Logo from "../Images/Logo.png";
// import list from "./data.js";
import "./home.css";
import Slide from "./slide.js";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet, Path } from "react-router-dom";
import axios from "axios";
// import Carousel from "./product_carousel";

function Home() {
  const [data, setData] = useState([]);
  const [filter,setFilter] = useState();
  let cemail;
  useEffect(() => {
    fetchData();
    cemail = localStorage.getItem('cemail');

    // const res = await axios.get("https://aqre-api.onrender.com//getProduct");
    // setData(res.data);
    // console.log(res.data);
  }, []);
  const fetchData = () => {
    fetch("https://aqre-api.onrender.com//getProduct")
      .then((result) => result.json())
      .then((val) => {
        const ddata = val.data;
        setData(ddata);

        console.log(val.data[0].photo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [cart,setCart] = useState([]);
  function handleClick(item) {
    // setCart([...cart,item]);
    console.log(item);
  };
  const RadioInput = (e)=>{
    setFilter(e.target.value);
  }
  const Filter = ()=>{
    
    fetch('https://aqre-api.onrender.com//filter',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          filter
        })
      }).then(result=>result.json())
      .then(val=>{
        console.log(val.data.name);
        setData(val.data)
      
      }).catch(err=>{
        console.log(err);

      })
  }
  return (
    <>
      <Slide />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
          
        <div style={{ display: "flex", flexDirection: "column", width:"30%"}}>
          <div class="custom-control custom-checkbox">
            <br/><br/><br/>
            <label className="card-body">Categories</label><br/>
            
<input type="radio" id="javascript" name="radiob" value="All" onChange={RadioInput}/>
  <label for="all">All</label><br/>
  <input type="radio" id="html" name="radiob" value="Fruit" onChange={RadioInput}/>
  <label for="html">Fruit</label><br/>
  <input type="radio" id="css" name="radiob" value="Diary" onChange={RadioInput}/>
  <label for="css">Diary</label><br/>
  <input type="radio" id="javascript" name="radiob" value="Cleaning" onChange={RadioInput}/>
  <label for="javascript">Cleaning</label><br/>
<input type="radio" id="javascript" name="radiob" value="Beverages" onChange={RadioInput}/>
  <label for="javascript">Beverages</label>
          </div>
         <center><button type="button" class="btn btn-block btn-primary" style={{width:"100px"}} onClick = {Filter}>
                    Filter
                  </button></center>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50vw",
            flexWrap: "wrap",
          }}
        >
          {data.map((item) => (
            
            <Card
              productName={item.productName}
              photo={"https://aqre-api.onrender.com//" + item.photo.substr(13)}
              productDescription={item.productDescription}
              price={item.price}
              discount={item.discount}
              category = {item.category}
              item={item}
              handleClick={handleClick}
            />
          ))}<hr/>
        </div>
      </div>

      <Outlet />
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <Footer />
    </>
  );
}

export default Home;