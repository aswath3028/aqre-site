import React, { useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  let lemail = localStorage.getItem("lemail");
  const navigate = useNavigate();
  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    category: "",
    price: "",
    discount: "",
  });
  const [pho, setPho] = useState(null);

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

    console.log(fd);

    fetch("https://aqre-api.onrender.com/addProduct", {
      method: "POST",

      body: fd,
    })
      .then((res) => {
        let val = res.json();
        console.log(val);
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
              <select
                className="form-control form-control-lg"
                id="cars"
                name="category"
                value={data.category}
                onChange={HandleInputs}
              >
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
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
