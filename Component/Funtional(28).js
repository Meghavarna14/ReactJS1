function Content({ sub1, sub2, sub3 }) {
  return (
    <h1>
      {sub1}
      {sub2}
      {sub3}
    </h1>
  );
}
function Footer({ person }) {
  return (
    <h1>
      {person.fname}
      {person.lname}
    </h1>
  );
}
ReactDOM.render(
  <div>
    <Content sub1="Java" sub2="Reactjs" sub3="Javascript" />
    <Footer person={{ fname: "Megha", lname: "Varna" }} />
  </div>,

  document.getElementById("root")
);
