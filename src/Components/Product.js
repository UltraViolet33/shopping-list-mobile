import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useStore } from "../Context/Store";
import { addStockActual, removeStockActual } from "../Context/ProductReducer";
import Button from "./Button";

export default Product = ({ product, index, navigation }) => {
  const [, dispatch] = useStore();
  const [stock, setStock] = useState(product.stockActual);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (stock <= product.stockMin) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [stock]);

  const handlePageDetails = () => {
    navigation.push("ProductDetails", { product, index });
  };

  const addStock = () => {
    const tmpStock = stock + 1;
    setStock(tmpStock);
    dispatch(addStockActual(index));
  };

  const removeStock = () => {
    const tmpStock = stock - 1;
    setStock(tmpStock);
    dispatch(removeStockActual(index));
  };

  return (
    <View style={styles.productContainer}>
      <Text style={styles.nameProduct}>{product.name}</Text>
      <View style={styles.infoContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.colorWhite}>
            Stock Minimal : {product.stockMin}
          </Text>
          {warning ? (
            <Button styleBtn={styles.btnRemove} title="!"></Button>
          ) : null}
        </View>
        <View>
          <Text style={styles.colorWhite}>Actual stock : {stock}</Text>
          <View style={styles.btnContainer}>
            <Button
              styleBtn={styles.btnAdd}
              press={addStock}
              title="+"
            ></Button>
            <Button
              styleBtn={styles.btnRemove}
              press={removeStock}
              title="-"
            ></Button>
          </View>
        </View>
      </View>
      <Button
        styleBtn={styles.btnDelete}
        press={handlePageDetails}
        title="Details"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "#133b63",
    margin: 10,
    padding: 5,
    height: 220,
  },
  nameProduct: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  warning: {
    backgroundColor: "#dd4840",
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  infoContainer: {
    flex: 1,
    margin: 10,
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#2289e2",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
  },
  colorWhite: {
    color: "white",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnAdd: {
    backgroundColor: "#3db23d",
    width: 40,
    height: 40,
  },
  btnRemove: {
    backgroundColor: "#dd4840",
    width: 40,
    height: 40,
  },
  btnDelete: {
    backgroundColor: "#dd4840",
    alignSelf: "center",
    width: 100,
  },
});
