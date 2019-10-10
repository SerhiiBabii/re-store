import React from "react";
import ShoppingCartTable from "../shopping-cart-table";

const CartPage = () => {
  return (
    <div>
      <h2>Card page</h2>
      <ShoppingCartTable isImage={true} />
    </div>
  );
};

export default CartPage;
