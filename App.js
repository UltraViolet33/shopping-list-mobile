import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StoreProvider } from "./src/Context/Store";
import { initialState, productReducer } from "./src/Context/ProductReducer";
import { Router } from "./Router";

export default function App() {
  return (
    <StoreProvider initialState={initialState} reducer={productReducer}>
      <Router></Router>
      <StatusBar style="auto" />
    </StoreProvider>
  );
}
