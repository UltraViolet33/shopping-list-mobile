import { View, Text, Button, StyleSheet } from "react-native";

export default Home = ({ navigation }) => {
  const handleClick = () => {
    navigation.push("AddProduct");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List App</Text>
      </View>
      <View style={styles.menuContainer}>
        <Button title="Ajouter un produit" onPress={handleClick} />
        <Button title="Liste de produits" />
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
