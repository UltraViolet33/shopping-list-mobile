import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Pages/Home";
import AddProduct from "./src/Pages/AddProduct";
import ProductList from "./src/Pages/ProductList";
import { StoreProvider } from "./src/Context/Store";
import { initialState, productReducer } from "./src/Context/ProductReducer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider initialState={initialState} reducer={productReducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </StoreProvider>
  );
}
