//1
const fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];
const data = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    })}
  </ul>
);
ReactDOM.render(data, document.getElementById("root"));

//2
const colors = ["Black", "Blue", "Pink", "Green", "Yellow", "Orange"];
const data = (
  <h1>
    <ul>
      {colors.map((color, index) => {
        return <li key={index}>{color}</li>;
      })}
    </ul>
  </h1>
);
ReactDOM.render(data, document.getElementById("root"));

//3
const laptops = ["Dell", "HP", "Lenovo", "Apple", "Asus"];
const data = (
  <h1>
    <ul>
      {laptops.map((laptop, index) => {
        return <li key={index}>{laptop}</li>;
      })}
    </ul>
  </h1>
);
ReactDOM.render(data, document.getElementById("root"));
