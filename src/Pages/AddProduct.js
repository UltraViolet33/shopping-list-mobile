import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useStore } from "../Context/Store";
import { addProduct } from "../Context/ProductReducer";
import Input from "../Components/Input";
import Button from "../Components/Button";

export default AddProduct = ({ navigation }) => {
  const [, dispatch] = useStore();
  const REGEX_NUMBER = /^[0-9]+$/;
  const [recurrent, setRecurrent] = useState(false);

  const [product, setProduct] = useState({
    name: null,
    stockActual: null,
    stockMin: null,
    recurrent: false,
  });

  const setName = (name) => {
    const tmpProduct = { ...product };
    tmpProduct.name = name;
    setProduct(tmpProduct);
  };

  const setStockActual = (stock) => {
    const tmpProduct = { ...product };
    tmpProduct.stockActual = stock;
    setProduct(tmpProduct);
  };

  const setStockMin = (stockMin) => {
    const tmpProduct = { ...product };
    tmpProduct.stockMin = stockMin;
    setProduct(tmpProduct);
  };

  const addNewProduct = () => {
    const tmpProduct = { ...product };

    if (
      tmpProduct.name === null ||
      tmpProduct.stockActual === null ||
      tmpProduct.stockMin === null
    ) {
      alert("Veuillez remplit tous les champs !");
      return false;
    }

    if (!tmpProduct.stockActual.match(REGEX_NUMBER)) {
      alert("Le stock Actuel doit être un nombre");
      return false;
    }

    if (!tmpProduct.stockMin.match(REGEX_NUMBER)) {
      alert("Le stock Minimal doit être un nombre");
      return false;
    }

    tmpProduct.recurrent = recurrent;
    dispatch(addProduct(tmpProduct));
    navigation.push("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajouter un produit</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input onChange={setName} placeHold="Nom" />
        <Input onChange={setStockActual} placeHold="Stock Minimal" />
        <Input onChange={setStockMin} placeHold="Stock Actuel" />
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={recurrent}
            onValueChange={setRecurrent}
          />
          <Text style={styles.checkboxText}>Recurrent</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} press={addNewProduct} title="VALIDER" />
        </View>
      </View>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  checkbox: {
    margin: 8,
  },
  checkboxText: {
    fontSize: 20,
    color: "white",
  },
});
