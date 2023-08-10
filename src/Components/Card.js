import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

// const Handlesubmit = (i) => {
//   addItem(i);
// }
function Card(props, handleClick) {
  let cemail;

  const navigate = useNavigate();
  const [data,setData] = useState(props);
  const [inc,setInc] = useState(0)

  useEffect(() => {
   
    cemail = localStorage.getItem('cemail');
   
    
  });
  const Inc = ()=>{

    setInc(inc+1);
  }
  const Dec = ()=>{
    if(inc>0){

      setInc(inc-1);
    }
  }
  
  const Cart = ()=>{
    console.log(data);
   
    console.log(data);
    
    if(cemail == "null"){
      alert("please do customer login");
      navigate("/custlog", { replace: true });
    }
    else{
      fetch("https://aqre-api.onrender.com//cart", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data,cemail,inc
        })
      })
        .then((res) => {
          let val = res.json();
          console.log(val);
          // localStorage.setItem('lemail',null);
          alert("product added to cart");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
      
    }

  }
   
  return (
    <>
      <div className="gallery">
        <div className="content">
          <img src={props.photo} alt={props.title} />
          <h3>{props.productName}</h3>
          {/* <p>{props.productDescription}</p> */}<br/>
          <tr ><td><h6>&nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;&nbsp;&nbsp;<del>&#8377;{props.price}</del></h6></td>&nbsp; &nbsp; &nbsp; 
          <td><h6 >&#8377; {props.discount}</h6></td></tr><br/>
          <span style={{padding:"10px"}}><button className="bt" onClick = {Inc}>+</button>&nbsp;&nbsp;&nbsp;<span style={{"textAlign":"center"}}>&nbsp;{inc}</span>&nbsp;&nbsp;&nbsp;  <button className="bt" onClick={Dec}>-</button></span>
          <br/>
          <br/>
          <ul className="star">
            <li>
              <FontAwesomeIcon icon={faStar} className="rating"/>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="rating"/>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="rating"/>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="rating"/>{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="rating"/>{" "}
            </li>
          </ul>
          <button className="buy-1" onClick={Cart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
