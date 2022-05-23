import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default Home = ({ navigation }) => {
  const [products, setProducts] = useState([
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
    { name: "test", stockMin: 2, stockActual: 3, recurrent: false },
  ]);

  const handleClick = (page, params = null) => {
    navigation.push(page, params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List App</Text>
      </View>
      <View style={styles.menuContainer}>
        <Button
          title="Ajouter un produit"
          onPress={() => handleClick("AddProduct")}
        />
        <Button
          title="Liste de produits"
          onPress={() => handleClick("ProductList", { products })}
        />
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
  menuContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
