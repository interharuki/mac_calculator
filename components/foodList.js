import React from "react";
import { StyleSheet, View} from "react-native";
import Food from "./food";
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
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  image: {
    width: 95,
    height: 95,
  },
});

function decideImage(name, menuList) {
  const findMenu = menuList.find((menu) => menu.商品名 === name);
  if (findMenu.商品名 === name) {
    switch (findMenu.商品区分) {
      case "ドリンク":
        return require("../assets/drink.png");
      case "バーガー":
        return require("../assets/hamburger.png");
      case "サイド":
        return require("../assets/sideMenu.png");
      case "セット":
        return require("../assets/set.png");
      default:
        return;
    }
  }
  return;
}

export default function FoodList({ resultList, menuList }) {
  const keysList = Object.keys(resultList);

  return (
    <View>
      {keysList.map((key) => {
        if (
          key !== "bounded" &&
          key !== "feasible" &&
          key !== "isIntegral" &&
          key !== "result"
        ) {
          return (
            <Food
              foodName={key}
              number={resultList[key]}
              imageSrc={decideImage(key, menuList)}
              cal={menuList.find((menu) => menu.商品名 === key).エネルギー}
              price={menuList.find((menu) => menu.商品名 === key).値段}
            />
          );
        }
      })}
    </View>
  );
}
