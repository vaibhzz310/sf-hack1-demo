import React from "react";
//import "./App.scss";
import { Login, Register } from "./components/index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    //   this.rightSide.classList.add("right");
  }

  changeState() {
    // const { isLogginActive } = this.state;
    // if (isLogginActive) {
    //   this.rightSide.classList.remove("right");
    //   this.rightSide.classList.add("left");
    // } else {
    //   this.rightSide.classList.remove("left");
    //   this.rightSide.classList.add("right");
    // }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                onClick={() => this.setState({ isLogginActive: false })}
              >
                Register
              </Nav.Link>
              <Nav.Link onClick={() => this.setState({ isLogginActive: true })}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          {/* <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          /> */}
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
