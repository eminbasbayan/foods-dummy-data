import React from "react";
import DATA from "../../data/mySpecialData.json";
import ShowFoods from "./ShowFoods";
import Search from "../Search";
function Foods() {
  const foodItem = DATA.foods.map((item) => (
    <div key={item.id} className="col-lg-6">
      <ShowFoods
        title={item.title}
        type={item.type}
        img={item.img}
        description={item.description}
      />
    </div>
  ));
  return (
    <div>
      <h1 className="text-light">Foods</h1>
      <Search />
      <div className="row">{foodItem}</div>
    </div>
  );
}

export default Foods;
