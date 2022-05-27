import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

export const ListStore = ({ route }) => {
  const [productsList] = useState(route.params.storeProducts);

  const totalPrice = () => {
    let total = 0;
    for (const product of productsList) {
      total += product.price * product.number;
    }
    return total;
  };

  const total = totalPrice();

  const productElement = (product) => {
    // let numberToBuy = calculateNumber(product);

    return (
      <View style={styles.list}>
        <Text style={styles.text}>Produit : {product.name}</Text>
        <Text style={styles.text}>Price : {product.price} €</Text>
        <Text style={styles.text}>Conbien : {product.number}</Text>
        <Text style={styles.text}>
          Prix : Total : {product.number * product.price} €
        </Text>
        {/* <Text style={styles.text}>A acheter : {numberToBuy} </Text> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Listes des produits</Text>
        <Text>Nombre de produits à acheter : </Text>
        <Text>Prix Total : {total} </Text>
      </View>

      <ScrollView style={styles.scrolView}>
        <View>
          {productsList.map((product, index) => productElement(product))}
        </View>
      </ScrollView>
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
  scrolView: {
    height: "80%",
  },
  list: {
    backgroundColor: "#133b63",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    margin: 5,
  },
});
