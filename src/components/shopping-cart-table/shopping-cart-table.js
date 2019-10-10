import React from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";
import {
  bookDeletedFromCart,
  bookAddedToCart,
  bookDecreasedFromCart
} from "../../actions";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
  isImage
}) => {
  const renderRow = (item, index) => {
    const { id, title, count, total, coverImage } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        {isImage ? (
          <td>
            <img className="h-50 p-2" src={coverImage} alt="CoverImage" />
          </td>
        ) : null}
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {isImage ? <th>Image</th> : null}
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDecrease: id => {
      dispatch(bookDecreasedFromCart(id));
    },
    onIncrease: id => {
      dispatch(bookAddedToCart(id));
    },
    onDelete: id => {
      dispatch(bookDeletedFromCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
