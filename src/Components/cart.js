import React, { useEffect, useState } from "react";
import list from "./data.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  // const navigate = useNavigate();
  // let cuser;
  // useEffect(()=>{
  //     cuser = localStorage.getItem('cuser');
  //     navigate('/', {replace: true});
  //   })
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetchData();
    console.log(data);
    // const res = await axios.get("https://aqre-api.onrender.com//getProduct");
    // setData(res.data);
    // console.log(res.data);
  });
  useEffect(() => {
    fetchTotal();
  });
  const fetchData = () => {
    let cemail = localStorage.getItem("cemail");
    fetch("https://aqre-api.onrender.com//getCartProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cemail,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.length);

        setData(val.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchTotal = () => {
    let cemail = localStorage.getItem("cemail");
    fetch("https://aqre-api.onrender.com//getCartTotal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cemail,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.length);

        setTotal(val.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = (item) => {
    fetch("https://aqre-api.onrender.com//deleteCartProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data);
        //   setTotal(total-(val.data.price-val.data.discount)*val.data.quantity);

        navigate("/cart", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Placeorder = () => {
    let cemail = localStorage.getItem("cemail");
    fetch("https://aqre-api.onrender.com//getCartProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cemail,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        console.log(val.data.length);

        setData(val.data);
        console.log(val.data);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("https://aqre-api.onrender.com//placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    })
      .then((result) => result.json())
      .then((val) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="outline">
        <div class="container ">
          <div class="cart_inner">
            <table class="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>{item.productName}</td>
                    <td>
                      <img
                        src={item.photo}
                        alt=""
                        style={{ height: "100px", width: "100px" }}
                      />
                    </td>

                    <td>{item.quantity}</td>
                    <td>{ (item.discount) * item.quantity}</td>

                    <td>
                    <FontAwesomeIcon icon={faTrash} size="lg" style={{"cursor":"pointer"}}
                        onClick={(e) => {
                          e.preventDefault();
                          Delete(item);
                        }}
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>{total}</td>
                </tr>{" "}
              </tbody>
              <tr>
                <td></td><td></td><br/><br/><br/>
                <td><button style={{"backgroundColor":"olivedrab","width":"150px","borderRadius":"5px"}} onClick={Placeorder}>Place Order</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* <div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Products</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>Product Name</th>
                                    <th>Product image</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td>{item.productName}</td>
                                    <td><img src={item.photo} alt=""  style={{height:"100px",width:"100px"}}/></td>
                                    
                                    <td>{item.quantity}</td>
                                    <td>{(item.price-item.discount)*item.quantity}</td>
                                                                       
                                    <td><FontAwesomeIcon icon={faDeleteLeft} onClick={ 
                            (e) => {
                                e.preventDefault(); 
                                Delete(item)
                            }}/></td>
                             
                                </tr>
                                )) }
                                <h1>total amount: {total}</h1>
                                <button onClick={Placeorder}>place order</button>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
*/}
    </>
  );
}
