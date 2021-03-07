
const nutritionDict = {
  エネルギー: 2300.0,
  たんぱく質: 65.0,
  脂質: 63.9,
  炭水化物: 330.6,
  カルシウム: 750.0,
  鉄: 7.5,
  ビタミンA: 900.0,
  ビタミンB1: 1.4,
  ビタミンB2: 1.6,
  ビタミンC: 100.0,
  食物繊: 21.0,
  食塩相当量: 7.5,
};

export default function createHealthyModel(menuList, time, upperPrice) {
  const variables = {};
  const ints = {};
  const constraints = {};
  let filterMenuList = menuList.filter((menu) => menu.時間.includes(time));
  filterMenuList.forEach((menu) => {
    variables[menu.商品名] = {
      energy: menu.エネルギー,
      price: menu.値段,
      protain: menu.たんぱく質,
      oil: menu.脂質,
      carbo: menu.炭水化物,
      cal: menu.カルシウム,
      fe: menu.鉄,
      viA: menu.ビタミンA,
      viB1: menu.ビタミンB1,
      viB2: menu.ビタミンB2,
      viC: menu.ビタミンC,
      seni: menu.食物繊,
      solt: menu.食塩相当量,
      ratio:
        menu.エネルギー / nutritionDict.エネルギー +
        menu.たんぱく質 / nutritionDict.たんぱく質 +
        menu.脂質 / nutritionDict.脂質 +
        menu.炭水化物 / nutritionDict.炭水化物 +
        menu.カルシウム / nutritionDict.カルシウム +
        menu.鉄 / nutritionDict.鉄 +
        menu.ビタミンA / nutritionDict.ビタミンA +
        menu.ビタミンB1 / nutritionDict.ビタミンB1 +
        menu.ビタミンB2 / nutritionDict.ビタミンB2 +
        menu.ビタミンC / nutritionDict.ビタミンC +
        menu.食物繊 / nutritionDict.食物繊,
      [menu.商品名]: 1,
    };
    ints[menu.商品名] = 1;
    constraints["price"] = { max: upperPrice };
    constraints["protain"] = { max: nutritionDict.たんぱく質 * 1.2 };
    constraints["energy"] = { max: nutritionDict.エネルギー * 1.2 };
    constraints["oil"] = { max: nutritionDict.脂質 * 1.2 };
    constraints["carbo"] = { max: nutritionDict.炭水化物 * 1.2 };
    constraints["cal"] = { max: nutritionDict.カルシウム * 1.2 };
    constraints["fe"] = { max: nutritionDict.鉄 * 1.2 };
    constraints["viA"] = { max: nutritionDict.ビタミンA * 1.2 };
    constraints["viB1"] = { max: nutritionDict.ビタミンB1 * 1.2 };
    constraints["viB2"] = { max: nutritionDict.ビタミンB2 * 1.1 };
    constraints["viC"] = { max: nutritionDict.ビタミンC * 1.2 };
    constraints["seni"] = { max: nutritionDict.食物繊 * 1.2 };
    constraints["solt"] = { max: nutritionDict.食塩相当量 * 1.2 };
  });
  console.log(variables);
  //min >=
  //max <=
  const model = {
    optimize: "ratio",
    opType: "max",
    constraints: constraints,
    variables: variables,
    // ints: ints,
  };

  return model;
}
