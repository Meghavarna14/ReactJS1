//1
var e1 = React.createElement("h1", null, "REACT JS FOR ONEBILL");
ReactDOM.render(e1, document.getElementById("root"));

//2
var e2 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Car"),
  React.createElement("li", null, "Bike")
);
ReactDOM.render(e2, document.getElementById("root"));

//3
const mobiles = ["iphone", "samsung", "redme", "nokia", "oneplus"];
const e3 = React.createElement(
  "ul",
  null,
  mobiles.map((mobile, index) => {
    return React.createElement("li", { key: index }, mobile);
  })
);
ReactDOM.render(e3, document.getElementById("root"));

//4
const e1 = React.createElement("h1", null, "MEGHAVARNA");
ReactDOM.render(e1, document.getElementById("root"));

//5
const e2 = React.createElement("h1", null, "HAVE A NICE DAY!!!");
ReactDOM.render(e2, document.getElementById("root"));

//6
const os = ["Linux", "Windows", "MacOs", "Android"];
const e4 = React.createElement(
  "ul",
  null,
  os.map((ops, index) => {
    return React.createElement("li", { key: index }, ops);
  })
);
ReactDOM.render(e4, document.getElementById("root"));

//7
const flowers = ["Lily", "Sunflower", "Jasmine"];
const e5 = React.createElement(
  "ul",
  null,
  flowers.map((flower, index) => {
    return React.createElement("li", { key: index }, flower);
  })
);
ReactDOM.render(e5, document.getElementById("root"));
