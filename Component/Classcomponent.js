//1
class Header extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1 align="center">HEADER CLASS COMPONENT {this.props.name}</h1>
        <h2 align="center">Hello {this.props.name}</h2>
        <p align="center">React js </p>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h1 align="center">
          CONTENTS COMPONENT {this.props.fname}
          {this.props.lname}
        </h1>
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1 align="center">FOOTER COMPONENT</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Header name="MEGHAVARNA" />
    <Content fname="MEGHA" lname="VARNA" />
    <Footer />
  </div>,
  document.getElementById("root")
);

//2
class Student extends React.Component {
  render() {
    return (
      <div>
        <h2 align="center">Student Name: {this.props.name}</h2>
        <h2 align="center">Student Age:{this.props.age}</h2>
        <h2 align="center">Student Gender:{this.props.gender}</h2>
        <h2 align="center">Student Ph.Number:{this.props.number}</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Student name="Meghavarna M" age="22" gender="Female" number="8660456543" />
  </div>,
  document.getElementById("root")
);

//3
class Form extends React.Component {
  render() {
    return (
      <div align="center">
        <h2 align="center">FirstName:{this.props.fname}</h2>
        <h2 align="center">LastName:{this.props.lname}</h2>
        <h2 align="center">Place:{this.props.Place}</h2>
        <button>Submit</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Form fname="Megha" lname="Varna" Place="Bengaluru" />
  </div>,
  document.getElementById("root")
);
