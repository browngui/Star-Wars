import React from 'react'
import { Form, Row,Col, Button} from 'react-bootstrap'
import './cadastro.css';
import {useState}from 'react';
import api from '../../services/api';


function Register() {

  const [userName, setuserName] = useState('');   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


  async function CreateUser(){
    
  try{
  
    const data = {
      userName,email,password
    }
  console.log(data)
    await api.post('/user', data);
      alert(`Usuario ${userName} cadastrado com sucesso`);
  
  }catch(err){
      alert(`Houve um erro: ${err}`);
  }
}
  return (
    <div className='corpo'>
      <p style={{fontSize: '50px', color: 'white', textAlign: 'center'}}> Tela de Cadastro</p>
    <Form >
    <Row>
      <Col>
        <Form.Control className='user'
        placeholder="User name"
         required 
         value={userName}
         onChange={e =>setuserName(e.target.value)}
          />

      </Col>
    </Row>
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
     <p></p>
      <Form.Control type="email"
       placeholder="Email" 
       required 
       value={email}
       onChange={e =>setEmail(e.target.value)}
       />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <p></p>
      <Form.Control type="password" 
      placeholder="Password" 
      required
      value={password}
      onChange={e =>setPassword(e.target.value)}
      />
    </Form.Group>
  </Row>

  <Button style={{fontSize: '23px'}} variant="primary" type="submit" onClick={CreateUser}>
    Cadastrar
  </Button>
</Form>
  </Form>
  </div>
  )
}

export default  Register