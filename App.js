import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";

import { Button } from "react-native-paper";

import createModel from "./solver/createModel";
// import createHealthyModel from "./solver/createHealthyModel";
// import createProtainModel from "./solver/createProtainModel";

import FoodList from "./components/foodList";
import Input from "./components/input";
import Price from "./components/price";
import CheckTime from "./components/checkTime";
// import solver from "javascript-lp-solver";
const solver = require("./src/solver");
// const solver = require("javascript-lp-solver");
export default function App() {
  const [upperPrice, setUpperPrice] = useState(0);
  const [calculate, setCalculate] = useState(false);
  const [time, setTime] = useState("朝");
  const [result, setResult] = useState({});

  const menuList = require("./assets/menu.json");

  function calculateModel() {
    const modelTest = createModel(menuList, time, upperPrice);
    // const modelTest = createProtainModel(menuList, time, upperPrice);

    // const modelTest = createHealthyModel(menuList, time, upperPrice);

    const results_p3 = solver.Solve(modelTest);
    setResult(results_p3);
    setCalculate(true);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>マック計算機</Text>
      </SafeAreaView>

      <ScrollView style={styles.itemList}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Input
              setUpperPrice={(upperPrice) => setUpperPrice(upperPrice)}
              upperPrice={upperPrice}
            />
            <CheckTime setValue={(newValue) => setTime(newValue)} time={time} />
            <View style={styles.button}>
              <Button mode="contained" onPress={calculateModel}>
                最適化計算する
              </Button>
            </View>

            {calculate && (
              <View style={styles.resultView}>
                <Text style={styles.resultText}>{`${result?.result}kcal`}</Text>
                <Price resultList={result} menuList={menuList} />
              </View>
            )}
            {calculate && <FoodList resultList={result} menuList={menuList} />}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    height: 100,
  },
  title: {
    fontSize: 26,
    color: "red",
    fontWeight: "bold",
  },
  itemList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  resultText: {
    fontSize: 40,
  },
  button: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  resultView: {
    alignItems: "center",
  },
});
