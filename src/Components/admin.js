import React, { useEffect } from "react";

import { useNavigate, Outlet } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  let cuser;
  useEffect(() => {
    cuser = localStorage.getItem("cuser");
    if (cuser === null) {
      navigate("/", { replace: true });
    }
  });
  const Logout = () => {
    localStorage.setItem("lemail", null);
    cuser = localStorage.getItem("lemail");
    if (cuser == "null") {
      navigate("/retail", { replace: true });
    }
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Admin Panel</span>
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li>
                  <a href="/admin/view" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/edit"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle "
                  >
                    <i class="fs-4 bi-bootstrap"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Products</span>
                  </a>
                  <ul
                    class="collapse nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li class="w-100">
                      <a href="/admin/view" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">
                          View Products
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="/admin/edit" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">
                          Add Products
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
              <div class="dropdown pb-4">
                {/* <a
                  href="#"
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    class="rounded-circle"
                  />
                  <span class="d-none d-sm-inline mx-1">User</span>
                </a> */}
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <button class="dropdown-item" onClick={Logout}>
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
