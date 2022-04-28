class Admin extends React.Component {
  state = {
    txt: true,
  };
  render() {
    if ({ this.state.txt }) {
      Admin();
      {
        return (
          <div>
            <h1>Login </h1>
            <h1>Home</h1>
            <h1>{this.Admin}</h1>
          </div>
        );
      }
    } else if ({ this.state.txt }) {
      user();
      {
        return (
          <div>
            <h1>Login </h1>
            <h1>{this.UserName}</h1>
          </div>
        );
      }
    }
  }
}
ReactDOM.render(
  <div>
    <Admin UserName="something" Admin="Megha" />
    <button onClick={() => User()}>Login</button>
  </div>,
  document.getElementById("root")
);
