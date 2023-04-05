import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default Button = ({ press, styleBtn = {}, title }) => {
  return (
    <View>
      <TouchableOpacity onPress={press} style={[styles.button, styleBtn]}>
        <Text style={styles.textBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 60,
    backgroundColor: "#1c6eb5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  textBtn: {
    color: "white",
    fontSize: 15,
  },
});
