import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="corpoo">
      <p style={{fontSize: '50px', color: 'white', textAlign: 'center'}}> Bem vindo!</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="head">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="head">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <Form.Label><Link to='/cadastro' style={{fontSize: '25px', color: 'white'}}> Sem cadastro?</Link></Form.Label>

          <br/>
        </Form.Group>
        <Button block="true" size="lg" type="submit">
          Login
        </Button>

      </Form>

      <Form> 

      </Form>
    </div>
  );
} 