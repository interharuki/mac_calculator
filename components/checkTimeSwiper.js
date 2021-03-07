import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

export default function CheckTimeSwiper() {
  return (
    <Swiper showsButtons={true} onIndexChanged={(index) => console.log(index)}>
      <View sytle={styles.slide}>
        <Text style={styles.text}>朝</Text>
      </View>
      <View sytle={styles.slide}>
        <Text style={styles.text}>昼</Text>
      </View>
      <View sytle={styles.slide}>
        <Text style={styles.text}>夜</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    // width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    fontSize: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
