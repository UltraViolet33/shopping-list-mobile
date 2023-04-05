import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useStore } from "../Context/Store";

export default Home = ({ navigation }) => {
  const { logo } = useStore();

  const handleClick = (page) => {
    navigation.push(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List App {logo}</Text>
      </View>
      <View style={styles.menuContainer}>
        <Button
          title="Ajouter un produit"
          onPress={() => handleClick("AddProduct")}
        />
        <Button
          title="Liste de produits"
          onPress={() => handleClick("ProductList")}
        />
        <Button
          title="Liste de courses"
          onPress={() => handleClick("ShoppingList")}
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
    flex: 0.3,
    justifyContent: "space-around",
  },
});
