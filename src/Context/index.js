import { useState, createContext } from "react";

const state = [
  { name: "tesgt", stockMin: 1, stockActual: 2, recurrent: false },
  { name: "test2", stockMin: 1, stockActual: 2, recurrent: false },
];

export const ProductContext = createContext(state);
