import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SpecialProducts = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="Watch" />
          </div>
          <div>
            <div className="special-product-content">
              <h5 className="brand">Name Of Product</h5>
              <h6 className="title">Describe product the way you see fit</h6>
              <ReactStars
                count={5}
                size={24}
                value="3"
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">R400</span>
                &nbsp;
                <strike>R500</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-2 bg-danger">
                    1
                  </span>:
                  <span className="badge rounded-circle p-2 bg-danger">
                    1
                  </span>:
                  <span className="badge rounded-circle p-2 bg-danger">
                    1
                  </span>
                </div>
                </div>
                <div className="prod-count my-3">
                  <p>Products: 5</p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <Link className="button">Add to Cart</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SpecialProducts;
