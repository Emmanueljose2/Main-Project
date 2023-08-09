import React, { useState } from "react";
import { Form } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/form.css";

const Login = () => {
  const navigate = new useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const saveData = (e) => {
    e.preventDefault();
    var dat = {
      email: username,
      password: password,
    };
    axios.post("http://localhost:4000/login", dat).then((response) => {
      if (response.data.login === "admin") {
        sessionStorage.setItem("aid", response.data.id);
        navigate("/Admin/");
      } else if (response.data.login === "user") {
        sessionStorage.setItem("uid", response.data.id);
        navigate("/User/");
      } else if (response.data.login === "owner") {
        sessionStorage.setItem("sid", response.data.id);
        navigate("/StationOwner/");
      } else {
        alert("Invalid Credetials");
      }
    });
  };

  return (
    <Form className="form2 ">
      <div className="font">
        <h4>Login</h4>
      </div>

      <FormGroup className="Name">
        <Label for="username" className="style">
          UserName
        </Label>
        <Input
          id="username"
          name="lastname"
          placeholder="UserName"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className="Name">
        <Label for="password" className="style">
          Password
        </Label>
        <Input
          id="password"
          name="lastname"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup className=" button1">
        <button onClick={saveData}>Submit</button>
      </FormGroup>
    </Form>
  );
};

export default Login;
