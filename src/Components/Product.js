import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

export default Product = ({ product, index }) => {
  
  const deleteProduct = () => {};
  const addStock = () => {};
  const removeStock = () => {};

  return (
    <View style={styles.productContainer}>
      <Text style={styles.nameProduct}>{product.name}</Text>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.colorWhite}>
            Stock Minimal : {product.stockMin}
          </Text>
          {product.stockActual <= product.stockMin ? (
            <Text>A acheter : {}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.colorWhite}>
            Actual stock : {product.stockActual}
          </Text>
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
        press={deleteProduct}
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
