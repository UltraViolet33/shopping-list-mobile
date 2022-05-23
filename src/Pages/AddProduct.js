import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import Input from "../Components/Input";
import Button from "../Components/Button";

export default AddProduct = ({}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajouter un produit</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input placeHold="Nom" />
        <Input placeHold="Stock Minimal" />
        <Input placeHold="Stock Actuel" />
        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.checkboxText}>Normal checkbox</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="VALIDER" />
        </View>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  checkbox: {
    margin: 8,
  },
  checkboxText: {
    fontSize: 20,
    color: "white",
  },
});
