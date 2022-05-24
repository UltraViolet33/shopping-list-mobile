export const ADD_PRODUCT = "ADD_PRODUCT";

export const ADD_STOCK_ACTUAL = "ADD_STOCK_ACTUAL";

export const REMOVE_STOCK_ACTUAL = "REMOVE_STOCK_ACTUAL";

export const initialState = {
  products: [
    { name: "testddd", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 5, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
  ],
};

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const addStockActual = (idProduct) => ({
  type: ADD_STOCK_ACTUAL,
  idProduct,
});

export const removeStockActual = (idProduct) => ({
  type: REMOVE_STOCK_ACTUAL,
  idProduct,
});

export const productReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      products: state.products.concat(action.product),
    };
  }

  if (action.type === ADD_STOCK_ACTUAL) {
    const tmpProduct = state.products;
    tmpProduct[action.idProduct].stockActual += 1;
    return {
      ...state,
      products: tmpProduct,
    };
  }

  if (action.type === REMOVE_STOCK_ACTUAL) {
    const tmpProduct = state.products;
    tmpProduct[action.idProduct].stockActual -= 1;
    return {
      ...state,
      products: tmpProduct,
    };
  }
};
