import { View, Text, StyleSheet } from "react-native";

export const AddPrice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajouter un prix</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input placeHold="Nom" />
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
  inputsContainer: {},
  buttonContainer: {
    margin: 10,
    alignItems: "center",
  },
});
