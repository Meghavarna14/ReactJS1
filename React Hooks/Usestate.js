// function MyApp() {
//   const [name, setName] = React.useState("MEGHAVARNA");
//   const UpdateChange = () => {
//     // console.log(a);
//     console.log(name);
//     setName("SMITH");
//   };
//   return (
//     <div align="center">
//       <h1>{name}</h1>
//       <button onClick={UpdateChange}>UPDATE</button>
//       {/* <button
//         onClick={() => {
//           UpdateChange("MILLER");
//         }}
//       >
//         UPDATE
//       </button> */}
//     </div>
//   );
// }
// ReactDOM.render(<MyApp />, document.getElementById("root"));

//object
// function MyApp() {
//   let [name, setName] = React.useState({ fName: "Megha", lName: "Varna" });
//   const UpdateChange = () => {
//     console.log(name);
//     setName({ ...name, lName: "Balaji" });
//   };
//   return (
//     <div align="center">
//       <h1>{name.fName}</h1>
//       <h1>{name.lName}</h1>
//       <button onClick={UpdateChange}>UPDATE</button>
//     </div>
//   );
// }
// ReactDOM.render(<MyApp />, document.getElementById("root"));

//Arrays
function MyApp() {
  const [name, setName] = React.useState({arr = ["Megha", "Bhagya", "Paddu"]});
  const UpdateChange = () => {
    console.log(name);
    setName({...name, arr =["Sindhu"]});
  };
  return (
    <div align="center">
      <h1>{name.arr}</h1>
      <button onClick={UpdateChange}>UPDATE</button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
