export const ADD_PRODUCT = "ADD_PRODUCT";

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

export const productReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      products: state.products.concat(action.product),
    };
  }
};
