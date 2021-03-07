import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Price({ resultList, menuList }) {
  const sumPrice = menuList.reduce((price, menu) => {
    if (Object.keys(resultList).includes(menu.商品名)) {
      price = price + menu.値段;
    }
    return price;
  }, 0);

  return <Text style={styles.resultText}>{sumPrice + "円"}</Text>;
}

const styles = StyleSheet.create({
  resultText: {
    fontSize: 40,
  },
});
