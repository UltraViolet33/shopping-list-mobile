import AsyncStorage from "@react-native-async-storage/async-storage";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const ADD_STOCK_ACTUAL = "ADD_STOCK_ACTUAL";

export const REMOVE_STOCK_ACTUAL = "REMOVE_STOCK_ACTUAL";

export const REPLACE_STATE = "REPLACE_STATE";

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

export const replaceState = (state) => ({
  type: REPLACE_STATE,
  state,
});

const saveState = (state) => {
  AsyncStorage.setItem("Products", JSON.stringify(state))
    .then(() => console.log("save ok"))
    .catch((err) => console.log(err));
};

export const productReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === ADD_PRODUCT) {
    newState.products = [...newState.products];
    newState.products.push(action.product);
    saveState(newState);
    return newState;
  }

  if (action.type === ADD_STOCK_ACTUAL) {
    newState.products = [...newState.products];
    newState.products[action.idProduct].stockActual += 1;
    saveState(newState);
    return newState;
  }

  if (action.type === REMOVE_STOCK_ACTUAL) {
    newState.products = [...newState.products];
    newState.products[action.idProduct].stockActual -= 1;
    saveState(newState);
    return newState;
  }

  if (action.type === REPLACE_STATE) {
    return action.state;
  }
};
