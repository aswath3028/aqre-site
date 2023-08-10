import React, { useState,useEffect, isValidElement } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function Update() {
    let lemail = localStorage.getItem('lemail');
    let id = localStorage.getItem('itemid');
  const navigate = useNavigate();
  const [dphoto,setdphoto] = useState(null);
  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    category: "",
    price: "",
    discount: "",
  });
  useEffect(() => {
    fetchData();

    
  },[]);
  const [pho, setPho] = useState(null);
  const fetchData = () => {
    
    fetch('https://aqre-api.onrender.com/updatefetch',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          id
        })
      }).then(result=>result.json())
      .then(val=>{
          console.log(val.data)
          setData({
            productName: val.data[0].productName,
            productDescription: val.data[0].productDescription,
            category: val.data[0].category,
            price: val.data[0].price,
            discount: val.data[0].discount,
          });
          console.log(val.data[0].photo)
        //   setdphoto(val.data[0].photo.substr(13));
          
          console.log(data.productName)
        
      }).catch(err=>{
        console.log(err);
        

      })
  
};
  

  const HandleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
   
    
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });

    console.log(data);
  };
  const photoHandler = (e) => {
    let name = e.target.name;
    let value = e.target.files[0];
    setPho(value);
    console.log(e.target.files[0]);
  };
  const subm = (e) => {
    e.preventDefault();
    
    console.log(data);
    let fd = new FormData();
    fd.append("productName", data.productName);
    fd.append("productDescription", data.productDescription);
    fd.append("category", data.category);
    fd.append("price", data.price);
    fd.append("discount", data.discount);
    fd.append("photo", pho);
    fd.append("email", lemail);
    fd.append("id",id);

    console.log(data);

    fetch("https://aqre-api.onrender.com/updateproduct", {
      method: "POST",

      body: fd,
    })
      .then((res) => {
        let val = res.json();
        
        // localStorage.setItem('lemail',null);
        navigate("/admin/view", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add a Product</h2>
            <input
              type="file"
              name="photo"
              value={data.photo}
              onChange={photoHandler}
            />

            <br />
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Product Name"
                name="productName"
                value={data.productName}
                onChange={HandleInputs}
              />
            </div>
            <br />

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Product description"
                name="productDescription"
                value={data.productDescription}
                onChange={HandleInputs}
              />
            </div>
            <br />

            <div className="form-group">
              <select className="form-control form-control-lg" id="cars" name="category" value={data.category}
                onChange={HandleInputs}>
                <option>Select Category</option>
                <option value="Fruit">Fruit</option>
                <option value="Diary">Diary</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Beverages">Beverages</option>
              </select>
             
            </div>
            <br />

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Price"
                name="price"
                value={data.price}
                onChange={HandleInputs}
              />
            </div>
            <br />
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Quantity"
                name="price" value = {data.qty} onChange={HandleInputs}
              />
            </div> */}
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Discount"
                name="discount"
                value={data.discount}
                onChange={HandleInputs}
              />
            </div>
            <br />
            <button className="btn btn-primary btn-block" onClick={subm}>
              update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
