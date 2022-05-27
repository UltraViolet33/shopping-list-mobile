import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useStore } from "../Context/Store";

export default ShoppingList = ({ navigation }) => {
  const [state] = useStore();
  const { products, stores } = state;

  const filterProducts = () => {
    return products.filter(
      (product) => product.stockActual <= product.stockMin
    );
  };

  const calculateNumber = (product) => {
    let numberToBuy = 0;
    if (product.stockActual === product.stockMin) {
      numberToBuy = 1;
    } else {
      numberToBuy = product.stockMin - product.stockActual + 1;
    }
    return numberToBuy;
  };

  const numberTotal = () => {
    let numberTotal = 0;
    for (const product of products) {
      numberTotal += calculateNumber(product);
    }
    return numberTotal;
  };

  const [productsList, setProducts] = useState(filterProducts(products));
  const total = numberTotal();

  const productElement = (product) => {
    let numberToBuy = calculateNumber(product);

    return (
      <View style={styles.list}>
        <Text style={styles.text}>Produit : {product.name}</Text>
        <Text style={styles.text}>A acheter : {numberToBuy} </Text>
      </View>
    );
  };

  const productListByStore = (store) => {
    const productsToBuy = filterProducts();
    let storeList;

    if (store === 0) {
      storeList = stores[0].productPrice;
    } else {
      storeList = stores[1].productPrice;
    }

    const storeProducts = [];

    for (const product of productsToBuy) {
      for (const price of storeList) {
        if (product.id == price.idProduct) {
          let productObj = {};
          productObj.name = product.name;
          productObj.price = price.price;
          productObj.number = calculateNumber(product);
          storeProducts.push(productObj);
        }
      }
    }

    navigation.push("ListStore", { storeProducts });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Listes des produits</Text>
        <Text>Nombre de produits à acheter : {total}</Text>
      </View>
      <View>
        <Button
          title="Liste pour Lidl"
          onPress={() => {
            productListByStore(0);
          }}
        />

        <Button
          title="Liste pour Auchan"
          onPress={() => {
            productListByStore(1);
          }}
        />
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
