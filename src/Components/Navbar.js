import React, { Component } from "react";
import { ProductConsumer } from "./Context";

export default class Navbar extends Component {
  render() {
    return (
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Shopping</a>
    </div>
 
    <ul class="nav navbar-nav navbar-right" style = {{color:"white",textDecoration:"none !important;"}}>
      {/* <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a> */}
      <ProductConsumer>
                {value => {
                  return (
                   
                      <span className="cart mr-5">
                        Cart
                        <i className="fas fa-shopping-cart cart mr-5">
                          <span>{value.cart.length}</span>
                        </i>
                      </span>
                    
                  );
                }}
              </ProductConsumer>
      {/* </li> */}
    </ul>
  </div>
</nav>
    );
  }
}