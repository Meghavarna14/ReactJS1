function App(props) {
  return (
    <div>
      <Home appName="Netflix" userName={props.userLoggedIn} />
    </div>
  );
}
function Home(props) {
  return (
    <div align="center">
      <marquee direction="right">
        <h1>{props.appName}</h1>
      </marquee>
      <marquee direction="left">
        <h1>{props.userName}</h1>
      </marquee>
    </div>
  );
}
ReactDOM.render(<App userLoggedIn="Scott" />, document.getElementById("root"));
