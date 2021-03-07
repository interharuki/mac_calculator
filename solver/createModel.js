

export default function createModel(menuList, time, upperPrice) {
  const variables = {};
  const ints = {};
  const constraints = {};
  let filterMenuList = menuList.filter((menu) => menu.時間.includes(time));
  filterMenuList.forEach((menu) => {
    variables[menu.商品名] = {
      energy: menu.エネルギー,
      price: menu.値段,
      [menu.商品名]: 1,
    };
    ints[menu.商品名] = 1;
    constraints["price"] = { max: upperPrice };
    constraints[menu.商品名] = { max: 1 };
  });
  //min >=
  //max <=
  const model = {
    optimize: "energy",
    opType: "max",
    constraints: constraints,
    variables: variables,
    ints: ints,
  };

  return model;
}
