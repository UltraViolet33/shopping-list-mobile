import { View, Text, StyleSheet, ScrollView } from "react-native";
import Product from "../Components/Product";
import { useStore } from "../Context/Store";

export default ProductList = ({ navigation, route }) => {
  const [state] = useStore();
  const { products } = state;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Listes des produits</Text>
      </View>
      <ScrollView style={styles.scrolView}>
        <View>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                index={index}
                product={product}
                navigation={navigation}
              ></Product>
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
