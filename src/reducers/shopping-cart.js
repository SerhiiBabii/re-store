const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    count: count + 1,
    title,
    total: total + book.price
  };
};

const deletedItem = (cartItems, index) => {
  return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
};

const increasedItem = (book, item) => {
  const { count, total } = item;
  return {
    ...item,
    count: count + 1,
    total: total + book.price
  };
};

const decreasedItem = (book, item, cartItems, index) => {
  const { count, total } = item;
  if (count === 1) {
    return deletedItem(cartItems, index);
  } else {
    const newItem = {
      ...item,
      count: count - 1,
      total: total - book.price
    };
    return [
      ...cartItems.slice(0, index),
      newItem,
      ...cartItems.slice(index + 1)
    ];
  }
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const book = books.find(item => item.id === bookId);
      const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      const item = cartItems[itemIndex];
      const newItem = updateCartItem(book, item);

      return {
        ...state.shoppingCart,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
      };

    case "BOOK_DELETED_FROM_CART":
      const bookDeleteedId = action.payload;
      const itemDeletedIndex = cartItems.findIndex(
        ({ id }) => id === bookDeleteedId
      );

      return {
        ...state.shoppingCart,
        cartItems: deletedItem(cartItems, itemDeletedIndex)
      };

    case "BOOK_INCREASED_TO_CART":
      const bookIncreasedId = action.payload;
      const bookIncreased = books.find(item => item.id === bookIncreasedId);
      const itemIncreasedIndex = cartItems.findIndex(
        ({ id }) => id === bookIncreasedId
      );
      const itemIncreased = cartItems[itemIncreasedIndex];
      const newItemIncreased = increasedItem(bookIncreased, itemIncreased);
      return {
        ...state.shoppingCart,
        cartItems: updateCartItems(
          cartItems,
          newItemIncreased,
          itemIncreasedIndex
        )
      };

    case "BOOK_DECREASED_FROM_CART":
      const bookDecreasedId = action.payload;
      const bookDecreased = books.find(item => item.id === bookDecreasedId);
      const itemDecreasedIndex = cartItems.findIndex(
        ({ id }) => id === bookDecreasedId
      );
      const itemDecreased = cartItems[itemDecreasedIndex];
      const newItemDecreased = decreasedItem(
        bookDecreased,
        itemDecreased,
        cartItems,
        itemDecreasedIndex
      );

      return {
        ...state.shoppingCart,
        cartItems: newItemDecreased
      };
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
