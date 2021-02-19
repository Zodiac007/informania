import React from "react";
import Modal from "./Modal";
import Data from "../data/data.json";
import Image from "../images/Calendar-bro.svg";
import "../App.css";

function Users() {
  const [state, setState] = React.useState({
    open: false,
    userData: {},
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            {state.open ? <Modal state={state} setState={setState} /> : null}
            {Data.members.map((d) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-6 card-profile-section animate__animated animate__bounceInLeft animate__slow">
                  <div className="card card-css" style={{ width: "14rem" }}>
                    <img
                      src={Image}
                      className="card-img-top"
                      alt="card-image"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{d.real_name}</h6>
                      <hr />
                      <p className="card-subtitle">{d.tz}</p>
                    </div>
                    <div className="button-section">
                      <button
                        // onClick={() => setShow(true)}
                        onClick={() =>
                          setState((prev) => ({
                            ...prev,
                            open: true,
                            userData: d,
                          }))
                        }
                        className="btn btn-danger"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 hero-section animate__animated animate__bounceInRight animate__slow animate__delay-1s">
          <img src={Image} className="hero-image" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Users;
