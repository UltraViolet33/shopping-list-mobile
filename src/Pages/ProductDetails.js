import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { useStore } from "../Context/Store";
import { deleteProduct } from "../Context/ProductReducer";
import { Store } from "../Components/Store";
import Button from "../Components/Button";

export default ProductDetails = ({ route, navigation }) => {
  const [state, dispatch] = useStore();
  const [product, setProduct] = useState(route.params.product);

  const stores = state.stores;

  const deleteProd = () => {
    dispatch(deleteProduct(route.params.index));
    navigation.push("ProductList");
  };

  const goToPricePage = () => {
    const index = route.params.index;
    const idProduct = product.id;
    navigation.push("AddPrice", { idProduct });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameProduct}>{product.name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.stocksContainer}>
          <Text style={styles.infos}>Stock Minimal : {product.stockMin}</Text>
          <Text style={styles.infos}>Actual stock : {product.stockActual}</Text>
        </View>
        <View>
          <Text style={styles.infos}>
            Recurrent : {product.recurrent ? "OUI" : "NON"}
          </Text>
        </View>
      </View>
      <View>
        <Store stores={stores} idProduct={product.id} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Supprimer"
          press={deleteProd}
          styleBtn={{ backgroundColor: "red" }}
        />
        <Button
          title="Ajouter un prix"
          press={goToPricePage}
          styleBtn={{ backgroundColor: "red" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#133b63",
    margin: 10,
    padding: 5,
    height: 220,
  },
  nameProduct: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  infoContainer: {
    margin: 10,
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#2289e2",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
  },
  stocksContainer: {},
  infos: {
    color: "white",
    fontSize: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
