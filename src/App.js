import "./App.css";
import React from "react";

import Home from "./Components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/register";
// import Signin from "./Components/sign_in";
import Retail from "./Components/retail";
import Custreg from "./Components/custreg";
import Custlog from "./Components/custlog";
import Admin from "./Components/admin";
import View from "./Components/view";
import Edit from "./Components/edit";
import Orders from "./Components/orders";
import Navbar from "./Components/Navbar";
import Update from "./Components/update";
import Cart from "./Components/cart"
import YourOrder from "./Components/yourorder";
localStorage.setItem("user", null);
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/"  element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="custreg" element={<Custreg />} />
            <Route path="custlog" element={<Custlog />} />
            <Route path="retail" element={<Retail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="yourorder" element={<YourOrder />} />
        

          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route path="orders" element={<Orders />} />
            <Route path="view" element={<View />} />
            <Route path="edit" element={<Edit />} />
            <Route path="update" element={<Update />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
