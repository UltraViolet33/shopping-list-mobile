import { Text, View, StyleSheet } from "react-native";

export const Store = ({ stores, idProduct }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magasins : </Text>
      {stores.map((store) => (
        <View style={styles.storeContainer}>
          <Text style={styles.store}>{store.name} </Text>
          {store.productPrice.map((price) => {
            if (price.idProduct == idProduct) {
              return <Text> - {price.price} €</Text>;
            }
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    margin: 10,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  storeContainer: {
    flexDirection: "row",
  },
  store: {
    fontSize: 15,
  },
});
