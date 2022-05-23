import { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Product from "../Components/Product";

export default ProductList = ({ navigation, route }) => {
  const [products, setProducts] = useState(route.params.products);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Listes des produits</Text>
      </View>
      <ScrollView style={styles.scrolView}>
        <View>
          {products.map((product, index) => {
            return (
              <Product key={index} index={index} product={product}></Product>
            );
          })}
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
});
