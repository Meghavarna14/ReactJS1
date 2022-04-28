class Welcome extends React.Component {
  state = {
    name: "Megha",
  };
  changeName() {
    //asynchronous
    this.setState({
      name: "Varna",
    });
  }
  render() {
    return (
      <div align="center">
        <h1 align="center">{this.state.name}</h1>
        <button onClick={() => this.changeName()}>CLICK</button>
      </div>
    );
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
