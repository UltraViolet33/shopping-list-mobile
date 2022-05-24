import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import AddProduct from "./src/Pages/AddProduct";
import ProductList from "./src/Pages/ProductList";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useStore } from "../Context/Store";
// import { replaceState } from "../Context/ProductReducer";

import { replaceState } from "./src/Context/ProductReducer";
import { useStore } from "./src/Context/Store";
const Stack = createNativeStackNavigator();

export const Router = () => {
  const [, dispatch] = useStore();

  useEffect(() => {
    AsyncStorage.getItem("Products").then((JSONproducts) => {
      const products = JSON.parse(JSONproducts || "[]");

      dispatch(replaceState(products));
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
