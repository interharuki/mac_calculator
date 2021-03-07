import React from "react";
import {

  StyleSheet,

  View,

} from "react-native";

import { TextInput } from "react-native-paper";

export default function Input({ setUpperPrice, upperPrice }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          label="上限金額"
          mode="outlined"
          value={upperPrice}
          onChangeText={setUpperPrice}
          keyboardType="number-pad"
        />
      </View>
    </View>
    // <View style={styles.container}>
    //   <View>
    //     <Text>上限金額</Text>
    //   </View>
    //   <View style={styles.inputArea}>
    //     <TextInput
    //       style={styles.input}
    //       underlineColorAndroid="transparent"
    //       onChangeText={onChangeText}
    //       keyboardType="number-pad"
    //     />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    // flexDirection: "row",
    flex: 1,
    width: "50%",
    marginTop: 64,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: "#008080",
    marginRight: 20,
  },
  itemText: {
    fontSize: 22,
    margin: 10,
  },
});
