import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  numberContainer: {
    width: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  subText: {
    fontSize: 30,
    color: "gray",
    textAlign: "center",
    justifyContent: "center",
  },
  image: {
    width: 95,
    height: 95,
  },
  calPriceView: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-evenly",
  },
  calPriceText: {
    fontSize: 15,
  },
});

export default function Food({ foodName, number, imageSrc, cal, price }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={imageSrc} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{foodName}</Text>
      </View>
      <View style={styles.calPriceView}>
        <View>
          <Text style={styles.calPriceText}>{`${cal}kcal`}</Text>
        </View>

        <View>
          <Text style={styles.calPriceText}>{`${price}円`}</Text>
        </View>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.subText}>{number}</Text>
      </View>
    </View>
  );
}
