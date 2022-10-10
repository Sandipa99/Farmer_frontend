import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import { images } from "../constants/index";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="section">
          <div className="text">
            <h1>Farm Assist System</h1>
            <p>
              Agriculture is our wisest pursuit, because it will in the end
              contribute most to real wealth, good morals, and happiness.
            </p>
            <Button value="About Us" href="" />
          </div>
          <div className="image">
            <img src={images.main} alt="" />
          </div>
        </div>
        <div className="footer">
          <p>All rights. reserved. Farm Assist System &copy;</p>
        </div>
        {/* <h1>Home Page</h1>
        <Button href="/farmer">Login As Farmer</Button>{" "}
        <Button href="/supplier">Login As Supplier</Button>{" "}
        <Button href="/farmer/addcomplaint">Complaint</Button>{" "} */}
      </div>
    );
  }
}

export default Home;
