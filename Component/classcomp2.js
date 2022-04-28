class Header extends React.Component {
  render() {
    console.log(this.props.uName);
    this.props.uName = "Varna";
    return this.props.uName;
  }
}
ReactDOM.render(<Header uName="Megha" />, document.getElementById("root"));
//props are immutable it has only read only property
