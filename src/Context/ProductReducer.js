import AsyncStorage from "@react-native-async-storage/async-storage";
import { actions } from "./actions";

export const initialState = {
  products: [
    { name: "testddd", stockMin: 2, stockActual: 3, recurrent: true },
    { name: "test", stockMin: 5, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
  ],
};

export const addProduct = (product) => ({
  type: actions.ADD_PRODUCT,
  product,
});

export const addStockActual = (idProduct) => ({
  type: actions.ADD_STOCK_ACTUAL,
  idProduct,
});

export const removeStockActual = (idProduct) => ({
  type: actions.REMOVE_STOCK_ACTUAL,
  idProduct,
});

export const replaceState = (state) => ({
  type: actions.REPLACE_STATE,
  state,
});

export const deleteProduct = (index) => ({
  type: actions.DELETE_PRODUCT,
  index,
});

const saveState = (state) => {
  AsyncStorage.setItem("Products", JSON.stringify(state))
    .then(() => console.log("save ok"))
    .catch((err) => console.log(err));
};

export const productReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === actions.ADD_PRODUCT) {
    newState.products = [...newState.products];
    newState.products.push(action.product);
    saveState(newState);
    return newState;
  }

  if (action.type === actions.ADD_STOCK_ACTUAL) {
    newState.products = [...newState.products];
    newState.products[action.idProduct].stockActual += 1;
    saveState(newState);
    return newState;
  }

  if (action.type === actions.REMOVE_STOCK_ACTUAL) {
    newState.products = [...newState.products];
    newState.products[action.idProduct].stockActual -= 1;
    saveState(newState);
    return newState;
  }

  if (action.type === actions.DELETE_PRODUCT) {
    newState.products = [...newState.products];
    newState.products.splice(action.index, 1);
    saveState(newState);
    return newState;
  }

  if (action.type === actions.REPLACE_STATE) {
    return action.state;
  }
};
