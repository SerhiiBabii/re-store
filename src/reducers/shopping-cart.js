const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};

const updateTotalPrice = (cartItems, book, quantity) => {
  let totalCount = 0;
  cartItems.map(book => {
    return (totalCount += book.total);
  });
  return totalCount + book.price * quantity;
};

const updateTotalQuantity = (cartItems, quantity) => {
  let totalQuantity = 0;
  cartItems.map(book => {
    return (totalQuantity += book.count);
  });
  return totalQuantity + quantity;
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  const price = total + quantity * book.price;
  return {
    id,
    count: count + quantity,
    title,
    coverImage: book.coverImage,
    total: +price.toFixed(2)
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;

  const book = books.find(item => item.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: updateTotalPrice(cartItems, book, quantity).toFixed(2),
    quantityTotal: updateTotalQuantity(cartItems, quantity)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      quantityTotal: 0
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_DELETED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    case "BOOK_DECREASED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
