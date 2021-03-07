import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function CheckTime({ setValue, time }) {
  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={time}
    >
      <View style={styles.button}>
        <View>
          <Text style={styles.buttonText}>朝</Text>
          <RadioButton value="朝" />
        </View>
        <View>
          <Text style={styles.buttonText}>昼</Text>
          <RadioButton value="昼" />
        </View>
        <View>
          <Text style={styles.buttonText}>夜</Text>
          <RadioButton value="夜" />
        </View>
      </View>
    </RadioButton.Group>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});
