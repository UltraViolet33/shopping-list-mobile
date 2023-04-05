import { View, Text, StyleSheet } from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import { useStore } from "../Context/Store";
import Button from "../Components/Button";
import { useState } from "react";
import { addPrice } from "../Context/ProductReducer";
import NumericTextInput from "@wwdrew/react-native-numeric-textinput";

export const AddPrice = ({ route, navigation }) => {
  const [, dispatch] = useStore();
  const [state] = useStore();
  const stores = state.stores;

  const [price, setPrice] = useState({
    idProduct: route.params.idProduct,
    idStore: null,
    price: null,
  });

  const storesRadio = () => {
    return stores.map((store, index) => ({
      label: store.name,
      id: index,
    }));
  };

  const setStore = (store) => {
    const tmpPrice = { ...price };
    tmpPrice.idStore = store.id;
    setPrice(tmpPrice);
  };

  const setInputPrice = (newPrice) => {
    const tmpPrice = { ...price };
    tmpPrice.price = newPrice;
    setPrice(tmpPrice);
  };

  const addPriceToState = () => {
    dispatch(addPrice(price));
    navigation.push("ProductList");
  };

  const data = storesRadio();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajouter un prix</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input placeHold="Prix" onChange={setInputPrice} />
      </View>
      <RadioButtonRN
        selectedBtn={(e) => {
          setStore(e);
        }}
        data={data}
      />
      <Button press={addPriceToState} title="Valider" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  titleContainer: {
    backgroundColor: "red",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputsContainer: {},
  buttonContainer: {
    margin: 10,
    alignItems: "center",
  },
});
