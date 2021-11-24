import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";

import "./style.css";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);

  const cartItems = cart.cartItems;
  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft={`My cart`} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <div key={index} className="flexRow">
              <div className="cartProductContainer">
                <img src="" />
              </div>
              <div className="cartItemDetails">
                <div>
                  {cartItems[key].name} - qty - {cartItems[key].qty}{" "}
                </div>
                <div>Deliver in 3 - 5 days</div>
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ width: "500px" }}>Price</Card>
      </div>
    </Layout>
  );
};

export default CartPage;
