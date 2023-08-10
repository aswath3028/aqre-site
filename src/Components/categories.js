import React from "react";

export default function categories() {
  return (
    <>
      <div class="container-fluid mb-3">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <div class="card">
                <div class="card-header">Categories</div>
                <div class="card-body p-1">
                  <div class="card border-0 b-3">
                    <div
                      class="card-body p-0 collapse show"
                      id="collapseExample1"
                    >
                      <ul
                        class="list-group list-group-flush"
                        style="height:200px;overflow:auto;"
                      >
                        <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              Google
                            </label>
                          </div>
                          <span class="badge badge-secondary badge-pill">
                            14
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="button" class="btn btn-block btn-primary">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
