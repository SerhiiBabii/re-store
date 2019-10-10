import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";
import { connect } from "react-redux";

import "./app.css";

const App = ({ numItems, total }) => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={numItems} total={total} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, quantityTotal } }) => {
  return {
    numItems: quantityTotal,
    total: orderTotal
  };
};

export default connect(mapStateToProps)(App);
