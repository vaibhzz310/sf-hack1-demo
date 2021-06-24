import React, { useState, useEffect } from "react";
import loginImg from "../login.svg";
import DraggableDialog, { PaperComponent } from "./PaperComponent";
import Button from "@material-ui/core/Button";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sty, setSty] = useState({ color: "black" });
  const [msg, setMsg] = useState("");
  const [xcrd, setXcrd] = useState(0);
  const [ycrd, setYcrd] = useState(0);
  const [coordinates, setCoordinates] = useState([
    [0, 0],
    [0, 0],
    [0, 0]
  ]);
  const [countclick, setCountClick] = useState(0);

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const _onMouseMove = (e) => {
    setXcrd(e.nativeEvent.offsetX);
    setYcrd(e.nativeEvent.offsetY);
  };
  const saveCoordinates = () => {
    const temp = coordinates;
    temp[countclick][0] = xcrd;
    temp[countclick][1] = ycrd;
    setCoordinates(temp);
    let temp2 = countclick;
    temp2 = temp2 + 1;
    setCountClick(temp2);
  };
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">
        <h1>Register</h1>
      </div>
      <div className="content">
        {/* <div className="image">
          <img src={loginImg} />
        </div> */}
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={changeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onchange={changeEmail}
            />
          </div>
          <div className="form-group">
            <img
              onMouseMove={_onMouseMove.bind(this)}
              onClick={() => {
                saveCoordinates();
              }}
              width="350"
              height="350"
              src="https://i.ibb.co/kBjy0P1/dtx-trailblazer-header-v1-2.png"
              // src="http://www.mariogiannini.com/wp-content/uploads/2017/10/Photo-200x300.jpg"
              alt="Error"
            />
            <div className="form-group">
              <Button
                variant="contained"
                colour="secondary"
                onClick={() => {
                  setCoordinates([
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ]);
                  setCountClick(0);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
          <div style={{ color: "red" }} class="form-group">
            <br />
            {xcrd} {ycrd}
          </div>
          <div style={sty}>
            <br />"{coordinates[0][0]} {coordinates[0][1]}"____ "
            {coordinates[1][0]} {coordinates[1][1]}"____ "{coordinates[2][0]}{" "}
            {coordinates[2][1]}"
          </div>
        </div>
      </div>
      <div style={sty} class="form-group">
        <br />
        <h4>{msg}</h4>
      </div>
      <div className="footer">
        <Button
          onClick={() => {
            setSty({ color: "green" });
            setMsg("Registration successfull");
          }}
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </div>
    </div>
  );
};
export { Register };
