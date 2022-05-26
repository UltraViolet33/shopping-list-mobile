import { Text, View } from "react-native";

export const Store = ({ stores, idProduct }) => {
  return (
    <View>
      {stores.map((store) => (
        <View>
          <Text>{store.name}</Text>
          {store.productPrice.map((price) => {
            if (price.idProduct == idProduct) {
              return (
                <View>
                  <Text>{price.price}</Text>
                </View>
              );
            }
          })}
        </View>
      ))}
    </View>
  );
};
